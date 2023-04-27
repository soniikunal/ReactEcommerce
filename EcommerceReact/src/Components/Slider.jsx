import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Wrapper = styled.div`
  height: 100%;
 
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vh;
  height: 100vh;
`;

const ImagContainer = styled.div`
 
`;

const InfoContainer = styled.div`   
 
`;

const Arrow = styled.div`
  width: 50px;
  position: absolute;
  height: 50px;
  border-radius: 50px;
  display: flex;
  background-color: aliceblue;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.dir === "left" && "10px"};
  cursor: pointer;
  right: ${(props) => props.dir === "right" && "10px"};
`;

export const Slider = () => {
  return (
    <Container>
      <Arrow dir="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper></Wrapper>
      <Arrow dir="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
