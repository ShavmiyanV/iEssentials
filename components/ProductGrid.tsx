"use client";

import { useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/constants/data";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

const query = `*[_type == "product" && variant==$variant] | order(name desc) {
..., "categories": categories[]->title
}`;

const params = {}
  
  return (
    <div>
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
    </div>
  );
};

export default ProductGrid;
