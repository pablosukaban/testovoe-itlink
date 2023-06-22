import ProductCard from "@/components/ProductCard";
import { Container, Row } from "@/components/bootstrap";
import { ItemType } from "@/types";
import ProductList from "@/components/ProductList";

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
      <ProductList products={data.data} />
    </Container>
  );
};

export default ViewPage;
