import React from "react";
import Banner from "./components/Banner";
import Places from "./components/Places";
import Trips from "./components/Trips";
import Review from "./components/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <Places />
      <Trips />
      <Review />
    </div>
  );
};

export default Home;
