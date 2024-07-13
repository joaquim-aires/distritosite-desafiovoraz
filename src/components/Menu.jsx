import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

const Menu = () => {
  const [eletronics, setEletronic] = useState([]);
  const [jewelery, setJewel] = useState([]);
  const [mensClothing, setMenClothing] = useState([]);
  const [womensClothing, setWomenClothing] = useState([]);

  const [currentCategory, setCurrentCategory] = useState("todos");

  const fetchEletronics = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics",
      );
      if (!response.ok) {
        throw new Error("Falha ao carregar os dados");
      }
      const data = await response.json();
      setEletronic(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const fetchJewelery = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery",
      );
      if (!response.ok) {
        throw new Error("Falha ao carregar os dados");
      }
      const data = await response.json();
      setJewel(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const fetchMensClothing = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/men's%20clothing`,
      );
      if (!response.ok) {
        throw new Error("Falha ao carregar os dados");
      }
      const data = await response.json();
      setMenClothing(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const fetchWomensClothing = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/women's%20clothing`,
      );
      if (!response.ok) {
        throw new Error("Falha ao carregar os dados");
      }
      const data = await response.json();
      setWomenClothing(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    fetchEletronics();
    fetchJewelery();
    fetchMensClothing();
    fetchWomensClothing();
  }, []);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const handleProductClick = (product) => {
    let recentProducts =
      JSON.parse(localStorage.getItem("recentProducts")) || [];
    recentProducts = [
      {
        id: product.id,
        name: product.title, // Use 'title' here for 'name'
        image: product.image,
        price: product.price,
        rating: product.rating,
        count: product.count,
      },
      ...recentProducts.filter((p) => p.id !== product.id),
    ];
    if (recentProducts.length > 10) {
      recentProducts = recentProducts.slice(0, 10);
    }
    localStorage.setItem("recentProducts", JSON.stringify(recentProducts));
    console.log("Produto clicado:", recentProducts);
  };

  const recentProducts =
    JSON.parse(localStorage.getItem("recentProducts")) || [];

  return (
    <div className="my-4">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-4 rounded bg-red-500"></div>
        <span className="text-md font-semibold text-red-500">Categorias</span>
      </div>
      <div className="my-3 text-4xl font-semibold">Buscar por categoria</div>
      <CategoryFilter
        onSelectCategory={handleCategoryChange}
        currentCategory={currentCategory}
      />
      {/* Passa a função de mudança de categoria */}
      {currentCategory === "todos" && (
        <div>
          <div>
            {recentProducts.length > 0 && (
              <>
                <div className="mt-14 flex items-center space-x-2">
                  <div className="h-8 w-4 rounded bg-red-500"></div>
                  <span className="text-md font-semibold text-red-500">
                    Hoje
                  </span>
                </div>

                <div className="my-6 text-4xl font-semibold">Recomendados</div>
                <div className="grid grid-cols-6 gap-10">
                  {recentProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.name} // Change 'name' to 'title'
                      image={product.image}
                      price={product.price}
                      // rating={product.rating.rate}
                      // count={product.rating.count}
                      onClick={handleProductClick}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="mt-14 flex items-center space-x-2">
            <div className="h-8 w-4 rounded bg-red-500"></div>
            <span className="text-md font-semibold text-red-500">
              Nossos produtos
            </span>
          </div>
          <div className="my-6 text-4xl font-semibold">Eletrônicos</div>
          <div className="grid grid-cols-6 gap-10">
            {eletronics.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating.rate}
                count={product.rating.count}
                onClick={handleProductClick}
              />
            ))}
          </div>

          <div className="my-6 text-4xl font-semibold">Jóias</div>
          <div className="grid grid-cols-6 gap-10">
            {jewelery.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating.rate}
                count={product.rating.count}
                onClick={handleProductClick}
              />
            ))}
          </div>

          <div className="my-6 text-4xl font-semibold">Roupas Masculinas</div>
          <div className="grid grid-cols-6 gap-10">
            {mensClothing.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating.rate}
                count={product.rating.count}
                onClick={handleProductClick}
              />
            ))}
          </div>

          <div className="my-6 text-4xl font-semibold">Roupas Femininas</div>
          <div className="grid grid-cols-6 gap-10">
            {womensClothing.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating.rate}
                count={product.rating.count}
                onClick={handleProductClick}
              />
            ))}
          </div>
        </div>
      )}
      {currentCategory === "electronics" && (
        <div>
          <div className="mt-14 grid grid-cols-6 gap-10">
            {eletronics.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating.rate}
                count={product.rating.count}
                onClick={handleProductClick}
              />
            ))}
          </div>
        </div>
      )}
      {currentCategory === "jewelery" && (
        <div>
          <div className="mt-14 grid grid-cols-6 gap-10">
            {jewelery.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating.rate}
                count={product.rating.count}
                onClick={handleProductClick}
              />
            ))}
          </div>
        </div>
      )}
      {currentCategory === "men's clothing" && (
        <div>
          <div className="mt-14 grid grid-cols-6 gap-10">
            {mensClothing.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating.rate}
                count={product.rating.count}
                onClick={handleProductClick}
              />
            ))}
          </div>
        </div>
      )}
      {currentCategory === "women's clothing" && (
        <div>
          <div className="mt-14 grid grid-cols-6 gap-10">
            {womensClothing.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating.rate}
                count={product.rating.count}
                onClick={handleProductClick}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
