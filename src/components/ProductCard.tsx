"use client";

import { Card, Col } from "@/components/bootstrap";
import Image from "next/image";
import { ItemType } from "@/types";

interface ProductProps {
  givenItem: ItemType;
}

const ProductCard = ({ givenItem }: ProductProps) => {
  const tech_chars = givenItem.technical_characteristics;

  return (
    <Col className={"mt-3"}>
      <Card>
        <Card.Img variant={"top"} src={givenItem.images[0]} />
        <Card.Body>
          <Card.Title>{givenItem.name}</Card.Title>
          <Card.Text>
            Цена: <strong>{givenItem.price} ₽ </strong>
          </Card.Text>
          <Card.Text>{givenItem.description}</Card.Text>
          {!!tech_chars && (
            <>
              <Card.Text>Характеристики</Card.Text>
              <ul>
                {Object.keys(tech_chars).map((key) => (
                  <li key={key}>
                    {key}: {tech_chars[key]}
                  </li>
                ))}
              </ul>
            </>
          )}
          {givenItem.options && (
            <>
              <Card.Text>Дополнительные опции:</Card.Text>
              <Card.Text>
                {givenItem.options.map((option) => (
                  <span key={option.option_name}>{option.option_name} </span>
                ))}
              </Card.Text>
            </>
          )}
          <Card.Text>
            Контакты: <strong>{givenItem.contacts}</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
