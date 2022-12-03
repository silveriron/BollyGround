import React from "react";

import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./Content.module.css";

interface ContentProps {
  title: string;
  content: string;
  type: "main" | "sub";
  timeStamp?: string;
}

const Content: React.FC<ContentProps> = ({
  title,
  content,
  type,
  timeStamp,
}) => {
  const containerStyle =
    type === "main" ? styles.mainContainer : styles.subContainer;
  return (
    <div className={containerStyle}>
      <Title name={title} type={type} />
      <Text content={content} type={type} />
      {type === "sub" && <p>{timeStamp}</p>}
    </div>
  );
};

export default Content;
