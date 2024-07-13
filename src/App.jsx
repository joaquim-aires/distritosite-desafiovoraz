// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import ProductPage from "./pages/ProductPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Menu />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
