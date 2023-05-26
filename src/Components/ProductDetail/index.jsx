import React, { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'
import "./styles.css";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  console.log('Product to show:', context.productToShow)
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed border bg-white right-0 border-black rounded-lg`}>
      <div className="flex justify-between items-center p-6">
        <h2>Product Details</h2>
        <button
          onClick={context.closeProductDetail}  
        >
					<XMarkIcon className="w-6 h-6"/>
				</button>
      </div>
      <figure className="px-6 h-72">
        <img 
          className="w-full h-full rounded-lg cover"
          src={context.productToShow?.images[0]} 
          alt={context.productToShow.title} 
        />
      </figure>
      <div className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
        <h3 className="font-medium text-md">{context.productToShow.title}</h3>
        <p className="font-light text-sm">{context.productToShow.description}</p>
      </div>
    </aside>
  );
};
 
export default ProductDetail;
