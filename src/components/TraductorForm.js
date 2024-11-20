import React from 'react';
import { TextField, Button } from '@mui/material';

const TraductorForm = ({ palabra, setPalabra, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Introduce una palabra en español"
        variant="outlined"
        fullWidth
        value={palabra}
        onChange={(e) => setPalabra(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Traducir
      </Button>
    </form>
  );
};

export default TraductorForm;
