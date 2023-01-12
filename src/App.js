import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import PreNavbar from "./Components/PreNavbar";
import Slider from "./Components/Slider";
import data from "./data/data.json";
import Offers from "./Components/Offers";
import Heading from "./Components/Heading";
import StarProduct from "./Components/StarProduct";
import HotAccessoriesMenu from "./Components/HotAccessoriesMenu";
import HotAccessories from "./Components/HotAccessories";

import { Routes, Route } from "react-router-dom";
import ProductReviews from "./Components/ProductReviews";
import Videos from "./Components/Videos.js";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import NavOptios from "./Components/NavOptios";



function App() {
  return (
    <>
      {/* {" "} */}
      <Routes>
        <Route path="/" element={<PreNavbar />} />
      </Routes>
      <Navbar />
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/lifestyle"
          element={
            <HotAccessories
              lifestyle={data.hotAccessories.lifeStyle}
              lifestyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />     
      </Routes>
    
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews ProductReviews={data.productReviews}/>
      <Heading text="VIDEOS" />
      <Videos videos={data.videos}/>
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>
    </>

    // <>

    // {/* <HotAccessories/> */}
    // </>
  );
}

export default App;
