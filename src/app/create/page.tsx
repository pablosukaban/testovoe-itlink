"use client";

import { useState } from "react";
import { Container } from "@/components/bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { productSlice } from "@/redux/productSlice";
import ProductList from "@/components/ProductList";
import FormComp from "@/components/FormComp";
import { Additional, Inputs } from "@/types";

const CreatePage = () => {
  const { products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const { addProduct } = productSlice.actions;

  const [additionalInfoList, setAdditionalInfoList] = useState<Additional[]>(
    []
  );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const newBody = {
      ...data,
      options: additionalInfoList,
      technical_characteristics: {
        ...data.technical_characteristics,
        car_id: Date.now(),
      },
      images: [URL.createObjectURL(data.images[0])],
    };

    const response = await fetch("http://localhost:3000/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBody),
    });

    const result = await response.json();

    dispatch(addProduct(result.data));
  };
  const handleProductClick = (id: number) => {};

  const defaultValues: Inputs = {
    name: "",
    contacts: "",
    description: "",
    price: 0,
    images: [],
  };

  return (
    <Container>
      <h1>Страница create</h1>
      <FormComp
        onSubmit={onSubmit}
        additionalInfoList={additionalInfoList}
        setAdditionalInfoList={setAdditionalInfoList}
        defaultValues={defaultValues}
      />
      <ProductList products={products} onClick={handleProductClick} />
    </Container>
  );
};

export default CreatePage;
