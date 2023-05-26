import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";
  const context = useContext(ShoppingCartContext);

  const toggleSideMenu = (isOpen) => {
    isOpen ? context.closeCheckoutSideMenu() : context.openCheckoutSideMenu();
  }

  return (
    <nav className="w-full flex justify-between items-center fixed py-5 px-8 z-10 bg-white text-sm font-normal top-0">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
      	<li className="text-black/60">correo@platzi.com</li>
        <li>
          <NavLink to="/my-orders">My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/my-account">My Account</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">Sign In</NavLink>
        </li>
        <li className="flex">
          <button onClick={() => toggleSideMenu(context.isCheckoutSideMenuOpen)}>
					  <ShoppingBagIcon className="w-6 h-6"/>
          </button>
					{context.cartProducts.length}
				</li>
      </ul>
    </nav>
  );
};

export { Navbar };
