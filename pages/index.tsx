import React from "react";
import { useQuery } from "react-query";

import MainPage from "../components/MainPage/MainPage";
import { DummyData } from "../data/mainPage";
import { Post } from "../constants/type";
import { getPosts } from "../lib/api/api";





const Home = () => {
  const {data: posts, isLoading, isError} = useQuery<Post[], Error>('posts', getPosts
  )
  if (isLoading || isError) {
    return
  }


  return <MainPage items={DummyData.items} aboutData={DummyData.aboutData} posts={posts!} />


};

export default Home;
