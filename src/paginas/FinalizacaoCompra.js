// Aqui á parte de finalização compra ela mostra para o cliente a última etapa com o nome dele, além do valor da compra, ele também serve para confirmar que o pedido foi concluído.


import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box
} from '@mui/material';

export default function FinalizacaoCompra() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    navigate('/');
    return null;
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          px: 3
        }}
      >


        {/* TEXTO */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: '#607d8b' }}
        >
          <strong>{state.nome}</strong>,
        </Typography>

        <Typography
          variant="h6"
          sx={{ mt: 1, mb: 5, color: '#607d8b' }}
        >
          Sua compra no valor{' '}
          <strong style={{ color: '#29b6f6' }}>
            R$ {state.total.toFixed(2)}
          </strong>{' '}
          foi finalizada com sucesso
        </Typography>

        {/* ÍCONE */}

        <Box sx={{ mb: 3 }}>
          <img
            src="/imagemsucesso/purchase.png"
            alt="Compra finalizada"
            style={{
              width: '160px',
              maxWidth: '100%'
            }}
          />
        </Box>

        {/* BOTÃO */}
        <Button
          variant="contained"
          onClick={() => navigate('/')}
          sx={{
            backgroundColor: '#ff9800',
            px: 5,
            py: 1.5,
            fontWeight: 'bold',
            borderRadius: 1,
            '&:hover': {
              backgroundColor: '#fb8c00'
            }
          }}
        >
          INICIAR NOVA COMPRA
        </Button>
      </Box>
    </Container>
  );
}
