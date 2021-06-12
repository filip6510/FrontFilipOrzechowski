import styled, { css } from "styled-components";
import {colors} from "./constans/index"


export const PageContainer = styled.div`
background-color: ${colors.first};
`

export const SlideContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
display: ${({ active }) => (active ? "inline-block" : "none")};
width: 100%;
height: 100%;
`

export const SlideHeader = styled.h1`
font-size: 40px;
margin-top: 50px;
text-align: center;
`