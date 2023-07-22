import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  Link,
  HStack,
  VStack,
} from '@chakra-ui/react';

import src from '../assets/fotor-ai-2023071523651_2.jpg'
import src1 from '../assets/fotor-ai-2023071523651_1.jpg'
import Exchanges from './Exchanges';


const HomeLandingPage = () => {
  return (
    <Box p={6}>
      {/* <Flex align="center"> */}
        <HStack justifyContent={'space-between'}>
        <Image
          src={src1}
          alt="Bitcoin Image"
          maxW="400px"
          borderRadius="md"
        />
        <VStack>

          <Heading as="h1" mb={4}>
            Welcome to Crypto World
          </Heading>
          <Text fontSize="lg">
            Your one-stop platform for Trading and Investment in all Cryto Transactions
          </Text>
          <Button
            colorScheme="blue"
            size="lg"
            mt={4}
            onClick={() => {
              
            }}
            variant={'ghost'}
          >
            Get Started
          </Button>
        </VStack>
        <Image
          src={src}
          alt="Bitcoin Image"
          maxW="400px"
      
          borderRadius="md"
        />
        </HStack>
      {/* </Flex> */}

      <Box mt={10} p={'10'}>
        <Heading as="h2" mb={4}>
          Why Crypto World?
        </Heading>
        <Text fontSize="lg">
          At a team, we provide you with the best tools and resources to
          make informed decisions about trading bitcoins. Whether you are a
          beginner or an experienced trader, we've got you covered.
        </Text>
      </Box>

      <Box mt={10} p={'16'}>
        <Heading as="h2" mb={4}>
          Features
        </Heading>
        <ul>
          <li>
            <Text fontSize="lg">
              Real-time market data to keep you up-to-date with bitcoin prices.
            </Text>
          </li>
          <li>
            <Text fontSize="lg">
              Educational resources to help you understand the world of
              cryptocurrencies and trading strategies.
            </Text>
          </li>
          <li>
            <Text fontSize="lg">
              User-friendly interface for a seamless trading experience.
            </Text>
          </li>
        </ul>
      </Box>

      <Box mt={10} px={'16'}>
        <Link href="/coins" color="blue.500" fontSize="lg">
          Start Knowing the marker
        </Link>
      </Box>
    </Box>
  );
};

export default HomeLandingPage;
