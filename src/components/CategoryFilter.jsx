import React from 'react';
import { FaTh, FaLaptop, FaGem, FaTshirt, FaMale } from 'react-icons/fa';

const CategoryFilter = ({ onSelectCategory, currentCategory }) => {
  return (
    <div className="flex justify-around mt-14 h-40 gap-36">
      <button
        className={`flex flex-col items-center justify-center px-4 py-2 border border-gray-300 rounded hover:bg-red-300 w-full ${
          currentCategory === 'todos' ? 'bg-red-300' : ''
        }`}
        onClick={() => onSelectCategory('todos')}
      >
        <FaTh className="w-10 h-10" />
        <span>Todos</span>
      </button>
      <button
        className={`flex flex-col items-center justify-center px-4 py-2 border border-gray-300 rounded hover:bg-red-300 w-full ${
          currentCategory === 'electronics' ? 'bg-red-300' : ''
        }`}
        onClick={() => onSelectCategory('electronics')}
      >
        <FaLaptop className="w-10 h-10" />
        <span>Eletrônicos</span>
      </button>
      <button
        className={`flex flex-col items-center justify-center px-4 py-2 border border-gray-300 rounded hover:bg-red-300 w-full ${
          currentCategory === 'jewelery' ? 'bg-red-300' : ''
        }`}
        onClick={() => onSelectCategory('jewelery')}
      >
        <FaGem className="w-10 h-10" />
        <span>Joias</span>
      </button>
      <button
        className={`flex flex-col items-center px-4 py-2 justify-center border border-gray-300 rounded hover:bg-red-300 w-full ${
          currentCategory === "women's clothing" ? 'bg-red-300' : ''
        }`}
        onClick={() => onSelectCategory("women's clothing")}
      >
        <FaTshirt className="w-10 h-10" />
        <span>Roupas Femininas</span>
      </button>
      <button
        className={`flex flex-col items-center px-4 py-2 justify-center border border-gray-300 rounded hover:bg-red-300 w-full ${
          currentCategory === "men's clothing" ? 'bg-red-300' : ''
        }`}
        onClick={() => onSelectCategory("men's clothing")}
      >
        <FaMale className="w-10 h-10" />
        <span>Roupas Masculinas</span>
      </button>
    </div>
  );
};

export default CategoryFilter;
