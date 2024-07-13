import StarRating from "./StarRating";

const ProductCard = ({ name, image, price, rating, count }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 w-full">
                <img src={image} alt={name} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold line-clamp-2">{name}</h2>
                <div className="text-gray-800 font-medium mt-2">${price}</div>
                <StarRating rating={rating} />
            </div>
        </div>
    );
};

export default ProductCard;