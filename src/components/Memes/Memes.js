import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { MemeImage, MemesContainer, MemeContainer } from "./Memes.styles.js";

const Memes = () => {
  const [memes, setMemes] = useState([]);

  const memeWrapperRef = useRef(null);
  const memeLoadedRef = useRef(false);
  const timeoutRef = useRef(0);

  useEffect(async () => {
    if (memes.length < 3) seedMemes();
    document.addEventListener("scroll", handleScroll);
  }, []);

  const updateMeme = useCallback((newMeme) => {
    setMemes((oldMemes) => {
      return [...oldMemes, newMeme];
    });
  }, []);

  const getMeme = useCallback(async () => {
    const meme = await axios.get(
      "https://meme-api.herokuapp.com/gimme/DinosaurMemes"
    );
    updateMeme(meme.data.url);
  }, [updateMeme]);

  const seedMemes = useCallback(async () => {
    await getMeme();
    setTimeout(async () => {
      await getMeme();
    }, 1500);
  });

  const handleScroll = useCallback(() => {
    if (memeLoadedRef.current) return;
    if (
      memeWrapperRef.current.scrollHeight +
        memeWrapperRef.current.offsetTop -
        window.innerHeight -
        window.pageYOffset >
      100
    ) {
      return;
    }
      memeLoadedRef.current = true;
      timeoutRef.current = setTimeout(() => {
        getMeme();
        memeLoadedRef.current = false;
      }, 1000); 
  }, []);

  return (
    <MemesContainer ref={memeWrapperRef}>
      <h3 style={{ marginBottom: "150px" }}>
        Scrolluj w dół aby zobaczyć najlepsze memy o dinozaurach
      </h3>
      {memes.map((memeUrl, index) => {
        return (
          <MemeContainer key={index}>
            Mem #{index + 1}: <MemeImage src={memeUrl} />
          </MemeContainer>
        );
      })}
    </MemesContainer>
  );
};

export default Memes;
