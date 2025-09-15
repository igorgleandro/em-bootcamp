import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NavBar from './components/NavBar';
import ProductCarousel from './components/ProductCarousel';
import Box from '@mui/material/Box';
import ProductDetails from './components/ProductDetails';
import { ShoppingProvider } from './providers/ShoppingProvider';
import { useContext } from 'react';
import { ShoppingContext } from './providers/ShoppingProvider';


function App() {

  const { imgList } = useContext(ShoppingContext);


  return (
    <ShoppingProvider>
     

      <NavBar />

    
      <Box display="flex" justifyContent="space-between" alignItems="center" p={4}gap={4}>

        <Box flex={1} textAlign="center" bgcolor="grey.200">
         <ProductCarousel/>
        </Box>


        <Box flex={1}>

          <ProductDetails
            name="Fall Limited Senakers"
            description="These low-profile sneackers are your perfect casual water companion. featuring a durable rubber outer sole, they'll withstand everything the weather can offer"
            price={125.00}
            availability={true}
            onAddToCart={() => alert("Added to cart!")}
          />

        </Box>

      </Box>

  
    </ShoppingProvider>
  )
}

export default App
