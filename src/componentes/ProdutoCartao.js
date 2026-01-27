import { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack,
  IconButton,
  Box
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ProdutoCartao({ produto, onQuantidadeChange }) {
  const [qtd, setQtd] = useState(0);
  const [aberto, setAberto] = useState(false);

  const aumentar = () => {
    const novaQtd = qtd + 1;
    setQtd(novaQtd);
    onQuantidadeChange(produto, novaQtd);
  };

  const diminuir = () => {
    const novaQtd = Math.max(0, qtd - 1);
    setQtd(novaQtd);
    onQuantidadeChange(produto, novaQtd);
  };
  return (
    <Card
      sx={{
        maxWidth: 280,
        p: 2,
        borderRadius: 2,
        cursor: 'pointer',
        boxShadow: 3
      }}
      onClick={() => setAberto(!aberto)}
    >
      <CardMedia
        component="img"
        height="200"
        image={produto.image}
        alt={produto.name}
        sx={{ objectFit: 'contain' }}
      />

      <CardContent sx={{ px: 0 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {produto.name}
        </Typography>

        {aberto && (
          <>
            <Typography variant="h6" fontWeight="bold">
              R$ {produto.price},00
            </Typography>

            <Typography variant="caption" display="block">
              Em até 12x de R$ {(produto.price / 12).toFixed(2)}
            </Typography>

            <Typography variant="caption" display="block" sx={{ color: '#bdbdbd' }}>
              R$ {(produto.price * 0.9).toFixed(2)} à vista
            </Typography>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ my: 2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <IconButton onClick={diminuir}>
  <RemoveIcon />
</IconButton>

<Box sx={{ border: '1px solid #ccc', px: 3 }}>
  {qtd}
</Box>

<IconButton onClick={aumentar}>
  <AddIcon />
</IconButton>
            </Stack>

            <Button
              variant="contained"
              fullWidth
              onClick={(e) => e.stopPropagation()}
            >
              ADICIONAR
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
