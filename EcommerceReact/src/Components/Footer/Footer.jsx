import {
  FacebookRounded,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  text-align: center;
  background-color: darkkhaki;
`;

const Left = styled.div`
  padding: 0px 20px;
  flex: 1;
`;

const Center = styled.div`
  padding: 0px 20px;
  flex: 1;
`;

const Right = styled.div`
  padding: 0px 20px;

  flex: 1;
`;

const Heading = styled.h1``;

const Des = styled.p`
  font-size: medium;
`;

const SocialIconContainer = styled.div`
  margin-bottom: 12px;
`;

const SocialIcon = styled.span`
  cursor: pointer;
  padding-right: 10px;
  /* font-size: medium; */
`;

const UL = styled.ul`
  list-style: none;
  text-align: start;
  flex-wrap: wrap;
  display: flex;
  margin: 0px;
`;

const Links = styled.li`
  width: 50%;
  cursor: pointer;
  margin-bottom: 5px;
`;

const ContactDetail = styled.div`
  display: flex;
  align-self: center;
  margin-left: 10px;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Heading>FastShop</Heading>
        <Des>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          fugit laboriosam ipsa debitis? Quo officiis quam repudiandae cum
          nobis. Assumenda maiores cupiditate tempora neque quaerat ipsum,
          veritatis hic excepturi quos.
        </Des>
        <SocialIconContainer>
          <SocialIcon>
            <FacebookRounded />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
        </SocialIconContainer>
      </Left>
      <Center>
        <Heading>Quick Links</Heading>
        <UL>
          <Links>Home</Links>
          <Links>Men's Fashion</Links>
          <Links>Women's Collection</Links>
          <Links>Terms</Links>
          <Links>Home</Links>
          <Links>Men's Fashion</Links>
          <Links>Women's Collection</Links>
          <Links>Terms</Links>
        </UL>
      </Center>
      <Right>
        <Heading>Contact Us</Heading>
        <ContactDetail>
          <Room />
          Udaipur, Rajathan IND
        </ContactDetail>
        <ContactDetail>
          <Phone />
          +91-7426992001
        </ContactDetail>
        <ContactDetail>
          <Mail />
          kunal94611@gmail.com
        </ContactDetail>
      </Right>
    </Container>
  );
};
