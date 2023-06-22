import { Button, Col, Form, Row } from "@/components/bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Additional, Inputs } from "@/types";

type FormCompProps = {
  onSubmit: (data: any) => void;
  additionalInfoList: Additional[];
  defaultValues: Inputs;
  setAdditionalInfoList: (info: Additional[]) => void;
};

const FormComp = ({
  onSubmit,
  additionalInfoList,
  setAdditionalInfoList,
  defaultValues,
}: FormCompProps) => {
  const { handleSubmit, register, reset } = useForm<Inputs>({
    defaultValues: defaultValues,
  });

  const [isTechChars, setIsTechChars] = useState(false);

  const addInfo = () => {
    const newList = [
      ...additionalInfoList,
      { id: Date.now(), option_name: "" },
    ];

    setAdditionalInfoList(newList);
  };

  const deleteInfo = (id: number) => {
    const newList = additionalInfoList.filter((info) => info.id !== id);

    setAdditionalInfoList(newList);
  };

  const changeInfo = (id: number, value: string) => {
    const changedInfo = additionalInfoList.map((item) => {
      if (item.id !== id) return item;
      return { ...item, option_name: value };
    });

    setAdditionalInfoList(changedInfo);
  };

  return (
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
                {...register("technical_characteristics.productionYear", {
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
      {additionalInfoList &&
        additionalInfoList.map((item) => (
          <Form.Group className={"mb-3 mt-4 d-flex"} key={item.id}>
            <Form.Control
              type={"text"}
              placeholder={"Additional info"}
              value={item.option_name}
              onChange={(e) => changeInfo(item.id, e.target.value)}
            />
            <Button variant={"danger"} onClick={() => deleteInfo(item.id)}>
              Delete
            </Button>
          </Form.Group>
        ))}
      <Button type={"submit"}>Submit</Button>
    </Form>
  );
};

export default FormComp;
