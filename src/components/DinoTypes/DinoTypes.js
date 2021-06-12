import React from "react";
import Tilt from "react-parallax-tilt";

import {
  DinoTypeContainer,
  DinoTypeCardContainer,
  DinoTypeCard,
  DinoTypesText,
  DinoImage,
} from "./DinoTypes.styles.js";

import { dinoTypes } from "./DinoTypes.data";
const DinoTypes = () => {
  return (
    <DinoTypeContainer>
      <DinoTypeCardContainer>
        {dinoTypes.map((dino, index) => (
          <Tilt key={index}>
            <DinoTypeCard target="_blank" href={dino.link}>
              <h2>{dino.name}</h2>
              <DinoImage src={dino.image} />
              <DinoTypesText>Rodzina: {dino.family}</DinoTypesText>
              <DinoTypesText>Waga: {dino.weight}</DinoTypesText>
              <DinoTypesText>Rozmiar: {dino.size}</DinoTypesText>
              <DinoTypesText>Żył: {dino.existed}</DinoTypesText>
            </DinoTypeCard>
          </Tilt>
        ))}
      </DinoTypeCardContainer>
    </DinoTypeContainer>
  );
};

export default DinoTypes;
