import React from "react";

import MainPage from "../components/MainPage/MainPage";
import { DummyData } from "../data/mainPage";

const Home = () => {
  return <MainPage {...DummyData} />

};

export default Home;
