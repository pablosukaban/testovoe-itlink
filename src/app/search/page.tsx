"use client";

import React from "react";
import { Button, Col, Container, Form, Row } from "@/components/bootstrap";

// search cars by params

const Page = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(formData);

    // const params = `model=${}`

    // const response = await fetch('/search', {
    //   body: JSON.stringify({
    //
    //   })
    // })

    // get data from input in form

    // console.log(e.target);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="model">
          <Form.Label>Model</Form.Label>
          <Form.Control type="text" placeholder="Model" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="brand">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" placeholder="Brand" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control type="text" placeholder="Year" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="body">
          <Form.Label>Body</Form.Label>
          <Form.Control type="text" placeholder="Body" />
        </Form.Group>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Цена от</Form.Label>
            <Form.Control type="text" placeholder="PriceFrom" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Цена до</Form.Label>
            <Form.Control type="text" placeholder="PriceTo" />
          </Form.Group>
        </Row>
        <Row className={"mt-3"}>
          <Form.Group as={Col}>
            <Form.Label>Пробег от</Form.Label>
            <Form.Control type="text" placeholder="MileageFrom" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Пробег до</Form.Label>
            <Form.Control type="text" placeholder="MileageTo" />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit" className={"mt-4"}>
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default Page;
