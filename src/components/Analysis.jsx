import React, { useState } from 'react';
import { ChakraProvider, Box, Center, Heading, Input, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';

function RiskRewardCalculator() {
  const [entryPrice, setEntryPrice] = useState('');
  const [stopLossPrice, setStopLossPrice] = useState('');
  const [targetPrice, setTargetPrice] = useState('');

  // Calculate risk percentage and reward percentage
  const calculateRiskAndReward = () => {
    const entry = parseFloat(entryPrice);
    const stopLoss = parseFloat(stopLossPrice);
    const target = parseFloat(targetPrice);

    if (isNaN(entry) || isNaN(stopLoss) || isNaN(target)) {
      return {
        riskPercentage: 0,
        rewardPercentage: 0,
      };
    }

    const riskPercentage = ((entry - stopLoss) / entry) * 100;
    const rewardPercentage = ((target - entry) / entry) * 100;

    return {
      riskPercentage: isNaN(riskPercentage) ? 0 : riskPercentage.toFixed(2),
      rewardPercentage: isNaN(rewardPercentage) ? 0 : rewardPercentage.toFixed(2),
    };
  };

  const { riskPercentage, rewardPercentage } = calculateRiskAndReward();

  return (
    <Center p={4}>
      <Box maxW="full" h={'80vh'}>
        <Heading size="xl" textAlign="center" mb={4} p={'16'}>
          StopLoss Calculator
        </Heading>
        <FormControl id="entryPrice" mt={4}>
          <FormLabel>Entry Price</FormLabel>
          <Input
            type="number"
            value={entryPrice}
            onChange={(e) => setEntryPrice(e.target.value)}
            // placeholder="Enter entry price"
            textAlign="center"
          />
        </FormControl>
        <FormControl id="stopLossPrice" mt={4}>
          <FormLabel>Stop-Loss Price</FormLabel>
          <Input
            type="number"
            value={stopLossPrice}
            onChange={(e) => setStopLossPrice(e.target.value)}
            // placeholder="Enter stop-loss price"
            textAlign="center"
          />
        </FormControl>
        <FormControl id="targetPrice" mt={4}>
          <FormLabel>Target Price</FormLabel>
          <Input
            type="number"
            value={targetPrice}
            onChange={(e) => setTargetPrice(e.target.value)}
            // placeholder="Enter target price"
            textAlign="center"
          />
        </FormControl>
        <Center mt={4}>
          <Box>
            <FormControl>
              <FormLabel>Risk Percentage</FormLabel>
              <FormHelperText>
                {riskPercentage}% {riskPercentage < 0 ? 'Potential Loss' : 'Potential Risk'}
              </FormHelperText>
            </FormControl>
          </Box>
        </Center>
        <Center mt={5}>
          <Box>
            <FormControl>
              <FormLabel>Reward Percentage</FormLabel>
              <FormHelperText>{rewardPercentage}% Potential Reward</FormHelperText>
            </FormControl>
          </Box>
        </Center>
      </Box>
    </Center>
  );
}

export default RiskRewardCalculator;
