import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import {
  Container,
  Box,
  Text,
  VStack,
  Image,
  StatLabel,
  Stat,
  StatNumber,
  StatHelpText,
  StatArrow,
  RadioGroup,
  HStack,
  Radio,
  Badge,
  Button,
  Heading
} from "@chakra-ui/react";
import { Params, useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../index";
import DynamicBar from "./DynamicBar";
import Item from "./Item";
import Chart from "./Chart";

const CoinsDetail = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("inr");
  const [error, setError] = useState(false);
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const params = useParams();

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  const switchChartStats = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
      case "1y":
        setDays("365d");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;

      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  };

  useEffect(() => {
    const fetchCoinDetail = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);

        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        console.log(data);
        setCoin(data);
        setLoading(false);
        setChartArray(chartData.prices);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchCoinDetail();
  }, [params.id, currency,days]);
  console.log(coin);

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box justifyContent={"center"}>
            <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
              <HStack spacing={"4"}>
                <Radio value={"inr"}>INR</Radio>
                <Radio value={"usd"}>USD</Radio>
                <Radio value={"eur"}>EUR</Radio>
              </HStack>
            </RadioGroup>

            <Box width={"full"} borderWidth={1}>
              <Chart arr={chartArray} currency={currencySymbol} days={days} />
            </Box>
            <HStack p="4" px={'7'} overflowX={"auto"} margin={'auto'} justifyContent={'center'} alignItems={'stretch'}>
              {btns.map((i) => (
                <Button
                  disabled={days === i}
                  key={i}
                  variant={'unstyled'}
                  onClick={() => switchChartStats(i)}
                >
                  {i}
                </Button>
              ))}
            </HStack>
            <VStack alignItems={"center"} p={"7"}>
              <Text
                my={"2"}
                opacity={0.7}
                alignSelf={"center"}
                fontWeight={"500"}
              >
                Last Updated on{" "}
                {Date(coin.market_data.last_updated).split("G")[0]}
              </Text>
              <Image
                w={"20"}
                h={"20"}
                objectFit={"contain"}
                src={coin.image.large}

              />
              <Heading size={'md'}>{coin.symbol}</Heading>

              <Stat>
                <StatLabel>{coin.name}</StatLabel>
                <Badge fontSize={"lg"}>#{coin.market_cap_rank}</Badge>
                <StatNumber>
                  {currencySymbol} {coin.market_data.current_price[currency]}
                </StatNumber>
                <StatHelpText>
                  <StatArrow
                    type={
                      coin.market_data.price_change_percentage_24h > 0
                        ? "increase"
                        : "decrease"
                    }
                  />
                  {coin.market_data.price_change_percentage_24h} %
                </StatHelpText>
              </Stat>
            </VStack>

            <VStack>
              {/* <HStack> */}
              <DynamicBar
                min={coin.market_data.low_24h[currency]}
                max={coin.market_data.high_24h[currency]}
                value={coin.market_data.current_price[currency]}
              />
            </VStack>
          </Box>
          <Box m={"auto"} w={"50%"} p="4">
            <Item title={"Max Supply"} value={coin.market_data.max_supply} />
            <Item
              title={"Circulating Supply"}
              value={coin.market_data.circulating_supply}
            />
            <Item
              title={"Market Cap"}
              value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
            />
            <Item
              title={"All Time Low"}
              value={`${currencySymbol}${coin.market_data.atl[currency]}`}
            />
            <Item
              title={"All Time High"}
              value={`${currencySymbol}${coin.market_data.ath[currency]}`}
            />
          </Box>
        </>
      )}
    </Container>
  );
};

export default CoinsDetail;
