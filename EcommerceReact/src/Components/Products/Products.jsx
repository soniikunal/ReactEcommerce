import styled from "styled-components";
import { ProductsData } from "../../assets/data";
import { ProductContainer } from "./ProductContainer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px;
  flex-wrap: wrap;
`;

export const Products = () => {
  return (
    <Container>
      {ProductsData.map((e) => (
        <ProductContainer item={e} key={e.id} />
      ))}
    </Container>
  );
};
