import Navigation from "./components/Navigation/Navigation";

import { PageContainer, SlideContainer, SlideHeader } from "./App.styles.js";
import HomePage from "./components/HomePage/HomePage";
import { useState } from "react";
import Memes from "./components/Memes/Memes";
import DinoTypes from "./components/DinoTypes/DinoTypes";
import DinoDescription from "./components/DinoDescription/DinoDescription";
import Sources from "./components/Sources/Sources";

function App() {

  const [activePage, setActivePage] = useState(0);


  const pageData = [
    {
      name: "Strona główna",
      component: <HomePage />,
    },
    {
      name: "Memy",
      component: <Memes />,
    },
    {
      name: "Typy dinozaurów",
      component: <DinoTypes />,
    },
    {
      name: "Opis dinozaurów",
      component: <DinoDescription />,
    }
 
  ];


  return (
    <PageContainer>
      <Navigation setActive={setActivePage} />
      {pageData.map((slide, index) => {
        return (
          <SlideContainer
            key={index}
            active={index == activePage ? true : false}
          >
            <SlideHeader>{slide.name}</SlideHeader>
            {slide.component}
          </SlideContainer>
        );
      })}
    </PageContainer>
  );
}

export default App;
