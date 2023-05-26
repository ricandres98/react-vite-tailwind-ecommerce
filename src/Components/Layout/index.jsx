import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import CheckoutSideMenu from "../CheckoutSideMenu";

const Layout = (props) => {
  const context = useContext(ShoppingCartContext);
  return (
    <div 
			className="flex flex-col mt-20 justify-center items-center">
      {props.children}
      {context.isCheckoutSideMenuOpen && <CheckoutSideMenu />}
    </div>
  );
};

export { Layout };
