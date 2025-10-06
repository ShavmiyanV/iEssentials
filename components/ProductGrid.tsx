"use client";

import { useState } from "react";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");
  return <div>ProductGrid</div>;
};

export default ProductGrid;
