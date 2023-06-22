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
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            placeholder="Brand"
            {...register("brand")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="model">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="Model"
            {...register("model")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="number"
            placeholder="Year"
            {...register("year")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="body">
          <Form.Label>Body</Form.Label>
          <Form.Control type="text" placeholder="Body" {...register("body")} />
        </Form.Group>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Цена от</Form.Label>
            <Form.Control
              type="number"
              placeholder="PriceFrom"
              {...register("priceFrom")}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Цена до</Form.Label>
            <Form.Control
              type="number"
              placeholder="PriceTo"
              {...register("priceTo")}
            />
          </Form.Group>
        </Row>
        <Row className={"mt-3"}>
          <Form.Group as={Col}>
            <Form.Label>Пробег от</Form.Label>
            <Form.Control
              type="number"
              placeholder="MileageFrom"
              {...register("mileageFrom")}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Пробег до</Form.Label>
            <Form.Control
              type="number"
              placeholder="MileageTo"
              {...register("mileageTo")}
            />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit" className={"mt-4"}>
          Search
        </Button>
      </Form>

      {foundData && (
        <ProductList products={foundData.data} onClick={() => {}} />
      )}
    </Container>
  );
};

export default Page;
