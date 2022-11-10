import React, { useState } from "react";
import {
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import app from "../../Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const auth = getAuth(app);

export default function SignUp({ onChangeHeadline }) {
  const [state, setState] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    temp.email = regex.test(state.email) ? "" : "No es un correo valido!";
    temp.password = state.password ? "" : "Campo requerido!";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const data = new FormData(e.currentTarget);
      const email = data.get("email");
      const password = data.get("password");
      signInWithEmailAndPassword(auth, email, password);
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

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
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
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Typography sx={{ color: "gray" }}>INICIAR SESION</Typography>
          <Typography variant="h4">Bienvenido de nuevo</Typography>
          <Typography sx={{ color: "gray" }}>
            Inicie sesión para comprar.
          </Typography>
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
              ¿No tienes una cuenta?{" "}
              <Link
                href="#"
                variant="body2"
                onClick={onChangeHeadline}
                sx={{ textDecoration: " none" }}
              >
                Regístrate
              </Link>
            </Typography>
            <Button
              sx={{ textTransform: "none" }}
              variant="contained"
              type="submit"
            >
              Entrar
            </Button>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
}
