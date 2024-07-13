import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const ProductCard = ({ id, name, image, price, rating, count }) => {
  return (
    <Link
      to={`/product/${id}`}
      className="overflow-hidden rounded-lg bg-white shadow-md"
    >
      <div className="h-40 w-full">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="line-clamp-2 text-xl font-semibold">{name}</h2>
        <div className="mt-2 font-medium text-gray-800">${price}</div>
        <StarRating rating={rating} />
      </div>
    </Link>
  );
};

export default ProductCard;
