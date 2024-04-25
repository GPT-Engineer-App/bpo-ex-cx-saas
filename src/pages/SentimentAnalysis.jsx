import React from "react";
import { Box, Text } from "@chakra-ui/react";

const SentimentAnalysis = () => {
  return (
    <Box p={5}>
      <Text fontSize="xl" fontWeight="bold">
        Sentiment Analysis Module
      </Text>
      <Text mt={2}>Analyze customer interactions to identify positive or negative sentiments.</Text>
    </Box>
  );
};

export default SentimentAnalysis;
