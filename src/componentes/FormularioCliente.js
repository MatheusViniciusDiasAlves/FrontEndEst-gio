import { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Button
} from '@mui/material';

export default function FormularioCliente({ total }){
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    sexo: ''
  });

  const handleChange = (e) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box
      sx={{
        mt: 6,
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#fff'
      }}
    >
      <Grid container spacing={4}>
        {/* ESQUERDA - DADOS DO CLIENTE */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h6"
            sx={{ mb: 3, fontWeight: 'bold', color: '#546e7a' }}
          >
            Dados do Cliente
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <TextField
                fullWidth
                label="Nome"
                name="nome"
                placeholder="Nome do cliente aqui"
                value={dados.nome}
                onChange={handleChange}
                error={!dados.nome}
                helperText={!dados.nome ? 'Campo obrigatório' : ''}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                placeholder="Digite seu email aqui"
                value={dados.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                select
                label="Sexo"
                name="sexo"
                value={dados.sexo}
                onChange={handleChange}
              >
                <MenuItem value="">Selecione</MenuItem>
                <MenuItem value="masculino">Masculino</MenuItem>
                <MenuItem value="feminino">Feminino</MenuItem>
                <MenuItem value="outro">Outro</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Grid>

        {/* DIREITA - TOTAL */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
  Total:{' '}
  <strong>R$ {total.toFixed(2)}</strong>
</Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ff9800',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#fb8c00'
              }
            }}
          >
            FINALIZAR COMPRA
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
