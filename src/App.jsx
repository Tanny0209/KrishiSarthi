import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import All_Crops from "./components/Navbar/Pages/All_Crops";
import Soil_Information from "./components/Navbar/Pages/Soil_Information";
import Crop_Recommendation from "./components/Navbar/Pages/Crop_Recommendation";
import K_Gyan from "./components/Navbar/Pages/K_Gyan";
import Agriculture_Plan from "./components/Navbar/Pages/Agriculture_Plan";
import Policies from "./components/Navbar/Pages/Policies";
import Pesticides from "./components/Navbar/Pages/Pesticides";
import Fair_Events from "./components/Navbar/Pages/Fair_Events";
import Watchlist from "./components/Navbar/Pages/Watchlist";
import Notification from "./components/Navbar/Pages/Notification";
import Profile from "./components/Navbar/Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/All_Crops" element={<All_Crops />} />
        <Route path="/Soil_Information" element={<Soil_Information />} />
        <Route path="/Crop_Recommendation" element={<Crop_Recommendation />} />
        <Route path="/K_Gyan" element={<K_Gyan />} />
        <Route path="/Agriculture_Plan" element={<Agriculture_Plan />} />
        <Route path="/Policies" element={<Policies />} />
        <Route path="/Pesticides" element={<Pesticides />} />
        <Route path="/Fair_Events" element={<Fair_Events />} />
        <Route path="/Watchlist" element={<Watchlist />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
