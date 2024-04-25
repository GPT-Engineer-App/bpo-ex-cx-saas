import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
      <Routes>
        <Route exact path="/" element={<Index />} />
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
