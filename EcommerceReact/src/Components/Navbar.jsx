import React from "react";
import styled from "styled-components";
import { Search, AddShoppingCartRounded } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { Button } from "@mui/material";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  margin-bottom: "10px";
  justify-content: space-between;
`;

const Left = styled.div`
  padding: 10px 20px;
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 10px 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 10px 20px;
`;

const SearchContainer = styled.div`
  /* padding: 10px; */
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  border: 1px solid black;
`;

const SearchInput = styled.input`
  padding: 0px 15px;
  flex: 8;
  border: none;
  height: -webkit-fill-available; 
`;

const LogoContainer = styled.h1`
  font-weight: bold;
  align-items: center;
  margin: 0;
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const MenuItms = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoContainer>FastShop</LogoContainer>
        </Left>
        <Center>
          <SearchContainer>
            <SearchInput />
            <Button>
              <Search />
            </Button>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>Login</MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="primary">
              <AddShoppingCartRounded></AddShoppingCartRounded>
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};
