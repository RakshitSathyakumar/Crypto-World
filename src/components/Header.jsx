import { Button, HStack, Heading, VStack,Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <HStack p={"4"} justifyContent={"space-between"} bgColor={"#071952"}>
      <VStack gap={'0.2'}>
        <Link to={"/"}>
          <Heading size={"md"} color={"white"}>
            Cryto World
          </Heading>
        </Link>
        <Link to={'/pro'} alignItems={'flex-start'}>
        <Text >Be a pro!</Text>
        </Link>
      </VStack>
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
          <Link to={"/converter"}>Converter</Link>
        </Button>
        <Button px={"4"} variant={"unstyled"} color={"white"}>
          <Link to={"/analysis"}>Analysis</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
