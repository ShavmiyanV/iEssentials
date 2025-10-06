import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import React from "react";

const page = () => {
  return (
    <Container className="">
      <HomeBanner/>
      <ProductGrid/>
    </Container>
  );
};

export default page;
