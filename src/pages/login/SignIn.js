import React, { useState } from "react";
import app from "../../Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Hidden,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const auth = getAuth(app);
const firestore = getFirestore(app);

export default function SignIn({ onChangeHeadline }) {
  const [state, setState] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    showPassword: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  async function handleRegister(name, email, password, lastName) {
    const infoUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((userFirebase) => {
      return userFirebase;
    });
    const docRef = doc(firestore, `users/${infoUser.user.uid}`);
    setDoc(docRef, { email: email, name: name, lastName: lastName });
  }

  const validate = () => {
    let temp = {};
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    temp.name = state.name ? "" : "Este campo es requerido!";
    temp.lastName = state.lastName ? "" : "Este campo es requerido!";
    temp.email = regex.test(state.email) ? "" : "No es un correo valido!";
    temp.password = state.password ? "" : "Minimo 6 caracteres!";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const name = state.name;
      const lastName = state.lastName;
      const email = state.email;
      const password = state.password;
      handleRegister(name, email, password, lastName);
    }
  };

  const handleClickShowPassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container spacing={2}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <Grid item xs={10} md={6} lg={6}>
          <Typography sx={{ color: "gray" }}>REGISTRO</Typography>
          <Typography variant="h4">Crea una cuenta</Typography>
          <Typography sx={{ color: "gray" }}>
            Complete el formulario para comenzar.
          </Typography>
          <Grid container spacing={4} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6} lg={6}>
              <Typography>Ingresa tu nombre</Typography>
              <TextField
                id="name"
                label="Nombre"
                name="name"
                onChange={handleChange}
                fullWidth
                required
                sx={{ mt: 2 }}
                {...(errors.name && {
                  error: true,
                  helperText: errors.name,
                })}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Typography>Ingresa tu apellido</Typography>
              <TextField
                id="lastName"
                label="Apellido"
                name="lastName"
                onChange={handleChange}
                autoComplete="lastName"
                fullWidth
                required
                sx={{ mt: 2 }}
                {...(errors.lastName && {
                  error: true,
                  helperText: errors.lastName,
                })}
              />
            </Grid>
          </Grid>
          <Typography sx={{ mt: 3 }}>Ingresa tu correo</Typography>
          <TextField
            id="email"
            label="Correo"
            name="email"
            onChange={handleChange}
            autoComplete="email"
            fullWidth
            required
            sx={{ mt: 2 }}
            {...(errors.email && {
              error: true,
              helperText: errors.email,
            })}
          />
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Typography>Ingresa tu contraseña</Typography>
            <Link sx={{ textDecoration: "none" }}>
              ¿Olvidaste tu contraseña?
            </Link>
          </Box>
          <FormControl sx={{ mt: 2 }} variant="outlined" fullWidth required>
            <InputLabel>Contraseña</InputLabel>
            <OutlinedInput
              type={state.showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              label="Contraseña"
              {...(errors.password && {
                error: true,
              })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {state.showPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors.password && (
              <FormHelperText error id="accountId-error">
                {errors.password}
              </FormHelperText>
            )}
          </FormControl>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Typography>
              ¿Ya tienes una cuenta?{" "}
              <Link
                href="#"
                variant="body2"
                onClick={onChangeHeadline}
                sx={{ textDecoration: " none" }}
              >
                Inicie sesión
              </Link>
            </Typography>
            <Button
              sx={{ textTransform: "none" }}
              variant="contained"
              type="submit"
            >
              Registrate
            </Button>
          </Box>
        </Grid>
        <Hidden mdDown>
          <Grid item xs={6}></Grid>
        </Hidden>
      </Box>
    </Grid>
  );
}
