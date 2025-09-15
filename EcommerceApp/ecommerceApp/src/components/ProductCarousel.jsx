import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";


const ProductCarousel = ()=>{

  const [count,setCount] = useState(1);
  const total = 4;

  const productImages = [
  { id: 1, src: './src/assets/productsImage/image-product-1.jpg' },
  { id: 2, src: './src/assets/productsImage/image-product-2.jpg' },
  { id: 3, src: './src/assets/productsImage/image-product-3.jpg' },
  { id: 4, src: './src/assets/productsImage/image-product-4.jpg' }
];


  const handlePrev = () => {
  setCount((prev) => (prev > 1 ? prev - 1 : total));
}

const handleNext = () => {
  setCount((prev) => (prev < total ? prev + 1 : 1));
 }

 return (
  <Box className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      
      <img className={'w-full h-full'} src={`./src/assets/productsImage/image-product-${count}.jpg`}/>

        <Button onClick={handlePrev}>Prev</Button>
        <Button onClick={handleNext}>Next</Button>
        <Divider sx={{ mb: 2 }} />
        <Box className="flex flex-row gap-2 mt-4 flex-nowrap justify-center items-center">
          {
             productImages.map((productImages) => (
             <img id={productImages.id} src={productImages.src} onClick={() => setCount(productImages.id)} className={'w-12 h-12'}/>
             ))
          }
        </Box>

          
          </Box>
     
)


}

export default ProductCarousel