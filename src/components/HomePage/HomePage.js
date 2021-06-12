import React from "react";
import logo from "./logo.svg";

import "./HomePage.css";

import {
  HomePageContainer,
  HomePageTextContainer,
HomePageText,
HomePageHeader,
} from "./HomePage.styles"
const HomePage = () => {
  return (
    <HomePageContainer>
    <HomePageTextContainer>
      <HomePageHeader>Strona internetowa o dinozaurach</HomePageHeader>
      <HomePageText>Stworzona w technologii React z użyciem biblioteki styled-components</HomePageText>
      <img src={logo} className="App-logo" alt="logo" />
      <HomePageText>Wykonał Filip Orzechowski</HomePageText>
    </HomePageTextContainer>
    </HomePageContainer>
  );
};

export default HomePage;
