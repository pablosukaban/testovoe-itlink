import { Button, Col, Form, Row } from "@/components/bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Additional, Inputs } from "@/types";
import { FormGroup } from "react-bootstrap";

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
  const { handleSubmit, register } = useForm<Inputs>({
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
        <Form.Label>Имя</Form.Label>
        <Form.Control
          type="text"
          placeholder="Имя"
          {...register("name", { required: true })}
        />
      </Form.Group>
      <Form.Group className={"mb-3"} controlId={"description"}>
        <Form.Label>Описание</Form.Label>
        <Form.Control
          type={"text"}
          placeholder={"Описание"}
          {...register("description", { required: true })}
        />
      </Form.Group>
      <Form.Group className={"mb-3"} controlId={"price"}>
        <Form.Label>Цена</Form.Label>
        <Form.Control
          type={"number"}
          placeholder={"Цена"}
          {...register("price", { required: true })}
        />
      </Form.Group>
      <Form.Group className={"mb-3"} controlId={"contacts"}>
        <Form.Label>Контакты</Form.Label>
        <Form.Control
          type={"text"}
          placeholder={"Контакты"}
          {...register("contacts", { required: true })}
        />
      </Form.Group>
      <FormGroup as={Col} className={"mb-3"}>
        <Form.Label>Изображение</Form.Label>
        <Form.Control
          type={"file"}
          {...register("images", { required: true })}
        />
      </FormGroup>
      <Button
        variant={isTechChars ? "outline-danger" : "outline-success"}
        type={"button"}
        onClick={() => setIsTechChars((prev) => !prev)}
      >
        {isTechChars ? "Удалить" : "Добавить"} тех. характеристики
      </Button>
      {isTechChars && (
        <>
          <Row className={"mt-3"}>
            <Form.Group as={Col} className={"mb-3"} controlId={"brand"}>
              <Form.Label>Бренд</Form.Label>
              <Form.Control
                type={"text"}
                placeholder={"Бренд"}
                {...register("technical_characteristics.brand", {
                  required: isTechChars,
                })}
              />
            </Form.Group>
            <Form.Group as={Col} className={"mb-3"} controlId={"model"}>
              <Form.Label>Модель</Form.Label>
              <Form.Control
                type={"text"}
                placeholder={"Модель"}
                {...register("technical_characteristics.model", {
                  required: isTechChars,
                })}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} className={"mb-3"} controlId={"year"}>
              <Form.Label>Год</Form.Label>
              <Form.Control
                type={"number"}
                placeholder={"Год"}
                {...register("technical_characteristics.productionYear", {
                  required: isTechChars,
                })}
              />
            </Form.Group>
            <Form.Group as={Col} className={"mb-3"} controlId={"body"}>
              <Form.Label>Кузов</Form.Label>
              <Form.Control
                type={"text"}
                placeholder={"Кузов"}
                {...register("technical_characteristics.body", {
                  required: isTechChars,
                })}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} className={"mb-3"} controlId={"mileage"}>
              <Form.Label>Пробег</Form.Label>
              <Form.Control
                type={"number"}
                placeholder={"Пробег"}
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
          Добавить опцию
        </Button>
      </Form.Group>
      {additionalInfoList &&
        additionalInfoList.map((item) => (
          <Form.Group className={"mb-3 mt-4 d-flex"} key={item.id}>
            <Form.Control
              type={"text"}
              placeholder={"Доп. опция"}
              value={item.option_name}
              onChange={(e) => changeInfo(item.id, e.target.value)}
            />
            <Button variant={"danger"} onClick={() => deleteInfo(item.id)}>
              Удалить
            </Button>
          </Form.Group>
        ))}
      <Button type={"submit"}>Подтвердить</Button>
    </Form>
  );
};

export default FormComp;
