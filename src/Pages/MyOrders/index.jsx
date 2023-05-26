import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Layout } from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

    return (
      <Layout>
        <div className="flex items-center justify-center w-80 relative mb-4">
          <h1>My Orders</h1>
        </div>
        {context.ordersLocalStorage.map((orderItem, index) => (
          <Link key={index} to={`/my-order/${index}`}>
            <OrdersCard
              date={orderItem.date}
              totalPrice={orderItem.totalPrice}
              totalProducts={orderItem.totalProducts}
            />
          </Link>
        ))}
      </Layout>
    );
  }
  
  export default MyOrders;