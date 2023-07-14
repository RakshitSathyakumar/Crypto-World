import { Badge, HStack, Progress, VStack,Text } from "@chakra-ui/react";

const DynamicBar = ({ min, max, value }) => {
  const percentFilled = ((value - min) / (max - min)) * 100;

  return (
    <VStack w={"full"}>
    <Progress value={percentFilled} colorScheme={"green"} w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={min} colorScheme={"red"} />
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={max} colorScheme={"green"} />
    </HStack>
  </VStack>
  );
};

export default DynamicBar;
