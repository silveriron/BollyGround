import React from "react";
import ImageTag from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Image: React.FC<ImageProps> = (props) => {
  // const { width, height } = props;
  return (
    // <div
    //   style={{
    //     borderRadius: "8px",
    //     overflow: "hidden",
    //     maxWidth: width,
    //     maxHeight: height,
    //     width: "100vw",
    //     height: "100vh"
    //   }}
    // >
      <ImageTag {...props} />
    // </div>
  );
};

export default Image;
