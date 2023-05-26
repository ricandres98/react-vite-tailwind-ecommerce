import { useState, useEffect, useContext } from "react";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { capitalize } from "../../utils/capitalize";

function Home() {
  const context = useContext(ShoppingCartContext);
  const { items, setQuery, query } = context;

  // Filtered products
  const productsToShow = query
    ? items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : items;

  // console.log(window.location.pathname)
  const [category, setCategory] = useState(null);

  useEffect(() => {
    setCategory(window.location.pathname.slice(1));
  }, [window.location.pathname]);

  const filterByCategory = (products, category) => {
    if (category) {
      if (category === "others") {
        return products.filter(
          (product) =>
            product.category.name.toLowerCase() !== "clothes" &&
            product.category.name.toLowerCase() !== "electronics" &&
            product.category.name.toLowerCase() !== "toys" &&
            product.category.name.toLowerCase() !== "furniture"
        );
      }
      return products.filter(
        (product) => product.category.name.toLowerCase() === category
      );
    } else {
      return products;
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-4">
        <h1>Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />
      {filterByCategory(productsToShow, category).length > 0 &&
      typeof items !== "string" ? (
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {filterByCategory(productsToShow, category).map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category.name}
              price={item.price}
              images={item.images}
              description={item.description}
            />
          ))}
        </div>
      ) : typeof items != "string" ? (
        <p className="text-center">
          There's no items with the keyword "{query}"{" "}
          {category && `within ${capitalize(category)}`} :(
        </p>
      ) : (
        <p className="text-center">{items}</p>
      )}
      {context.isProductDetailOpen && <ProductDetail />}
    </Layout>
  );
}

export default Home;
