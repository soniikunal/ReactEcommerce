import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 40%;
  background-color: aliceblue;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1``;
const Form = styled.form`
width:80%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin-top: 15px;
  min-width: 40%;
`;
const Agreement = styled.div``;
const Button = styled.button`
  padding: 15px 30px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign-In</Title>
        <Form>
          <Input placeholder="Email " type="email" />
          <Input placeholder="Password" type="password" />
        </Form>
        <Button>Submit</Button>
      </Wrapper>
    </Container>
  );
};

export default Login;
