import './index.css';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import GeneratorPage from './pages/GeneratorPage';
import Footer from './components/Footer'
import Header from './components/Header/Header';
export default function App() {
  return (
    <>
    
    <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<GeneratorPage />} />
        </Routes>
      </Router>
      <Footer/>
    </>
    
    
  );
}
