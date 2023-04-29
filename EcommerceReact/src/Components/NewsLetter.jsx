import { Send } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  height: 250px;
  background-color: aquamarine;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 50px;
  margin-bottom: 10px;
`;
const Description = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 300;
`;
const InputContainer = styled.div`
  height: 40px;
  background-color: white;
  width: 50%;
  display: flex;
  border: 1px solid #9c8989;
`;
const Input = styled.input`
  border: none;
  padding: 0px 20px;
  flex: 8;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  flex: 1;
  color: white;
  background-color: teal;
  border: none;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get Connect with us Shop the Fast trends. FAST</Description>
      <InputContainer>
        <Input type="text" placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter