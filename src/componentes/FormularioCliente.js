import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Button
} from '@mui/material';

export default function FormularioCliente({ total }) {
  const navigate = useNavigate();

  const [dados, setDados] = useState({
    nome: '',
    email: '',
    sexo: ''
  });

  const [erros, setErros] = useState({});

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const validar = () => {
    const novosErros = {};

    if (!dados.nome) novosErros.nome = 'Nome obrigatório';
    if (!dados.email.includes('@')) novosErros.email = 'Email inválido';
    if (!dados.sexo) novosErros.sexo = 'Selecione o sexo';

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const finalizarCompra = () => {
    if (!validar()) return;

    navigate('/finalizacao', {
      state: {
        nome: dados.nome,
        total
      }
    });
  };

  return (
    <Box sx={{ mt: 6, p: 4, borderRadius: 2, boxShadow: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Dados do Cliente
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <TextField
                fullWidth
                label="Nome"
                name="nome"
                value={dados.nome}
                onChange={handleChange}
                error={!!erros.nome}
                helperText={erros.nome}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={dados.email}
                onChange={handleChange}
                error={!!erros.email}
                helperText={erros.email}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <TextField
                select
                fullWidth
                label="Sexo"
                name="sexo"
                value={dados.sexo}
                onChange={handleChange}
                error={!!erros.sexo}
                helperText={erros.sexo}
              >
                <MenuItem value="">Selecione</MenuItem>
                <MenuItem value="masculino">Masculino</MenuItem>
                <MenuItem value="feminino">Feminino</MenuItem>
                <MenuItem value="outro">Outro</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4} textAlign="right">
          <Typography variant="h6" sx={{ mb: 2 }}>
            Total: <strong>R$ {total.toFixed(2)}</strong>
          </Typography>

          <Button
            variant="contained"
            onClick={finalizarCompra}
          >
            FINALIZAR COMPRA
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
