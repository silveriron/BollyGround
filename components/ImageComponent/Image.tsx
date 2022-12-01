import React from "react";
import ImageTag from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Image: React.FC<ImageProps> = (props) => {
  const { width, height, src, alt } = props;
  return (
    <div
      style={{
        borderRadius: "8px",
        overflow: "hidden",
        width: width,
        height: height,
      }}
    >
      <ImageTag {...props} />
    </div>
  );
};

export default Image;
