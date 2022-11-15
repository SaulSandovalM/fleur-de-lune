import React from "react";
import { Container, Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ color: "#AEB4BE", textAlign: "center" }}>
            © el Frente. 2022, Maccarian. Reservados todos los derechos
          </Typography>
          <Typography
            sx={{ color: "#AEB4BE", textAlign: "center", fontSize: 12 }}
          >
            Cuando visita o interactúa con nuestros sitios, servicios o
            herramientas, nosotros o nuestros proveedores de servicios
            autorizados podemos usar cookies para almacenar información para
            ayudarlo a brindarle una experiencia mejor, más rápida y más segura
            y con fines de marketing.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
