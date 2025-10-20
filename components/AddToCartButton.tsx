import { Product } from "@/sanity.types";
import { ShoppingBag } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const isOutOfStock = product?.stock === 0;
  return (
    <div>
      <Button>
        <ShoppingBag /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default AddToCartButton;
