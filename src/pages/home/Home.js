import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../Firebase";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.jpg";
// import PostCard from "../../components/PostCard";

export default function Home(props) {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("created_at", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const posts = [];
        snapshot.forEach((doc) => {
          posts.push({
            userImage: doc.data().userImage,
            userName: doc.data().userName,
            location: doc.data().location,
            image: doc.data().image,
            likes: doc.data().likes,
            comments: doc.data().comments,
            description: doc.data().description,
            created_at: doc.data().created_at,
            id: doc.id,
          });
        });
        setPublications(posts);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => unsubscribe();
  }, []);

  console.log(publications);

  return (
    <>
      <Container>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item lg={6}>
            <Typography variant="h3" color="primary">
              Experimenta tu música
            </Typography>
            <Typography variant="h3">como nunca antes.</Typography>
            <Typography variant="h6" sx={{ mt: 2, color: "gray" }}>
              Oferta de cena hasta finales de junio. Todos los auriculares
              originales al máximo:
            </Typography>
            <Typography variant="h2" color="error">
              $299.95
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ textTransform: "none", mt: 1, background: "#4582fe" }}
            >
              Descubre la oferta
            </Button>
            <Typography
              sx={{
                background: "#EDF1F7",
                pl: 2,
                pr: 2,
                pt: 1,
                pb: 1,
                mt: 3,
                borderRadius: 2,
              }}
            >
              Tarjeta de regalo de Apple Music de $60 con la compra de productos
              Beats selectos.*
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <img src={img1} alt="" style={{ height: "100%", width: "100%" }} />
          </Grid>
          <Grid
            container
            sx={{ background: "#4582fe", borderRadius: 2, mt: 8 }}
          >
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img src={img2} alt="" style={{ width: 300 }} />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#fff", textAlign: "center" }}
              >
                Busca más productos
              </Typography>
              <Typography sx={{ textAlign: "center", color: "#fff" }}>
                Si ya no somos la solución adecuada para usted, le permitiremos
                exportar y tomar sus datos en cualquier momento y por cualquier
                motivo.
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <img src={img3} alt="" style={{ width: 300 }} />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 8 }}>
            <Typography sx={{ color: "#F9B934", textAlign: "center" }}>
              CATEGORÍAS
            </Typography>
            <Typography variant="h4" sx={{ textAlign: "center", mt: 1 }}>
              Elige tu producto por categorías
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "gray", mt: 1 }}
            >
              Comprar Instrumentos Musicales y Accesorios Online:
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "gray" }}
            >
              De Forma Segura y Cómoda
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              <Button
                variant="contained"
                size="large"
                sx={{ textTransform: "none", mt: 1, background: "#4582fe" }}
              >
                Ver todas las categorias
              </Button>
            </Box>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={2}>
              <Card
                sx={{
                  background: "#F7FAFF",
                  width: "100%",
                  height: "100%",
                  display: "block",
                  pt: 4,
                  // justifyContent: "center",
                  // alignItems: "center",
                  // flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 80,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: "orange",
                        transform: "translate(16px, -16px)",
                        borderRadius: "100%",
                      }}
                    />
                    <ShoppingBagIcon
                      sx={{
                        fontSize: 48,
                        position: "absolute",
                        color: "#4582fe",
                      }}
                    />
                  </Box>
                </Box>
                <Typography textAlign={"center"}>Bolsas</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card
                sx={{
                  background: "#F7FAFF",
                  width: "100%",
                  height: "100%",
                  display: "block",
                  pt: 4,
                  // justifyContent: "center",
                  // alignItems: "center",
                  // flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 80,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: "orange",
                        transform: "translate(16px, -16px)",
                        borderRadius: "100%",
                      }}
                    />
                    <ShoppingBagIcon
                      sx={{
                        fontSize: 48,
                        position: "absolute",
                        color: "#4582fe",
                      }}
                    />
                  </Box>
                </Box>
                <Typography textAlign={"center"}>Bolsas</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card
                sx={{
                  background: "#F7FAFF",
                  width: "100%",
                  height: "100%",
                  display: "block",
                  pt: 4,
                  // justifyContent: "center",
                  // alignItems: "center",
                  // flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 80,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: "orange",
                        transform: "translate(16px, -16px)",
                        borderRadius: "100%",
                      }}
                    />
                    <ShoppingBagIcon
                      sx={{
                        fontSize: 48,
                        position: "absolute",
                        color: "#4582fe",
                      }}
                    />
                  </Box>
                </Box>
                <Typography textAlign={"center"}>Bolsas</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card
                sx={{
                  background: "#F7FAFF",
                  width: "100%",
                  height: "100%",
                  display: "block",
                  pt: 4,
                  // justifyContent: "center",
                  // alignItems: "center",
                  // flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 80,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: "orange",
                        transform: "translate(16px, -16px)",
                        borderRadius: "100%",
                      }}
                    />
                    <ShoppingBagIcon
                      sx={{
                        fontSize: 48,
                        position: "absolute",
                        color: "#4582fe",
                      }}
                    />
                  </Box>
                </Box>
                <Typography textAlign={"center"}>Bolsas</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card
                sx={{
                  background: "#F7FAFF",
                  width: "100%",
                  height: "100%",
                  display: "block",
                  pt: 4,
                  // justifyContent: "center",
                  // alignItems: "center",
                  // flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 80,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: "orange",
                        transform: "translate(16px, -16px)",
                        borderRadius: "100%",
                      }}
                    />
                    <ShoppingBagIcon
                      sx={{
                        fontSize: 48,
                        position: "absolute",
                        color: "#4582fe",
                      }}
                    />
                  </Box>
                </Box>
                <Typography textAlign={"center"}>Bolsas</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card
                sx={{
                  background: "#F7FAFF",
                  width: "100%",
                  height: "100%",
                  display: "block",
                  pt: 4,
                  // justifyContent: "center",
                  // alignItems: "center",
                  // flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 80,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: "orange",
                        transform: "translate(16px, -16px)",
                        borderRadius: "100%",
                      }}
                    />
                    <ShoppingBagIcon
                      sx={{
                        fontSize: 48,
                        position: "absolute",
                        color: "#4582fe",
                      }}
                    />
                  </Box>
                </Box>
                <Typography textAlign={"center"}>Bolsas</Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ background: "#F9B934", mt: 15 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6} sx={{ mt: 7, mb: 7 }}>
              <Typography variant="h4">
                Experimenta tu música como nunca antes.
              </Typography>
              <Typography variant="h6" sx={{ color: "#222B45", mt: 1 }}>
                Si ya no somos la solución adecuada para usted, le permitiremos
                exportar y tomar sus datos en cualquier momento y por cualquier
                motivo.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{ textTransform: "none", mt: 3, background: "#4582fe" }}
              >
                Descubre la oferta
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <img src={img4} alt="" style={{ position: "absolute" }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 8 }}>
            <Typography sx={{ color: "#F9B934", textAlign: "center" }}>
              PRODUCTOS
            </Typography>
            <Typography variant="h4" sx={{ textAlign: "center", mt: 1 }}>
              Productos Destacados
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "gray", mt: 1 }}
            >
              Experimenta tu música como nunca antes. Compre instrumentos
              musicales y accesorios en línea.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              <Button
                variant="contained"
                size="large"
                sx={{ textTransform: "none", mt: 1, background: "#4582fe" }}
              >
                Ver todo
              </Button>
            </Box>
          </Grid>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={4}>
              <Card>
                <CardActionArea>
                  {/* <CardMedia component="img" height="280" image={img5} alt="" /> */}
                  <Box
                    sx={{
                      height: 280,
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      background: "#f7faff",
                    }}
                  >
                    <img src={img5} alt="" style={{ width: "100%" }} />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Reproductor de música
                    </Typography>
                    <Rating name="read-only" value={5} readOnly size="small" />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#4582fe", fontWeight: 600 }}>
                        $360
                      </Typography>
                      <Button
                        startIcon={<LocalMallIcon />}
                        variant="outlined"
                        size="large"
                        sx={{
                          textTransform: "none",
                          mt: 1,
                        }}
                      >
                        Añadir a la cesta
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardActionArea>
                  {/* <CardMedia component="img" height="280" image={img5} alt="" /> */}
                  <Box
                    sx={{
                      height: 280,
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      background: "#f7faff",
                    }}
                  >
                    <img src={img5} alt="" style={{ width: "100%" }} />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Reproductor de música
                    </Typography>
                    <Rating name="read-only" value={5} readOnly size="small" />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#4582fe", fontWeight: 600 }}>
                        $360
                      </Typography>
                      <Button
                        startIcon={<LocalMallIcon />}
                        variant="outlined"
                        size="large"
                        sx={{
                          textTransform: "none",
                          mt: 1,
                        }}
                      >
                        Añadir a la cesta
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardActionArea>
                  {/* <CardMedia component="img" height="280" image={img5} alt="" /> */}
                  <Box
                    sx={{
                      height: 280,
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      background: "#f7faff",
                    }}
                  >
                    <img src={img5} alt="" style={{ width: "100%" }} />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Reproductor de música
                    </Typography>
                    <Rating name="read-only" value={5} readOnly size="small" />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#4582fe", fontWeight: 600 }}>
                        $360
                      </Typography>
                      <Button
                        startIcon={<LocalMallIcon />}
                        variant="outlined"
                        size="large"
                        sx={{
                          textTransform: "none",
                          mt: 1,
                        }}
                      >
                        Añadir a la cesta
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardActionArea>
                  {/* <CardMedia component="img" height="280" image={img5} alt="" /> */}
                  <Box
                    sx={{
                      height: 280,
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      background: "#f7faff",
                    }}
                  >
                    <img src={img5} alt="" style={{ width: "100%" }} />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Reproductor de música
                    </Typography>
                    <Rating name="read-only" value={5} readOnly size="small" />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#4582fe", fontWeight: 600 }}>
                        $360
                      </Typography>
                      <Button
                        startIcon={<LocalMallIcon />}
                        variant="outlined"
                        size="large"
                        sx={{
                          textTransform: "none",
                          mt: 1,
                        }}
                      >
                        Añadir a la cesta
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardActionArea>
                  {/* <CardMedia component="img" height="280" image={img5} alt="" /> */}
                  <Box
                    sx={{
                      height: 280,
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      background: "#f7faff",
                    }}
                  >
                    <img src={img5} alt="" style={{ width: "100%" }} />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Reproductor de música
                    </Typography>
                    <Rating name="read-only" value={5} readOnly size="small" />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#4582fe", fontWeight: 600 }}>
                        $360
                      </Typography>
                      <Button
                        startIcon={<LocalMallIcon />}
                        variant="outlined"
                        size="large"
                        sx={{
                          textTransform: "none",
                          mt: 1,
                        }}
                      >
                        Añadir a la cesta
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardActionArea>
                  {/* <CardMedia component="img" height="280" image={img5} alt="" /> */}
                  <Box
                    sx={{
                      height: 280,
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      background: "#f7faff",
                    }}
                  >
                    <img src={img5} alt="" style={{ width: "100%" }} />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Reproductor de música
                    </Typography>
                    <Rating name="read-only" value={5} readOnly size="small" />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#4582fe", fontWeight: 600 }}>
                        $360
                      </Typography>
                      <Button
                        startIcon={<LocalMallIcon />}
                        variant="outlined"
                        size="large"
                        sx={{
                          textTransform: "none",
                          mt: 1,
                        }}
                      >
                        Añadir a la cesta
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ background: "#f7faff", mt: 10 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ mt: 6 }}>
              <Typography sx={{ color: "#F9B934", textAlign: "center" }}>
                ÚLTIMAS NOTICIAS
              </Typography>
              <Typography variant="h4" sx={{ textAlign: "center", mt: 1 }}>
                Nuestras últimas noticias
              </Typography>
              <Typography
                variant="h6"
                sx={{ textAlign: "center", color: "gray", mt: 1 }}
              >
                Experimenta tu música como nunca antes. Compre instrumentos
                musicales y accesorios en línea.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ textTransform: "none", mt: 1, background: "#4582fe" }}
                >
                  Navegar por el blog
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              lg={4}
              sx={{
                mt: 3,
                mb: 8,
                backgroundImage: `url(${img6})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: 300,
                borderRadius: 2,
              }}
            />
            <Grid
              item
              xs={12}
              md={8}
              lg={8}
              sx={{
                mt: 3,
                mb: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Typography>
              <Button
                variant="text"
                endIcon={<ArrowForwardIcon />}
                sx={{ mt: 2, textTransform: "none" }}
              >
                Lee mas
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sx={{ mt: 6 }}>
            <Typography sx={{ color: "#F9B934", textAlign: "center" }}>
              PRODUCTOS
            </Typography>
            <Typography variant="h4" sx={{ textAlign: "center", mt: 1 }}>
              Los últimos productos
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "gray", mt: 1 }}
            >
              Experimenta tu música como nunca antes. Compre instrumentos
              musicales y accesorios en línea.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              <Button
                variant="contained"
                size="large"
                sx={{ textTransform: "none", mt: 1, background: "#4582fe" }}
              >
                Ver todo
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Card>
              <CardActionArea>
                {/* <CardMedia component="img" height="280" image={img5} alt="" /> */}
                <Box
                  sx={{
                    height: 280,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    background: "#f7faff",
                  }}
                >
                  <img src={img5} alt="" style={{ width: "100%" }} />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Reproductor de música
                  </Typography>
                  <Rating name="read-only" value={5} readOnly size="small" />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ color: "#4582fe", fontWeight: 600 }}>
                      $360
                    </Typography>
                    <Button
                      startIcon={<LocalMallIcon />}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        mt: 1,
                      }}
                    >
                      Añadir a la cesta
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Card>
              <CardActionArea>
                {/* <CardMedia component="img" height="280" image={img5} alt="" /> */}
                <Box
                  sx={{
                    height: 280,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    background: "#f7faff",
                  }}
                >
                  <img src={img5} alt="" style={{ width: "100%" }} />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Reproductor de música
                  </Typography>
                  <Rating name="read-only" value={5} readOnly size="small" />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ color: "#4582fe", fontWeight: 600 }}>
                      $360
                    </Typography>
                    <Button
                      startIcon={<LocalMallIcon />}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        mt: 1,
                      }}
                    >
                      Añadir a la cesta
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Card>
              <CardActionArea>
                {/* <CardMedia component="img" height="280" image={img5} alt="" /> */}
                <Box
                  sx={{
                    height: 280,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    background: "#f7faff",
                  }}
                >
                  <img src={img5} alt="" style={{ width: "100%" }} />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Reproductor de música
                  </Typography>
                  <Rating name="read-only" value={5} readOnly size="small" />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ color: "#4582fe", fontWeight: 600 }}>
                      $360
                    </Typography>
                    <Button
                      startIcon={<LocalMallIcon />}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        mt: 1,
                      }}
                    >
                      Añadir a la cesta
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Card>
              <CardActionArea>
                {/* <CardMedia component="img" height="280" image={img5} alt="" /> */}
                <Box
                  sx={{
                    height: 280,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    background: "#f7faff",
                  }}
                >
                  <img src={img5} alt="" style={{ width: "100%" }} />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Reproductor de música
                  </Typography>
                  <Rating name="read-only" value={5} readOnly size="small" />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ color: "#4582fe", fontWeight: 600 }}>
                      $360
                    </Typography>
                    <Button
                      startIcon={<LocalMallIcon />}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        mt: 1,
                      }}
                    >
                      Añadir a la cesta
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
