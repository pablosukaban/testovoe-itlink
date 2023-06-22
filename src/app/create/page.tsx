"use client";

import { useState } from "react";
import { Button, Col, Container, Form, Row } from "@/components/bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { productSlice } from "@/redux/productSlice";
import ProductList from "@/components/ProductList";

type Inputs = {
  name: string;
  description: string;
  price: string;
  images: string[];
  contacts: string;
  technical_characteristics: {
    model: string;
    brand: string;
    year: string;
    body: string;
    mileage: string;
  };
};

type Additional = {
  id: number;
  option_name: string;
};

const CreatePage = () => {
  const { products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const { addProduct } = productSlice.actions;

  const [isTechChars, setIsTechChars] = useState(false);

  const [additionalInfoList, setAdditionalInfoList] = useState<Additional[]>(
    []
  );

  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      name: "name",
      description: "description",
      price: "100000",
      images: [
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-4.jpeg?isig=0&q=75",
      ],
      contacts: "contact",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const newBody = { ...data, options: additionalInfoList };

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

  const addInfo = () => {
    setAdditionalInfoList((prev) => [
      ...prev,
      { id: Date.now(), option_name: "" },
    ]);
  };

  const deleteInfo = (id: number) => {
    setAdditionalInfoList((prev) => prev.filter((info) => info.id !== id));
  };

  const changeInfo = (id: number, value: string) => {
    const changedInfo = additionalInfoList.map((item) => {
      if (item.id !== id) return item;
      return { ...item, option_name: value };
    });

    setAdditionalInfoList(changedInfo);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
        </Form.Group>
        <Form.Group className={"mb-3"} controlId={"description"}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type={"text"}
            placeholder={"Description"}
            {...register("description", { required: true })}
          />
        </Form.Group>
        <Form.Group className={"mb-3"} controlId={"price"}>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type={"number"}
            placeholder={"Price"}
            {...register("price", { required: true })}
          />
        </Form.Group>
        <Form.Group className={"mb-3"} controlId={"contacts"}>
          <Form.Label>Contacts</Form.Label>
          <Form.Control
            type={"text"}
            placeholder={"Contacts"}
            {...register("contacts", { required: true })}
          />
        </Form.Group>
        <Button
          variant={isTechChars ? "outline-danger" : "outline-success"}
          type={"button"}
          onClick={() => setIsTechChars((prev) => !prev)}
        >
          {isTechChars ? "Удалить" : "Добавить"} tech chars
        </Button>
        {isTechChars && (
          <>
            <Row className={"mt-3"}>
              <Form.Group as={Col} className={"mb-3"} controlId={"brand"}>
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  type={"text"}
                  placeholder={"Brand"}
                  {...register("technical_characteristics.brand", {
                    required: isTechChars,
                  })}
                />
              </Form.Group>
              <Form.Group as={Col} className={"mb-3"} controlId={"model"}>
                <Form.Label>Model</Form.Label>
                <Form.Control
                  type={"text"}
                  placeholder={"Model"}
                  {...register("technical_characteristics.model", {
                    required: isTechChars,
                  })}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className={"mb-3"} controlId={"year"}>
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type={"number"}
                  placeholder={"Year"}
                  {...register("technical_characteristics.year", {
                    required: isTechChars,
                  })}
                />
              </Form.Group>
              <Form.Group as={Col} className={"mb-3"} controlId={"body"}>
                <Form.Label>Body</Form.Label>
                <Form.Control
                  type={"text"}
                  placeholder={"Body"}
                  {...register("technical_characteristics.body", {
                    required: isTechChars,
                  })}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className={"mb-3"} controlId={"mileage"}>
                <Form.Label>Mileage</Form.Label>
                <Form.Control
                  type={"number"}
                  placeholder={"Mileage"}
                  {...register("technical_characteristics.mileage", {
                    required: isTechChars,
                  })}
                />
              </Form.Group>
            </Row>
          </>
        )}
        <Form.Group className={"my-4"}>
          <Button type={"button"} onClick={addInfo} className={"block"}>
            Add info
          </Button>
        </Form.Group>
        {additionalInfoList.length > 0 &&
          additionalInfoList.map((item) => (
            <Form.Group className={"mb-3 mt-4 d-flex"} key={item.id}>
              <Form.Control
                type={"text"}
                placeholder={"Additional info"}
                onChange={(e) => changeInfo(item.id, e.target.value)}
              />
              <Button variant={"danger"} onClick={() => deleteInfo(item.id)}>
                Delete
              </Button>
            </Form.Group>
          ))}
        <Button type={"submit"}>Submit</Button>
      </Form>
      <ProductList products={products} />
    </Container>
  );
};

export default CreatePage;
