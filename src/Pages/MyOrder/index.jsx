import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  const currentPath = window.location.pathname;
  let index = currentPath.substring((currentPath.lastIndexOf('/') + 1));

  if (index === 'last') index = context.ordersLocalStorage.length - 1;
  
  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-6">
        <Link to="/my-orders" className="position absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="px-6 flex flex-col gap-3 w-80 overflow-y-auto flex-1">
        {context.ordersLocalStorage.length &&
          context.ordersLocalStorage[index] &&
          context.ordersLocalStorage[index].products.map((product) => (
            <OrderCard
              title={product.title}
              key={`orderItem-${product.id}`}
              price={product.price}
              imageUrl={product.images[0]}
              id={product.id}
              deletable={false}
            />
          ))}
      </div>
    </Layout>
  );
}
  
  export default MyOrder;