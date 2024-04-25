import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box p={5}>
      <Text fontSize="xl" fontWeight="bold">
        Dashboard - Real-time Business Metrics and Predictive Insights
      </Text>
      <Text mt={2}>Real-time analytics dashboard providing insights into key performance metrics.</Text>
      <Text mt={2}>Predictive analytics feature to forecast future trends and optimize operations.</Text>
    </Box>
  );
};

export default Dashboard;
