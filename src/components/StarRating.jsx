import { BiSolidStar } from "react-icons/bi";

const StarRating = ({ rating }) => {
  return (
    <div className="inline-flex items-center gap-1">
      <div className="inline-flex cursor-pointer items-center">
        {["", "", "", "", ""].map((_, index) => (
          <BiSolidStar
            key={index}
            size={20}
            className={
              index + 1 > rating ? "fill-neutral-900/50" : "fill-yellow-400"
            }
          />
        ))}
      </div>
      <p>
        {rating} <span className="sr-only">Stars</span>
      </p>
    </div>
  );
};

export default StarRating;
