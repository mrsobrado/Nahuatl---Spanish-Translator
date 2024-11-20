import React, { useState } from 'react';
import axios from 'axios';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import TraductorForm from './components/TraductorForm.js';
import Resultados from './components/Resultados';

function App() {
  const [palabra, setPalabra] = useState('');
  const [traduccion, setTraduccion] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://127.0.0.1:5000/traducir', { palabra });
      setTraduccion(response.data);
    } catch (err) {
      setError('Palabra no encontrada');
      setTraduccion(null);
    }
  };

  return (
    <div>
      <CssBaseline />
      <Header />
      <Container maxWidth="sm" style={{ marginTop: '30px' }}>
        <TraductorForm palabra={palabra} setPalabra={setPalabra} handleSubmit={handleSubmit} />
        <Resultados traduccion={traduccion} palabra={palabra} error={error} />
      </Container>
    </div>
  );
}

export default App;
