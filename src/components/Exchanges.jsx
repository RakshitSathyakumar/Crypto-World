import React, { useEffect, useState } from "react";
import { server } from "../index";
import { Container, HStack, VStack,Image ,Heading,Text} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";
import axios from "axios";
const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eroor,setError] = useState(false);
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        console.log(data[0].current_price);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };
    fetchCoins();
  }, []);
  if(eroor) return <Error message="JOJ"/>
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack flexWrap={"wrap"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                img={i.image}
                name={i.name}
                rank={i.trust_score_rank}
                year={i.year_established}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url,year }) => (
  <a href={url} target={"blank"}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{year}-2023</Text>
    </VStack>
  </a>
);
export default Exchanges;
