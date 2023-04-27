import styled from "styled-components";

const Container = styled.div`
height:30px;
background-color: teal;
color: white;
font-size: medium;
font-weight: bold;
display:flex;
align-items: center;
justify-content: center;
`;

export const Announcement = () => {
  return <Container>Super Deals, Spend Fast</Container>;
};
