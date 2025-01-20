import { useEffect, useState } from 'react';
import { Typography, Grid, ThemeProvider, createTheme } from '@mui/material';
import RecipeReviewCard from './Card.jsx';

const theme = createTheme({
  typography: {
    fontFamily: 'Pacifico, cursive',
  },
});

const Catalog = () => {
  const [products, setProducts] = useState([
    {
      "nombre": "Mora Arequipe",
      "descripcion": "Un delicioso merengón con la combinación perfecta de la acidez de la mora y la suavidad del arequipe, creando un balance de sabores.",
      "imagen": "src/assets/Merengon.png"
    },
    {
      "nombre": "Fresa Arequipe",
      "descripcion": "La mezcla ideal entre la frescura de la fresa y la cremosidad del arequipe, un merengón que combina lo mejor de dos mundos.",
      "imagen": "src/assets/Merengon.png"
    },
    {
      "nombre": "Guanabana Fresa",
      "descripcion": "Este merengón ofrece una mezcla tropical de la dulce guanábana con la frescura de la fresa, una combinación que te transportará al paraíso.",
      "imagen": "src/assets/Merengon.png"
    },
    {
      "nombre": "Guanaba Melocotón",
      "descripcion": "Un toque exótico con la suavidad del melocotón, combinado con la acidez de la guanábana, creando una experiencia deliciosa y única.",
      "imagen": "src/assets/Merengon.png"
    },
    {
      "nombre": "Guanabana Fresa Melocotón",
      "descripcion": "El merengón definitivo para los amantes de los sabores tropicales. Una combinación inigualable de guanábana, fresa y melocotón.",
      "imagen": "src/assets/Merengon.png"
    },
    {
      "nombre": "Tropical",
      "descripcion": "Un merengón lleno de frutas tropicales, con una mezcla deliciosa de fresa, uva, manzana y melocotón, un sabor fresco y afrutado.",
      "imagen": "src/assets/Merengon.png"
    },
    {
      "nombre": "Mango Arequipe",
      "descripcion": "La dulzura tropical del mango combinada con la cremosidad del arequipe, formando un merengón irresistible.",
      "imagen": "src/assets/Merengon.png"
    },
    {
      "nombre": "Frutos Rojos",
      "descripcion": "Una mezcla explosiva de fresas y mora arequipe, creando un sabor agridulce que se funde perfectamente con el toque de arequipe.",
      "imagen": "src/assets/Merengon.png"
    },
    {
      "nombre": "Guanabana Solo",
      "descripcion": "El sabor natural y único de la guanábana en su forma más pura, creando una experiencia fresca y deliciosa.",
      "imagen": "src/assets/Merengon.png"
    }
  ]);

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
