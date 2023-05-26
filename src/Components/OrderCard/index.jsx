import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const OrderCard = (props) => {
  const { id, title, imageUrl, price } = props;
	const context = useContext(ShoppingCartContext);

	const handleDelete= (id) => {
		const products = [...context.cartProducts];
		const newProductsArray = products.filter(product => product.id !== id);
		context.setCartProducts([...newProductsArray]);
		console.log(context.cartProducts)
	}

  return (
    <div className="flex justify-between items-center ">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <h3 className="text-sm font-light">{title}</h3>
      </div>
      <div className="flex items-center">
        <p className="text-lg font-medium mx-2">${price}</p>
        {props.deletable && (
          <button onClick={() => handleDelete(id)}>
            <XMarkIcon className="w-6 h-6 text-black cursor-pointer" />
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
