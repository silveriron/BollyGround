import React from "react";
import AboutDescSection from "../components/AboutSection/AboutSection";

const aboutData = {
  ttochi: {
    title: "골목을 방황하던 고양이 또치",
    content:
      "한겨울에 상점가 골목을 방황하던 고양이 또치는 얼빵해보이는 집사를 필살 애교로 꼬셔서 간택하고, 따뜻한 집과 때되면 채워지는 밥그릇을 얻은 행복한 고양이에요. 평화로운 나날을 보내던 또치는 새로운 가족 볼리의 등장으로 묘생 2막을 살게 되었죠.",
  },
  bolly: {
    title: "공사장 떠돌이 강아지 볼리",
    content:
      "공사장을 떠돌며 인부 아저씨들한테 밥을 얻어먹으며 살던 강아지 볼리는 주말에는 아무도 자신을 찾아오지 않아서 슬펐어요. 그러던 어느날 언제인가 한번 본 적 있는 사람이 아무도 찾지 않는 주말에 찾아왔고, 지저분한 몰골과 여기저기 붙어 있는 진드기를 보고 같이 가자고 해서 따라 가게 되었어요. 지금은 매일 이뻐해주고 산책도 해주고 맛있는 간식도 주는 가족이 생겼어요.",
  },
};

const Home = () => {
  return (
    <>
      <AboutDescSection aboutData={aboutData} />
      <div>
        <p>dhfjkshfieosljfdklsjfdsil</p>
      </div>
    </>
  );
};

export default Home;
