import "./App.css";
import './utils/Color.css'
import "./utils/font.css";
import "./utils/gayatri.css";
import "./utils/shivani.css";
import "./utils/yash.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CustomNavbar from './components/layouts/CustomNavbar';
import Footer from './components/layouts/Footer';
import Ourinfluencer from './pages/Ourinfluencer';
import Ourworks from './pages/Ourworks';
import GetinTouch from './pages/GetinTouch';
import HomeCount from './components/HomeCount';
import TopInfluencer from './components/TopInfluencer';
import ProgressBar from "./components/ProgressBar";
import InfluencerMarketing from "./pages/InfluencerMarketing";
import ProductPramotions from "./pages/ProductPramotions";
import BrandPramotions from "./pages/BrandPramotions";
import VideoAdvertisement from "./pages/VideoAdvertisement";
import Giveaway from "./pages/Giveaway";
import MemeMarketing from "./pages/MemeMarketing";
import OurOfferings from "./pages/OurOfferings";
import OurWorkMain from './components/OurWork/OurWorkMain'

// import { Colors } from "./utils/Colors.js";


function App() { 
  return (
    <div>
      <Router>
        <CustomNavbar />
        <ProgressBar/>
        <div
          className="fluid-container Background-dark-blue main-page"
        >
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/TopInfluencer" element={<TopInfluencer />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/ourinfluencer" element={<Ourinfluencer />} />
            <Route exact path="/ourworks" element={<Ourworks />} />
            <Route exact path="/InfluencerMarketing" element={<InfluencerMarketing/>} />
            <Route exact path="/ProductPramotions" element={<ProductPramotions/>} />
            <Route exact path="/BrandPramotions" element={<BrandPramotions/>} />
            <Route exact path="/VideoAdvertisement" element={<VideoAdvertisement/>} />
            <Route exact path="/Giveaway" element={<Giveaway/>} />
            <Route exact path="/MemeMarketing" element={<MemeMarketing/>} />
            <Route exact path="/getintouch" element={<GetinTouch />} />
            <Route exact path="/HomeCount" element={<HomeCount />} />
            <Route exact path="/OurOfferings" element={<OurOfferings />} />
            <Route exact path="/OurWorkMain" element={<OurWorkMain />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;