import { Container } from "@/components/bootstrap";
import { ItemType } from "@/types";
import ProductList from "@/components/ProductList";

type ResponseType = {
  data: ItemType[];
};

const ViewPage = async () => {
  const res = await fetch("http://localhost:3000/api/product");

  const data: ResponseType = await res.json();

  return (
    <Container>
      <h1>Страница view</h1>
      <ProductList products={data.data} />
    </Container>
  );
};

export default ViewPage;
