import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import {CheckIcon, PlusSmallIcon} from '@heroicons/react/24/outline'

const Card = (props) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = () => {
    const product = {...props};
    context.openProductDetail();
    context.setProductToShow(product);
  } 
  
  const addToCart = (event) => {
    event.stopPropagation();

    const product = {...props};
    context.setCartProducts([
      ...context.cartProducts,
      product,
    ]);
    context.openCheckoutSideMenu();
    console.log('CART: ', context.cartProducts);
  }

  const renderIcon = (id) => {
    const products = [...context.cartProducts];

    const isProductAdded = products.some((product) => product.id === id);

    if (isProductAdded) {
      return (
        <button
          className="absolute top-0 right-0 m-2 flex justify-center items-center bg-black w-6 h-6 rounded-full p-1 text-center"
        >
          <CheckIcon className="w-6 h-6 text-white" />
        </button>
      );
    } else {
      return (
        <button
          className="absolute top-0 right-0 m-2 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1 text-center"
          onClick={addToCart}
        >
          <PlusSmallIcon className="w-6 h-6" />
        </button>
      );
    }
  };

  return (
    <div 
      className="bg-white cursor-pointer w-56 h-60"
      onClick={showProduct}
    >
      <figure className="relative mb-2 w-full h-4/5 rounded-lg overflow-hidden">
        <span className="absolute bottom-0 left-0 px-3 py-0.5 bg-white/60 rounded-lg text-black text-xs m-2">
          {props.category}
        </span>
        <img
          src={props.images[0]}
          alt={props.title}
          className="w-full h-full object-cover"
        />
        {renderIcon(props.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{props.title}</span>
        <span className="text-sm font-medium">${props.price}</span>
      </p>
    </div>
  );
};

export { Card };