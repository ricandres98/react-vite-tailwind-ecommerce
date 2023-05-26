import React, { useContext } from "react";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
	const context = useContext(ShoppingCartContext);

	const handleDelete= (id) => {
		const products = [...context.cartProducts];
		const newProductsArray = products.filter(product => product.id !== id);
		context.setCartProducts([...newProductsArray]);
		console.log(context.cartProducts)
	}

  return (
    <div className="flex justify-between items-center border border-black w-80 p-4 mb-4">
      <p className="w-full flex justify-between items-center">
        <div className="flex flex-col">
          <span>{props.date}</span>
          <span className="font-light">{totalProducts} items</span>
        </div>
        <span className="font-medium text-2xl">${totalPrice}</span>
      </p>
			<ChevronRightIcon className="w-6 h-6"/>
    </div>
  );
};

export default OrdersCard;