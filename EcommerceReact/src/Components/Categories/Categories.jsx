import styled from "styled-components";
import { CategoriesData } from "../../assets/data";
import { CategoryItem } from "./CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  pad: 20px;
`;
export const Categories = () => {
  return (
    <Container>
      {CategoriesData.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};
