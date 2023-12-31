import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  Button,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";
import CoinCard from "./CoinCard";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eroor, setError] = useState(false);
  const [page, setPage] = useState(0);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };
    fetchCoins();
  }, [currency, page]);

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(50).fill(1);

  if (eroor) return <Error message="JOJ" />;
  return (
    <>
      <Container maxW={"container.xl"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
              <HStack spacing={"4"}>
                <Radio value={"inr"}>INR</Radio>
                <Radio value={"usd"}>USD</Radio>
                <Radio value={"eur"}>EUR</Radio>
              </HStack>
            </RadioGroup>

            <HStack flexWrap={"wrap"}>
              {coins.map((i) => (
                <CoinCard
                  id={i.id}
                  key={i.id}
                  img={i.image}
                  name={i.name}
                  price={i.current_price}
                  symbol={i.symbol}
                  currencySymbol={currencySymbol}
                />
              ))}
            </HStack>

            <HStack w={"full"} overflowX={"auto"} p={"8"}>
              {btns.map((item, index) => (
                <Button
                  key={index}
                  variant={'unstyled'}
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
            </HStack>
          </>
        )}
      </Container>
    </>
  );
};

// const ExchangeCard = ({ name, img, rank, url,year }) => (
//   <a href={url} target={"blank"}>
//     <VStack
//       w={"52"}
//       shadow={"lg"}
//       p={"8"}
//       borderRadius={"lg"}
//       transition={"all 0.3s"}
//       m={"4"}
//       css={{
//         "&:hover": {
//           transform: "scale(1.1)",
//         },
//       }}
//     >
//       <Image
//         src={img}
//         w={"10"}
//         h={"10"}
//         objectFit={"contain"}
//         alt={"Exchange"}
//       />
//       <Heading size={"md"} noOfLines={1}>
//         {rank}
//       </Heading>

//       <Text noOfLines={1}>{name}</Text>
//       <Text noOfLines={1}>{year}-2023</Text>
//     </VStack>
//   </a>
// );
export default Coins;
