import React from "react";
import { FaTh, FaLaptop, FaGem, FaTshirt, FaMale } from "react-icons/fa";

const CategoryFilter = ({ onSelectCategory, currentCategory }) => {
  return (
    <div className="mt-14 flex h-40 justify-around gap-36">
      <button
        className={`flex w-full flex-col items-center justify-center rounded border border-gray-300 px-4 py-2 hover:bg-red-300 ${
          currentCategory === "todos" ? "bg-red-300" : ""
        }`}
        onClick={() => onSelectCategory("todos")}
      >
        <FaTh className="h-10 w-10" />
        <span>Todos</span>
      </button>
      <button
        className={`flex w-full flex-col items-center justify-center rounded border border-gray-300 px-4 py-2 hover:bg-red-300 ${
          currentCategory === "electronics" ? "bg-red-300" : ""
        }`}
        onClick={() => onSelectCategory("electronics")}
      >
        <FaLaptop className="h-10 w-10" />
        <span>Eletrônicos</span>
      </button>
      <button
        className={`flex w-full flex-col items-center justify-center rounded border border-gray-300 px-4 py-2 hover:bg-red-300 ${
          currentCategory === "jewelery" ? "bg-red-300" : ""
        }`}
        onClick={() => onSelectCategory("jewelery")}
      >
        <FaGem className="h-10 w-10" />
        <span>Joias</span>
      </button>
      <button
        className={`flex w-full flex-col items-center justify-center rounded border border-gray-300 px-4 py-2 hover:bg-red-300 ${
          currentCategory === "women's clothing" ? "bg-red-300" : ""
        }`}
        onClick={() => onSelectCategory("women's clothing")}
      >
        <FaTshirt className="h-10 w-10" />
        <span>Roupas Femininas</span>
      </button>
      <button
        className={`flex w-full flex-col items-center justify-center rounded border border-gray-300 px-4 py-2 hover:bg-red-300 ${
          currentCategory === "men's clothing" ? "bg-red-300" : ""
        }`}
        onClick={() => onSelectCategory("men's clothing")}
      >
        <FaMale className="h-10 w-10" />
        <span>Roupas Masculinas</span>
      </button>
    </div>
  );
};

export default CategoryFilter;
