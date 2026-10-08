import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import { products } from "./data/products";
import { cartItems } from "./data/cart";

function App() {
  // Computing sold out items - from session with Arian
  const soldOutCount = products.filter((product) => product.stock === 0).length;

  // Computing total price of items in cart using 'reduce()'
  const totalCartPrice = cartItems.reduce(
    (count, product) => count + product.price * product.quantity,
    0,
  );
  return (
    <>
      {/* Display number of sold out items */}
      <p className="p-6 font-bold">
        {soldOutCount} of {products.length} are sold out!
      </p>

      {/* Display each product item */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            stock={product.stock}
          />
        ))}
      </div>

      {/* Display product items in shopping cart */}
      <div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onSale={item.onSale}
          />
        ))}
      </div>

      {/* Display total price of product items in cart */}
      <p className="font-extrabold px-6 text-end">
        Total Price: ${totalCartPrice.toFixed(2)}
      </p>

      {/* Display shipping message */}
      <p className="px-6 text-end">
        {totalCartPrice >= 150
          ? "🎉 You get free shipping!"
          : "Spend $150 to get free shipping"}
      </p>
    </>
  );
}
export default App;
