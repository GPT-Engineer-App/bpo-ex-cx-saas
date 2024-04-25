import React from "react";
import { ChakraProvider, Box, VStack, Grid, theme, Text, Button, Heading, Flex, Spacer, IconButton, useColorMode, useColorModeValue, Image } from "@chakra-ui/react";
import { FaSun, FaMoon, FaUserCircle, FaTachometerAlt, FaRobot } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const navBgColor = useColorModeValue("gray.200", "gray.800");

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Flex w="full" bg={navBgColor} p={4} borderRadius="lg" align="center">
              <Heading size="md">BPO SaaS Dashboard</Heading>
              <Spacer />
              <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} alignSelf="flex-end" onClick={toggleColorMode} />
            </Flex>
            <Flex direction="column" align="center" bg={bgColor} p={8} borderRadius="lg" boxShadow="lg">
              <Text fontSize="2xl" fontWeight="bold">
                Welcome to Your BPO System
              </Text>
              <Image src="https://images.unsplash.com/photo-1559523182-a284c3fb7cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Nlc3MlMjBvdXRzb3VyY2luZ3xlbnwwfHx8fDE3MTQwMTU5ODN8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" my={4} />
              <Button leftIcon={<FaTachometerAlt />} colorScheme="blue" variant="solid">
                Dashboard
              </Button>
              <Button leftIcon={<FaUserCircle />} colorScheme="green" variant="outline" mt={4}>
                Employee Management
              </Button>
              <Button leftIcon={<FaRobot />} colorScheme="purple" variant="ghost" mt={4}>
                AI Functions
              </Button>
            </Flex>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
