import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";

const produtos = [
  { id: 1, nome: "Produto 1", preco: "R$ 99,90", imagem: "/produtos/produto-01.jpeg" },
  { id: 2, nome: "Produto 2", preco: "R$ 149,90", imagem: "/produtos/produto-02.jpeg" },
  { id: 3, nome: "Produto 3", preco: "R$ 79,90", imagem: "/produtos/produto-03.jpeg" },
  { id: 4, nome: "Produto 4", preco: "R$ 199,90", imagem: "/produtos/produto-04.jpeg" },
  { id: 5, nome: "Produto 5", preco: "R$ 59,90", imagem: "/produtos/produto-05.jpeg" },
  { id: 6, nome: "Produto 6", preco: "R$ 89,90", imagem: "/produtos/produto-06.jpeg" },
  { id: 7, nome: "Produto 7", preco: "R$ 129,90", imagem: "/produtos/produto-07.jpeg" },
  { id: 8, nome: "Produto 8", preco: "R$ 169,90", imagem: "/produtos/produto-08.jpeg" }
];

export default function Produto() {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Título da Página */}
      <Typography variant="h4" component="h1" gutterBottom align="left" sx={{ fontWeight: 'bold', mb: 4 }}>
       Produtos
      </Typography>

      <Grid container spacing={3}>
        {produtos.map((produto) => (
          <Grid item xs={12} sm={6} md={3} key={produto.id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: 2, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="220"
                image={produto.imagem}
                alt={produto.nome}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {produto.nome}
                </Typography>

                <Typography variant="body1" color="primary" sx={{ mt: 1, fontWeight: 'medium' }}>
                  {produto.preco}
                </Typography>
              </CardContent>

              <Button variant="contained" color="primary" sx={{ m: 2, textTransform: 'none' }}>
                Comprar Agora
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}