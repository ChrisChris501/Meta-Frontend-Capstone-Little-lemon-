import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import HighlightSection from "./Components/HighlightSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/HighlightSection' element={<HighlightSection />} />
          <Route path='/TestimonialsSection' element={<TestimonialsSection />} />
          <Route path='/About' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
