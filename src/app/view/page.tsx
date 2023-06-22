import ProductCard from "@/components/ProductCard";
import { Container, Row } from "@/components/bootstrap";
import { useGetProductsQuery } from "@/redux/productAPI";
import { ItemType } from "@/data";

type ResponseType = {
  data: ItemType[];
};

const ViewPage = async () => {
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });

  const data: ResponseType = await res.json();

  return (
    <Container>
      <Row xs={1} md={2}>
        {data ? (
          data.data.map((item) => (
            <ProductCard givenItem={item} key={item.id} />
          ))
        ) : (
          <h1>No data</h1>
        )}
      </Row>
    </Container>
  );
};

export default ViewPage;
