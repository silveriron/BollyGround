import React from "react";
import MainPage from "../components/MainPage/MainPage";

import { DummyData } from "../components/MainPage/MainPage.stories";


const Home = () => {
  return <MainPage {...DummyData} />
};

export default Home;
