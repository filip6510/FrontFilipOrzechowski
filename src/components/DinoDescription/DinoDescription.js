import React from "react";
import { Parallax } from "react-parallax";
import { dinoDescription } from "./DinoDescription.data";

import {
  DinoDescriptionText,
  ParallaxContainer,
} from "./DinoDescription.styles";
const DinoDescription = () => {
  return (
    <>
    {dinoDescription.map((dino, index) => (
      <ParallaxContainer key={index}>
      <Parallax
        bgImage={dino.image}
        strength={1000}
        bgImageStyle={{ height: "auto", width: "100vw" }}
      >
        <DinoDescriptionText>{dino.text}</DinoDescriptionText>
      </Parallax>
    </ParallaxContainer>
    ))}

    </>
  );
};

export default DinoDescription;
