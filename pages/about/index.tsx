import React from "react";
import dynamic from 'next/dynamic'

const AboutPage = dynamic(() => import('../../components/AboutPage/AboutPage'))


const About = () => {
  return <AboutPage />
};

export default About;
