// src/ProductPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import { RefreshCcw, Truck } from "lucide-react";

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
    <div className="flex w-full flex-row justify-center gap-8 pb-32 pt-36">
      <div className="flex h-[500px] w-[600px] items-center justify-center bg-[#f5f5f5]">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 object-cover"
        />
      </div>
      <div className="flex w-96 flex-col gap-3">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <div className="flex flex-row gap-2">
          <StarRating rating={product.rating.rate} />
          <p>({product.rating.count} Avaliações)</p>
        </div>
        <p className="text-xl font-semibold">${product.price}</p>
        <p className="text-md leading-6">{product.description}</p>
        <div className="flex flex-col gap-6 border-t border-zinc-600">
          <button className="mt-9 w-full rounded-md bg-red-500 p-4 font-medium text-white">
            Comprar
          </button>
          <div className="w-full rounded-md border border-zinc-600 text-black">
            <div className="flex flex-row items-center gap-3 border-b border-zinc-600 p-4">
              <Truck size={40} />
              <div>
                <p className="text-xl font-medium">Frete Grátis</p>
                <p className="underline">
                  Coloque seu CEP para calcular o frete
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 p-4">
              <RefreshCcw size={40} />
              <div>
                <p className="text-xl font-medium">Devolução</p>
                <p className="underline">Grátis até 30 dias após a compra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
