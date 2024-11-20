import React from 'react';
import { Typography, Paper } from '@mui/material';

const Resultados = ({ traduccion, palabra, error }) => {
  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!traduccion) return null;

  return (
    <Paper style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h6">Traducción de "{palabra}"</Typography>
      <Typography><strong>Náhuatl:</strong> {traduccion.nahuatl}</Typography>
      <Typography><strong>Pronunciación:</strong> {traduccion.pronunciacion}</Typography>
      <Typography><strong>Ejemplo:</strong> {traduccion.ejemplo}</Typography>
    </Paper>
  );
};

export default Resultados;
