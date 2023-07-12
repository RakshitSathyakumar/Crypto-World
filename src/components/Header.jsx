import { Button, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <HStack p={"4"} justifyContent={"space-between"} bgColor={"blue.900"}>
      <Link to={"/"}>
        <Heading size={"md"} color={"white"}>
          Cryto World
        </Heading>
      </Link>
      <HStack m={"2"} alignItems={"stretch"}>
        <Button px={"4"} m={"auto"} variant={"unstyled"} color={"white"}>
          <Link to={"/"}>Home</Link>
        </Button>
        <Button px={"4"} variant={"unstyled"} color={"white"}>
          <Link to={"/coins"}>Coins</Link>
        </Button>
        <Button px={"4"} variant={"unstyled"} color={"white"}>
          <Link to={"/exchanges"}>Exchanges</Link>
        </Button>
        <Button px={"4"} variant={"unstyled"} color={"white"}>
          <Link to={"/wallet"}>Converter</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
