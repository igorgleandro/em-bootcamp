import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useContext } from "react";
import { ShoppingContext } from "../providers/ShoppingProvider";


export default function ProductDetails({
  id,                            
  name = "",
  description = "",
  price = 0,                       
  photo,                           
  availability = true,
  onAddToCart, 
                
}) {

const { setCart } = useContext(ShoppingContext);

const handleAddToCart = () => {
    
  setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      const newItem = { id, name, description, price: price, photo, quantity: 1 };
      return [...prev, newItem];
    });
  };



  return (
    <Box sx={{ p: 3, borderRadius: 2, boxShadow: 3, bgcolor: "background.paper",}}>
     
      <Typography variant="h5" fontWeight={700} gutterBottom> {name} </Typography>
      <Typography variant="h6" color="primary" gutterBottom> ${price.toFixed(2)} </Typography>
      
      <Divider sx={{ mb: 2 }} />

      <Typography variant="body2" color="text.secondary" mb={2}>{description}</Typography>

      <Typography variant="body2" color={availability ? "success.main" : "error.main"} fontWeight={600} mb={2} >{availability ? "In Stock" : "Out of Stock"} </Typography>

      <Button fullWidthvariant="contained" color="warning"disabled={!availability} onClick={handleAddToCart}sx={{ fontWeight: 600 }}>Add to Cart</Button>

    </Box>

   
  );
}
