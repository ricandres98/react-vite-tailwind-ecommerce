import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  // Shopping Cart | Orders
  const { 
    item: ordersLocalStorage,
    saveItem: saveOrders,
  } = useLocalStorage('SHOPI_ORDERS_V1', []);
  
  // Shopping Cart | Add products to Cart
  const [cartProducts, setCartProducts] = useState([]);

  // Product Detail | open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
    setIsCheckoutSideMenuOpen(false);
  }
  const closeProductDetail = () => setIsProductDetailOpen(false);
  
	// Product Detail | Product to show
	const [productToShow, setProductToShow] = useState({});
  
  // Product Detail | open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  
  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true);
    setIsProductDetailOpen(false);
  }
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  //Get products
  const [items, setItems] = useState([]);
  
  //Get products by title
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch((err) => {
        console.error(err);
        setItems('There has been a problem with your connection')
      })
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
				productToShow,
				setProductToShow,
        cartProducts, 
        setCartProducts,
        isCheckoutSideMenuOpen, 
        setIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        items,
        setQuery,
        query,
        ordersLocalStorage,
        saveOrders
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
