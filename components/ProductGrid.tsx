"use client";

import { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/constants/data";
import { client } from "@/sanity/lib/client";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

  const query = `*[_type == "product" && variant==$variant] | order(name desc) {
..., "categories": categories[]->title
}`;

  const params = { variant: selectedTab.toLowerCase() };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        console.log(response);
      } catch (error) {
        console.error("Product fetching Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  });
  return (
    <div>
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
    </div>
  );
};

export default ProductGrid;
