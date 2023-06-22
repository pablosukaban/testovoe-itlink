"use client";

import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "@/components/bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import ProductCard from "@/components/ProductCard";
import { ItemType } from "@/types";
import ProductList from "@/components/ProductList";

type Inputs = {
  model: string;
  brand: string;
  year: string;
  body: string;
  priceFrom: string;
  priceTo: string;
  mileageFrom: string;
  mileageTo: string;
};

type FoundDataType = {
  data: ItemType[];
};

const Page = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [foundData, setFoundData] = useState<FoundDataType | null>(null);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const searchParams = new URLSearchParams(data);

    const response = await fetch(
      "http://localhost:3000/api/search?" + searchParams
    );

    const result = await response.json();

    setFoundData(result);
  };

  return (
    <Container>
      <h1>Страница search</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="brand">
          <Form.Label>Бренд</Form.Label>
          <Form.Control
            type="text"
            placeholder="Бренд"
            {...register("brand")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="model">
          <Form.Label>Модель</Form.Label>
          <Form.Control
            type="text"
            placeholder="Модель"
            {...register("model")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="year">
          <Form.Label>Год</Form.Label>
          <Form.Control type="number" placeholder="Год" {...register("year")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="body">
          <Form.Label>Кузов</Form.Label>
          <Form.Control type="text" placeholder="Кузов" {...register("body")} />
        </Form.Group>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Цена от</Form.Label>
            <Form.Control
              type="number"
              placeholder="Цена, до"
              {...register("priceFrom")}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Цена, до</Form.Label>
            <Form.Control
              type="number"
              placeholder="Цена, до"
              {...register("priceTo")}
            />
          </Form.Group>
        </Row>
        <Row className={"mt-3"}>
          <Form.Group as={Col}>
            <Form.Label>Пробег, от</Form.Label>
            <Form.Control
              type="number"
              placeholder="Пробег, от"
              {...register("mileageFrom")}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Пробег, до</Form.Label>
            <Form.Control
              type="number"
              placeholder="Пробег, до"
              {...register("mileageTo")}
            />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit" className={"mt-4"}>
          Поиск
        </Button>
      </Form>

      {foundData && (
        <ProductList products={foundData.data} onClick={() => {}} />
      )}
    </Container>
  );
};

export default Page;
