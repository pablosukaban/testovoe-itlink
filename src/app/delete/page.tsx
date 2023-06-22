"use client";

import React from "react";
import { Container } from "@/components/bootstrap";
import ProductList from "@/components/ProductList";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { productSlice } from "@/redux/productSlice";

const DeletePage = async () => {
  const { products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const { deleteProduct } = productSlice.actions;

  const handleProductClick = (id: number) => {
    const isDelete = confirm(
      "Вы действительно хотите удалить авто с id=" + id + "?"
    );

    if (isDelete) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <Container>
      <h1>Страница Delete</h1>
      <ProductList products={products} onClick={handleProductClick} />
    </Container>
  );
};

export default DeletePage;
