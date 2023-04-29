import styled from "styled-components";
import { Navbar } from "../Components/Navbar";
import { Announcement } from "../Components/Announcement";
import Footer from "../Components/Footer/Footer";
import NewsLetter from "../Components/NewsLetter";
import { Products } from "../Components/Products/Products";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h3``;

const FilterText = styled.span`
  font-weight: 600;
  font-size: large;
  padding: 8px;
  margin-right: 5px;
`;

const Select = styled.select`
  padding: 8px;
`;

const Options = styled.option`
  padding: 8px;
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title></Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Options disabled defaultValue>
              Size
            </Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
          </Select>
          <Select>
            <Options disabled defaultValue >
              Color
            </Options>
            <Options>Green</Options>
            <Options>Yellow</Options>
            <Options>Red</Options>
            <Options>Blue</Options>
            <Options>Black</Options>
          </Select>
        </Filter>
        <Options></Options>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select>
            <Options defaultValue>Newest</Options>
            <Options>Price(asc)</Options>
            <Options>Price(desc)</Options>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
