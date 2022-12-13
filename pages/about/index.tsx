import dynamic from "next/dynamic";
import React from "react";

const AboutPage = dynamic(
  () => import("../../components/AboutPage/AboutPage"),
  {
    ssr: false,
  }
);

const About = () => {
  return <AboutPage />;
};

export default About;
