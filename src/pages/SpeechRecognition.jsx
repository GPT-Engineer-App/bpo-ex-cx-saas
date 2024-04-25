import React from "react";
import { Box, Text } from "@chakra-ui/react";

const SpeechRecognition = () => {
  return (
    <Box p={5}>
      <Text fontSize="xl" fontWeight="bold">
        Speech Recognition Module
      </Text>
      <Text mt={2}>Automatically transcribe customer calls to enable agents to focus more on the conversation.</Text>
    </Box>
  );
};

export default SpeechRecognition;
