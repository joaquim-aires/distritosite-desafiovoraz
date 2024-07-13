import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const ProductCard = ({ id, title, image, price, rating, count, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick({ id, title, image, price, rating, count });
    }
  };

  return (
    <Link
      to={`/product/${id}`}
      className="overflow-hidden rounded-lg bg-white shadow-md"
      onClick={handleClick}
    >
      <div className="h-40 w-full">
        <img src={image} alt={title} className="h-full w-full object-contain" />
      </div>
      <div className="p-4">
        <h2 className="line-clamp-2 text-xl font-semibold">{title}</h2>
        <div className="mt-2 font-medium text-gray-800">${price}</div>
        <StarRating rating={rating} />
      </div>
    </Link>
  );
};

export default ProductCard;
