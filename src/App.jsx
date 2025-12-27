import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import GeneratorPage from './pages/GeneratorPage';
import Footer from './components/Footer'
import AddMedicine from './components/Medicine/AddMedicine';
export default function App() {
  return (
    <>
  
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<GeneratorPage />} />
          <Route path="/add-medicine" element={<AddMedicine />} />
        </Routes>
      </Router>
      <Footer/>
    </>
    
    
  );
}
