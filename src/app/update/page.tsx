"use client";

import React, { useState } from "react";
import { Container } from "@/components/bootstrap";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ProductList from "@/components/ProductList";
import { Additional, Inputs, ItemType } from "@/types";
import FormComp from "@/components/FormComp";
import { SubmitHandler } from "react-hook-form";
import { getDefault } from "@/utils/getDefault";
import { productSlice } from "@/redux/productSlice";

const UpdatePage = () => {
  const { products } = useAppSelector((state) => state.product);
  const [chosenCar, setChosenCar] = useState<ItemType | null>(null);

  const dispatch = useAppDispatch();
  const { updateProduct } = productSlice.actions;

  const [additionalInfoList, setAdditionalInfoList] = useState<Additional[]>(
    []
  );

  const handleProductClick = (id: number) => {
    const foundCar = products.find((item) => item.id === id);

    if (!foundCar) {
      return;
    }

    setChosenCar(foundCar);

    if (foundCar.options) {
      setAdditionalInfoList(foundCar.options);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await fetch("http://localhost:3000/api/product", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        id: chosenCar?.id,
        images: [URL.createObjectURL(data.images[0])],
      }),
    });

    const result = await response.json();

    dispatch(updateProduct(result.data));
    setChosenCar(null);
  };

  return (
    <Container>
      <h1>Страница Update</h1>
      {chosenCar ? (
        <FormComp
          onSubmit={onSubmit}
          additionalInfoList={additionalInfoList}
          defaultValues={getDefault(chosenCar)}
          setAdditionalInfoList={setAdditionalInfoList}
        />
      ) : (
        <h3>Выберите авто</h3>
      )}
      <ProductList products={products} onClick={handleProductClick} />
    </Container>
  );
};

export default UpdatePage;
