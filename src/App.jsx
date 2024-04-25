import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { FaHome, FaTools, FaRobot, FaChartLine, FaWallet, FaUsers, FaBullhorn } from "react-icons/fa";
import Index from "./pages/Index.jsx";
import Features from "./pages/Features.jsx";
import AIEmployees from "./pages/AIEmployees.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import FinanceModule from "./modules/FinanceModule.jsx";
import HumanResourcesModule from "./modules/HumanResourcesModule.jsx";
import SalesMarketingModule from "./modules/SalesMarketingModule.jsx";

function App() {
  return (
    <Router>
      <Box as="nav" p={4} bg="gray.200" w="full">
        <Flex justify="space-between" align="center">
          <Button as={Link} to="/" leftIcon={<FaHome />}>
            Home
          </Button>
          <Button as={Link} to="/features" leftIcon={<FaTools />}>
            Features
          </Button>
          <Button as={Link} to="/ai-employees" leftIcon={<FaRobot />}>
            AI Employees
          </Button>
          <Button as={Link} to="/dashboard" leftIcon={<FaChartLine />}>
            Dashboard
          </Button>
          <Button as={Link} to="/finance-module" leftIcon={<FaWallet />}>
            Finance
          </Button>
          <Button as={Link} to="/human-resources-module" leftIcon={<FaUsers />}>
            Human Resources
          </Button>
          <Button as={Link} to="/sales-marketing-module" leftIcon={<FaBullhorn />}>
            Sales & Marketing
          </Button>
        </Flex>
      </Box>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/features" element={<Features />} />
        <Route path="/ai-employees" element={<AIEmployees />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/finance-module" element={<FinanceModule />} />
        <Route path="/human-resources-module" element={<HumanResourcesModule />} />
        <Route path="/sales-marketing-module" element={<SalesMarketingModule />} />
      </Routes>
    </Router>
  );
}

export default App;
