import Home from "./link's/home/Home"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Master from "./link's/Master_classes/Master_classes"
import Made from "./link's/custom-made_furniture/custom-made_furniture/Made";
import About from "./link's/About_Us/About_Us";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/master_classes" element={<Master />} />
        <Route path="/custom-made_furniture" element={<Made />} />
        <Route path="/about_us" element={<About />} />
      </Routes>
    </Router>

  );
}

export default App;
