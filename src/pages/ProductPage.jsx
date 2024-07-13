// src/ProductPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Falha ao carregar os dados do produto");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-4xl font-semibold">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="mb-4 h-64 w-full object-cover"
      />
      <p className="mb-4 text-lg">{product.description}</p>
      <p className="text-xl font-semibold">${product.price}</p>
      <p className="text-yellow-500">
        {product.rating.rate} stars ({product.rating.count} reviews)
      </p>
    </div>
  );
};

export default ProductPage;
