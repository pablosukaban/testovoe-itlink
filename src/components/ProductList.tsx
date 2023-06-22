import React from "react";
import { Row } from "@/components/bootstrap";
import { ItemType } from "@/types";
import ProductCard from "@/components/ProductCard";

type ProductListProps = {
  products: ItemType[];
  onClick?: (id: number) => void;
};
const ProductList = ({ products, onClick }: ProductListProps) => {
  return (
    <Row xs={1} md={2}>
      {products.map((item) => (
        <ProductCard givenItem={item} key={item.id} onClick={onClick} />
      ))}
    </Row>
  );
};

export default ProductList;
