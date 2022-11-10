import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <Typography sx={{ color: "#AEB4BE" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            lectus vel ut sollicitudin elit at amet.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6" sx={{ color: "white" }}>
            Sobre nosotros
          </Typography>
          <Typography sx={{ color: "#AEB4BE" }} gutterBottom>
            Carreras
          </Typography>
          <Typography sx={{ color: "#AEB4BE" }} gutterBottom>
            Nuestras tiendas
          </Typography>
          <Typography sx={{ color: "#AEB4BE" }} gutterBottom>
            Nuestros Ciudadanos
          </Typography>
          <Typography sx={{ color: "#AEB4BE" }} gutterBottom>
            Terminos y condicciones
          </Typography>
          <Typography sx={{ color: "#AEB4BE" }} gutterBottom>
            Política de privacidad
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6" sx={{ color: "white" }}>
            Atención al cliente
          </Typography>
          <Typography sx={{ color: "#AEB4BE" }} gutterBottom>
            Centro de ayuda
          </Typography>
          <Typography sx={{ color: "#AEB4BE" }} gutterBottom>
            Cómo comprar
          </Typography>
          <Typography sx={{ color: "#AEB4BE" }} gutterBottom>
            Rastrea tu orden
          </Typography>
          <Typography sx={{ color: "#AEB4BE" }} gutterBottom>
            Compras corporativas y al por mayor
          </Typography>
          <Typography sx={{ color: "#AEB4BE" }} gutterBottom>
            Devoluciones y reembolsos
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6" sx={{ color: "white" }}>
            Contáctenos
          </Typography>
          <Typography sx={{ color: "#AEB4BE" }} gutterBottom>
            70 Washington Square South, Nueva York, NY 10012, Estados Unidos
          </Typography>
          <Typography sx={{ color: "#AEB4BE" }} gutterBottom>
            Correo: uilib.help@gmail.com
          </Typography>
          <Typography sx={{ color: "#AEB4BE" }} gutterBottom>
            Teléfono: +1 1123 456 780
          </Typography>
          <Box sx={{ display: "flex" }}>
            <FacebookIcon />
            <InstagramIcon />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
