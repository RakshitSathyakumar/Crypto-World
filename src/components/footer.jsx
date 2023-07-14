import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "";

const Footer = () => {
  return (
    <Box
      bgColor={"#112D4E"}
      opacity={'0.5'}
      color={"#fff"}
      minH={"20"}
      px={"16"}
      py={["16", "8"]}
    >
        <VStack>

      <Text margin={'auto'} justifyContent={'center'} alignItems={'center'}> © Crypto World - Since 2023</Text>
      <Text margin={'auto'} fontWeight={'900'} justifyContent={'center'} alignItems={'center'}><a href="https://github.com/RakshitSathyakumar" target="blank">By Rakshit</a></Text>
        </VStack>
    </Box>
  );
};

export default Footer;