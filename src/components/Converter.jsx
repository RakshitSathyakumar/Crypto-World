import { Button, HStack, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Coins from "./Coins";
import { server } from "../index";
import axios from "axios";
const Converter = () => {
  const [data, setData] = useState(0);
  useEffect(() => {
    const getValue = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=inr&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
        );
        console.log(data[0].current_price);
        setData(data[0].current_price);
      } catch (err) {
        console.log(err);
      }
    };
    getValue();
    console.log(data);
  });

  const [inp, setInp] = useState(0);
  const submit = (e) => {
    e.preventDefault();
    console.log(inp / data);
  };

  return (
    <div className="converter">
      <form onSubmit={submit}>
        <Heading size={"md"}>Enter your Amount in INR</Heading>

        <HStack>
          <Button
            type="sub"
            onClick={(e) => {
              setInp(Math.max(0, inp - 300));
            }}
          >
            -
          </Button>
          <Input
            textAlign={"center"}
            type="text"
            name=""
            id=""
            value={inp}
            onChange={(e) => setInp(e.target.value)}
          />
          <Button
            type="add"
            onClick={(e) => {
              setInp(Number(inp) + 500);
            }}
          >
            +
          </Button>
        </HStack>

        {/* <Button type="submit" onSubmit={()=>console.log({inp})}>Convert into BCoins</Button> */}
        <Heading size={"sm"}>Current Price of BTC is : INR {data}</Heading>
        <Heading size={"sm"}>
          The number of units of BTC you can Buy Right Now is : {inp / data}
        </Heading>
      </form>
    </div>
  );
};

export default Converter;
