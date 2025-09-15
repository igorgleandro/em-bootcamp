import { createContext, useState } from "react";

const initState = [
  { id: 1, text: "Snecker" },
];

const productImages = [
  { id: 1, src: './src/assets/productsImage/image-product-1.jpg' },
  { id: 2, src: './src/assets/productsImage/image-product-2.jpg' },
  { id: 3, src: './src/assets/productsImage/image-product-3.jpg' },
  { id: 4, src: './src/assets/productsImage/image-product-4.jpg' }
];



export const ShoppingContext = createContext({});

export const ShoppingProvider = ({ children }) => {
  const [shoes, setShoes] = useState(initState);
  const [imgList, setImgList] = useState(productImages);
  const [cart, setCart] = useState([]);

  return (
    <ShoppingContext.Provider value={{ shoes, setShoes, imgList, setImgList, cart, setCart }}>
      {children}
    </ShoppingContext.Provider>
  );
};
