import React from "react";
import { useQuery } from "react-query";

import MainPage from "../components/MainPage/MainPage";
import { DummyData } from "../data/mainPage";
import { Post } from "../constants/type";
import { getPosts } from "../lib/api/api";
import LoadingModal from "../components/LoadingModal/LoadingModal";
import Alert from "@mui/material/Alert";

const Home = () => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery<Post[], Error>("posts", getPosts);
  
  if (isLoading) {
    return <LoadingModal isLoading={true} />;
  }

  if (isError) {
    return <Alert severity="error">서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.</Alert>
  }

  return (
    <MainPage
      items={DummyData.items}
      aboutData={DummyData.aboutData}
      posts={posts!}
    />
  );
};

export default Home;
