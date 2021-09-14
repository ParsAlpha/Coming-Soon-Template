import { useEffect, useState } from "react";
import Image from "next/image";
// import styled from "styled-components";
import imagebg from "../../public/bgindex.jpg"

// const Box = styled.div`
//   position: fixed;
//   top: 0;
//   background: rgb(49, 49, 177);
//   background: linear-gradient(
//     0deg,
//     #1adaef79  0%,
//     #1adaefc2 50%,
//     #1ADBEF 100%
//   );
// `;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BGImage() {
  const [width, setWidth] = useState<number>();
  const [height, setheight] = useState<number>();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <>
        <Image
          src={imagebg}
          width={width}
          height={height}
        />
      </>
    );
  }

  return null;
}

export default BGImage;
