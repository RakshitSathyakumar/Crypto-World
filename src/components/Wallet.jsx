import { Button, Heading, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Coins from "./Coins";
import { server } from "../index";
import axios from "axios";
const Wallet = () => {
  const [data, returnData] = useState(0);
  useEffect(() => {
    const getValue = async () => {
      try {
        const data  = await axios.get(`${server}/coins/bitcoin`);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getValue();
  });
  return (
    <div className="converter">
      <form action="/coins">
        <Heading size={"md"}>Enter your Amount</Heading>
        <Input type="text" name="" id="" />
        <Button type="submit">Convert into BCoins</Button>
      </form>
    </div>
  );
};

export default Wallet;
