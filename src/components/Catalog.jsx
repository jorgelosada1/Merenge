import { useEffect, useState } from 'react';
import { Typography, Grid, ThemeProvider, createTheme } from '@mui/material';
import RecipeReviewCard from './Card.jsx';

const theme = createTheme({
  typography: {
    fontFamily: 'Pacifico, cursive',
  },
});

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('public/Productos.json')  // La ruta es relativa a la carpeta 'public'
      .then(response => response.json())
      .then(data => setProducts(data.merengones))
      .catch(error => console.error('Error al cargar los productos:', error));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div id="catalog" style={{ padding: '20px', textAlign: 'center', backgroundColor: '#e1bee7' }}>
        <Typography
          variant="h4"
          style={{
            fontSize: '2rem',
            color: '#ad1457',
          }}
        >
          Catálogo de Productos
        </Typography>
        
        <Grid container spacing={3} justifyContent="center" style={{ marginTop: '20px' }}>
          {products.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
              <RecipeReviewCard 
                nombre={product.nombre} 
                descripcion={product.descripcion} 
                imagen={product.imagen} 
                descripcionStyle={{ fontFamily: 'Arial, sans-serif' }}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Catalog;
