import styled from "styled-components";
import { Navbar } from "../Components/Navbar";
import { Announcement } from "../Components/Announcement";
import Footer from "../Components/Footer/Footer";
import { Add, Remove } from "@mui/icons-material";
import { Button } from "@mui/material";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  margin: 10px 0px;
  padding: 20px;
`;
const ImagContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Imag = styled.img``;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: xx-large;
`;

const Price = styled.p`
  font-size: 40px;
  font-weight: 100;
`;

const Desc = styled.span`
  margin: 10px 0px;
  font-size: large;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const FilterTitle = styled.div`
  font-size: large;
  font-weight: 100;
  margin-right: 10px;
`;

const FilterColor = styled.div`
  width: 30px;
  margin-left: 5px;
  height: 30px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  cursor: pointer;
`;

const Filter = styled.div`
  display: flex;
  margin-left: 5px;
  align-items: center;
`;

const FilterSize = styled.select`
  padding: 8px;
`;

const FilterOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  margin-left: 5px;
  width: 50%;
  margin-top: 15px;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  margin-left: 5px;
  align-items: center;
`;

const Amount = styled.div`
  border: 0.6px solid black;
  padding: 5px;
  height: 30px;
  width: 30px;
  border-radius: 10px;
  justify-content: center;
  margin: 0px 5px;
  align-items: center;
  display: flex;
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImagContainer>
          <Imag src="https://assets.ajio.com/medias/sys_master/root/20221107/GanB/63692cafaeb269659c77aa2d/-473Wx593H-469157776-mediumblue-MODEL.jpg" />
        </ImagContainer>
        <InfoContainer>
          <Title>Jeans</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            eius facilis mollitia commodi hic voluptatibus temporibus error,
            labore, saepe blanditiis in! Quisquam nulla laborum veniam fuga nisi
            vitae aperiam consequatur.
          </Desc>
          <Price>20$</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="Black"></FilterColor>
              <FilterColor color="DarkBlue"></FilterColor>
              <FilterColor color="SkyBlue"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterOption>XS</FilterOption>
                <FilterOption>S</FilterOption>
                <FilterOption>M</FilterOption>
                <FilterOption>XL</FilterOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
