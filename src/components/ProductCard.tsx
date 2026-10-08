interface CardProps {
  name: string;
  price: number;
  stock: number;
}

function ProductCard({ name, price, stock }: CardProps) {
  const isSoldOut = stock === 0;
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      {/* Product details: name, price, sold out or in stock */}
      <h3 className="font-bold">{name}</h3>
      <p>${price}</p>
      <p>{isSoldOut ? "Sold Out" : `In stock: ${stock}`}</p>

      {/* Add to cart or Sold out button */}
      <button
        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded cursor-pointer"
        disabled={isSoldOut}
        /*Added onClick to display message when item is added to cart*/
        onClick={() => alert(`${name} is added to cart!`)}
      >
        {isSoldOut ? "Sold Out" : "Add to Cart"}
      </button>
    </div>
  );
}
export default ProductCard;
