import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WizardList from "./pages/WizardList";
import WizardDetail from "./pages/WizardDetail";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">All Wizards</Link>
      </nav>
      <Routes>
        <Route path="/" element={<WizardList />} />
        <Route path="/wizards/:id" element={<WizardDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
