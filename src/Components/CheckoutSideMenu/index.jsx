import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { formatDate } from "../../utils/formatDate";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  
  const totalAmount = context.cartProducts.reduce((acum, product) => (
    acum + product.price
  ), 0);

  const handleCheckout = () => {
    const orderToAdd = {
      date: formatDate(new Date()),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalAmount,
    };

    // context.setOrder([...context.order, orderToAdd]);
    context.saveOrders([...context.ordersLocalStorage, orderToAdd]);
    context.setQuery('');

    context.setCartProducts([]);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed border bg-white right-0 border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2>My Order</h2>
        <button onClick={context.closeCheckoutSideMenu}>
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="px-6 flex flex-col gap-3 overflow-y-auto flex-1">
				{context.cartProducts.length &&
				context.cartProducts.map((product) => (
					<OrderCard
						title={product.title}
						key={`orderItem-${product.id}`}
						price={product.price}
						imageUrl={product.images[0]}
            id={product.id}
            deletable={true}
					/>
				))}
			</div>
      <div className=" bottom-0 left-0 right-0 p-6 bg-white shadow-sm shadow-stone-500">
          <p className="flex justify-between items-center font-medium text-xl mb-2">
            <span className="font-light">Total:</span>
            <span className="font-medium text-2xl">${totalAmount}</span>
          </p>
          <Link
            to='/my-orders/last'
          >
            <button
            className="w-full py-3 text-white bg-black rounded-lg" 
            onClick={()=> handleCheckout()}>Checkout</button>
          </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
