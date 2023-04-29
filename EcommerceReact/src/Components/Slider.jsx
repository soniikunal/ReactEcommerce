import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { sliderItem } from "../assets/data";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  height: 100vh;
  transform: translateX(${(props) => props.slideX * -100}vw);
  display: flex;
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
`;

const ImagContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  flex: 1;
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h3`
  font-size: 50px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  letter-spacing: 3px;
  font-size: 20px;
`;

const Button = styled.button`
  padding: 12px;
  cursor: pointer;
  font-size: 20px;
  background-color: transparent;
`;

const Arrow = styled.div`
  width: 50px;
  position: absolute;
  height: 50px;
  z-index: 2;
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
  const [slideX, setSlideX] = useState(0);

  const handleClick = (des) => {
    if (des === "left") {
      setSlideX(slideX > 0 ? slideX - 1 : 2);
    } else {
      setSlideX(slideX < 2 ? slideX + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow dir="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideX={slideX}>
        {sliderItem.map((e) => (
          <Slide bg={e.bg}>
            <ImagContainer>
              <Image src={e.link} />
            </ImagContainer>
            <InfoContainer>
              <Title>{e.title}</Title>
              <Desc>{e.desc}</Desc>
              <Button>BUY NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow dir="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
