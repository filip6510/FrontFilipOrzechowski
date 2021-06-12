import styled, { css } from "styled-components";
import {colors} from "../../constans/index"

export const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  margin: 50px 0;
`;

const Text = css`
  text-align: center;
  color: ${colors.second};
`;
export const HomePageTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
`;
export const HomePageText = styled.p`
  ${Text}
`;
export const HomePageHeader = styled.h2`
  ${Text};
  font-size: 36px;
`;
