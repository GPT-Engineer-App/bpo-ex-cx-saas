import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Features from "./pages/Features.jsx";
import AIEmployees from "./pages/AIEmployees.jsx";
import Dashboard from "./pages/Dashboard.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/features" element={<Features />} />
        <Route path="/ai-employees" element={<AIEmployees />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/departments/finance" element={<Finance />} />
        <Route path="/departments/human-resources" element={<HumanResources />} />
      </Routes>
    </Router>
  );
}

export default App;
