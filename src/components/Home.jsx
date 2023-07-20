import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import img from "../assets/tradeHub.jpg";
import btc2 from "../assets/fotor-ai-2023071523651_2.jpg";
import btc1 from "../assets/fotor-ai-2023071523651_1.jpg";
import { motion } from "framer-motion";
import { server } from "../index";
import axios from "axios";

const Home = () => {
  const [trending, setTrending] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`${server}/search/trending`);
        setTrending(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetch();
  },[]);
  console.log(trending);

  return (
    <Box bgColor={"#3282B8"} w={"full"} h={"80vh"} opacity={"0.9"}>
      {/* <motion.div
        style={{
          height: "80vh",
          padding: "50px",
        }}
        // animate={{
        //   translateY: "20px",
        // }}
        // transition={{
        //   duration: 2,
        //   repeat: Infinity,
        //   repeatType: "reverse",
        // }}
      >
        <HStack>
          <Image w={"33%"} h={"50vh"} objectFit={"contain"} src={btc1} color={'#fff'} borderRadius={'20%'}/>
          <VStack justifyContent={"center"} margin={"auto"} color={"#000"}>
            <Heading color={'#000'}>Crytpo World</Heading>
            <Text>One stop platform for all your crypto Tradings!</Text>
          </VStack>
          <Image w={"33%"} h={"50vh"} objectFit={"contain"} src={btc2} borderRadius={'20%'}/>
        </HStack>
        <Text p={'20'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda alias voluptatum quam libero dolor consectetur veniam. Libero officiis consequatur corporis excepturi! Error tempora, in ex iure odio nostrum maxime aliquid.</Text>
        

      </motion.div>
     */}
    </Box>
  );
};

export default Home;
