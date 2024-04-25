import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex bg="gray.200" p={4} align="center" justify="space-between">
      <Box p="2">
        <Link to="/">Home</Link>
      </Box>
      <Spacer />
      <Box>
        <Button as={Link} to="/dashboard" colorScheme="teal" mr="4">
          Dashboard
        </Button>
        <Button as={Link} to="/features" colorScheme="teal" mr="4">
          Features
        </Button>
        <Button as={Link} to="/finance-module" colorScheme="teal" mr="4">
          Finance
        </Button>
        <Button as={Link} to="/human-resources-module" colorScheme="teal" mr="4">
          Human Resources
        </Button>
        <Button as={Link} to="/sales-marketing-module" colorScheme="teal" mr="4">
          Sales & Marketing
        </Button>
      </Box>
    </Flex>
  );
};

export default Navigation;
