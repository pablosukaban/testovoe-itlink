"use client";
import ProductCard from "@/components/ProductCard";
import { Container, Row } from "@/components/bootstrap";
import { useGetProductsQuery } from "@/redux/productAPI";

const ViewPage = () => {
  const { data, isLoading } = useGetProductsQuery("");

  if (isLoading) return <h1>Loading...</h1>;

  if (!data) return <h1>Error...</h1>;

  return (
    <Container>
      <Row xs={1} md={2}>
        {data.data.map((item) => (
          <ProductCard givenItem={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
};

export default ViewPage;
