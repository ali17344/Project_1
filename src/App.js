import Home from "./link's/home/Home"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Master from "./link's/Master_classes/Master_classes"
import Made from "./link's/custom-made_furniture/custom-made_furniture/Made";
import About from "./link's/About_Us/About_Us";
import Header from "./link's/header/Header";
import Footer from "./link's/footer/Footer";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/master_classes" element={<Master />} />
        <Route path="/custom_made_furniture" element={<Made />} />
        <Route path="/about_us" element={<About />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
