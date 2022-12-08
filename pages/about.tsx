import React from "react";
import dynamic from 'next/dynamic'

import PostEditor from '../components/Editor/Editor' 

const AboutPage = dynamic(() => import('../components/AboutPage/AboutPage'))


const About = () => {
  // return <AboutPage />
  return (
  <div style={{paddingTop: 500}}>
    <PostEditor />
    </div>
    )
};

export default About;
