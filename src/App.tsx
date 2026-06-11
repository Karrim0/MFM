import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import News from "./pages/News";
import WhitePaper from "./pages/WhitePaper";
import MediaMonitoring from "./pages//MediaMonitoring";
import InfluencersMarketing from "./pages/InfluencersMarketing";
function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/white-paper" element={<WhitePaper />} />
          <Route path="/media-monitoring" element={<MediaMonitoring />} />
          <Route path="/influencers-marketing" element={<InfluencersMarketing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;