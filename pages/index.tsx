import React from "react";
import { useQuery } from "react-query";
import axios from 'axios'

import MainPage from "../components/MainPage/MainPage";
import { DummyData } from "../data/mainPage";
import { Post } from "../constants/type";


const getPosts = async () => {
  const res = await axios.get('/api/posts')
  return res.data.posts
}

const Home = () => {
  const {data: posts, isLoading, isError} = useQuery<Post[], Error>('posts', getPosts
  )

  if (isLoading || isError) {
    return
  }


  return <MainPage items={DummyData.items} aboutData={DummyData.aboutData} posts={posts!} />


};

export default Home;
