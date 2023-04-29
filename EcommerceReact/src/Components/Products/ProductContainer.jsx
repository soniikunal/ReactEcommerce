import styled from "styled-components";
import {
  AddShoppingCartOutlined,
  FavoriteBorderOutlined,
  Search,
} from "@mui/icons-material";

const Info = styled.div`
  display: flex;
  opacity: 0;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  z-index: 3;
  top: 0;
  left: 0;
  transition: all 0.5s ease;
  align-items: center;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 350px;
  min-width: 280px;
  margin: 5px;
  position: relative;
  &:hover ${Info}{
opacity: 1;
  }
`;

const Circle = styled.div`
  justify-content: center;
  text-align: center;
  width: 200px;
  z-index: -3;
  height: 200px;
  background-color: aliceblue;
  border-radius: 50%;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
`;

const Icon = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  margin: 5px;
  border-radius: 50%;
  background-color: white;
  width: 40px;
  transition: all 0.25s ease;
  cursor: pointer;
  &:hover {
    background-color: #b5b3b3;
    transform: scale(1.1);
  }
`;

export const ProductContainer = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />

      <Info>
        <Icon>
          <AddShoppingCartOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Icon>
          <Search />
        </Icon>
      </Info>
    </Container>
  );
};
