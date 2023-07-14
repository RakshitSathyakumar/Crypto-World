import { Badge, HStack, Progress, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Item = ({ title, value }) => {
  return (
    <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Ubuntu"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
  );
};

export default Item;
