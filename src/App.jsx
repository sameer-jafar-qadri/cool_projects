import './index.css';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import RandomNumberGenerator from "./pages/GeneratorPage";
import GeneratorPage from './pages/GeneratorPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<GeneratorPage/>} />
      </Routes>
    </Router>
  );
}
