import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NavBar from './components/NavBar';
import ProductCarousel from './components/ProductCarousel';
import Box from '@mui/material/Box';
import ProductDetails from './components/ProductDetails';

function App() {

  const productImages = [
  { src: '/src/assets/productsImage/image-product-1.jpg', alt: 'Main view' },
  { src: '/src/assets/productsImage/image-product-2.jpg', alt: 'Angle 1' },
  { src: '/src/assets/productsImage/image-product-3.jpg', alt: 'Angle 2' },
  { src: '/src/assets/productsImage/image-product-4.jpg', alt: 'Detail 1' },
 ];
  
function ProductPage() {
  return (
    <ProductCarousel
      images={productImages}
      initialIndex={0}
      onChange={(i) => console.log('Active image index:', i)}
    />
  );
}

  return (
    <>

      <NavBar />

    
   <Box
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  p={4}
  gap={4}
  >

  <Box flex={1} textAlign="center" bgcolor="grey.200">
    <ProductPage />
  </Box>


  <Box flex={1}>
        <ProductDetails
          name="Fall Limited Senakers"
          description="These low-profile sneackers are your perfect casual water companion. featuring a durable rubber outer sole, they'll withstand everything the weather can offer"
          price={125.00}
          rating={4.7}
          reviews={256}
          availability={true}
          onAddToCart={() => alert("Added to cart!")}
        />
      </Box>
</Box>

    
       
  

    </>
  )
}

export default App
