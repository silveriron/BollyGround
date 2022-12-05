import React from "react";
import Content from "../Content/Content";
import Image from "../Image/Image";
import BgImage from "next/image";
import styles from "./AboutSection.module.css";

export interface AboutProps {
  aboutData: {
    ttochi: {
      title: string;
      content: string;
    };
    bolly: {
      title: string;
      content: string;
    };
  };
}

const AboutSection: React.FC<AboutProps> = ({ aboutData }) => {
  return (
    <section className={styles.container}>
      <BgImage
        src="/img/bg.png"
        alt="background image"
        fill
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <div className={styles.ttochiContent}>
        <Image src="/img/ttochi.png" alt="ttochi" width={460} height={300} />
        <Content
          type="main"
          title={aboutData.ttochi.title}
          content={aboutData.ttochi.content}
        />
      </div>
      <div className={styles.bollyContent}>
        <Content
          type="main"
          title={aboutData.bolly.title}
          content={aboutData.bolly.content}
        />
        <Image src="/img/bolly.png" alt="bolly" width={460} height={300} />
      </div>
    </section>
  );
};

export default AboutSection;
