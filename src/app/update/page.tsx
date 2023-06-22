"use client";

import React, { useState } from "react";
import { Container } from "@/components/bootstrap";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ProductList from "@/components/ProductList";
import { Inputs, ItemType } from "@/types";
import FormComp from "@/components/FormComp";
import { SubmitHandler } from "react-hook-form";
import { getDefault } from "@/utils/getDefault";
import { productSlice } from "@/redux/productSlice";

const UpdatePage = () => {
  const { products } = useAppSelector((state) => state.product);
  const [chosenCar, setChosenCar] = useState<ItemType | null>(null);

  const dispatch = useAppDispatch();
  const { updateProduct } = productSlice.actions;

  const handleProductClick = (id: number) => {
    const foundCar = products.find((item) => item.id === id);
    if (!foundCar) {
      return;
    }
    setChosenCar(foundCar);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await fetch("http://localhost:3000/api/product", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, id: chosenCar?.id }),
    });

    const result = await response.json();

    dispatch(updateProduct(result.data));
    setChosenCar(null);
  };

  return (
    <Container>
      <h1>Выберите авто</h1>
      {chosenCar && (
        <FormComp
          onSubmit={onSubmit}
          additionalInfoList={getDefault(chosenCar).options ?? []}
          defaultValues={getDefault(chosenCar)}
          setAdditionalInfoList={() => {}}
        />
      )}
      <ProductList products={products} onClick={handleProductClick} />
    </Container>
  );
};

export default UpdatePage;
