import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Index from "./pages/Index.jsx";
import Features from "./pages/Features.jsx";
import AIEmployees from "./pages/AIEmployees.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import FinanceModule from "./pages/FinanceModule.jsx";
import HumanResourcesModule from "./pages/HumanResourcesModule.jsx";
import SalesMarketingModule from "./modules/SalesMarketingModule.jsx";
import SpeechRecognition from "./pages/SpeechRecognition.jsx";
import SentimentAnalysis from "./pages/SentimentAnalysis.jsx";
import Finance from "./components/DepartmentViews/Finance.jsx";
import HumanResources from "./components/DepartmentViews/HumanResources.jsx";
import Role1Dashboard from "./components/EmployeeViews/Role1Dashboard.jsx";
import Role2Dashboard from "./components/EmployeeViews/Role2Dashboard.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/features" element={<Features />} />
        <Route path="/ai-employees" element={<AIEmployees />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/finance-module" element={<FinanceModule />} />
        <Route path="/human-resources-module" element={<HumanResourcesModule />} />
        <Route path="/speech-recognition" element={<SpeechRecognition />} />
        <Route path="/sentiment-analysis" element={<SentimentAnalysis />} />
        <Route path="/sales-marketing-module" element={<SalesMarketingModule />} />
        <Route path="/department/finance" element={<Finance />} />
        <Route path="/department/human-resources" element={<HumanResources />} />
        <Route path="/role/role1" element={<Role1Dashboard />} />
        <Route path="/role/role2" element={<Role2Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
