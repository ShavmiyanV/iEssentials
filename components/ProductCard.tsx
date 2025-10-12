import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border-[1px] border-dark_blue/20 rounded-md bg-white group">
      <div className="relative group overflow-hidden bg-shop_light_bg">
        {product?.images && (
          <Image
            src={urlFor(product?.images[0]).url()}
            alt="ProductImage"
            loading="lazy"
            width={700}
            height={700}
          />
        )}
        {product?.status === "sale" && (<p>Sale!</p>)}
      </div>
      <div className="p-3">Product Details</div>
    </div>
  );
};

export default ProductCard;
