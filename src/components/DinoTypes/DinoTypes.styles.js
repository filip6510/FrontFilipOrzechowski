import styled, { css } from "styled-components";
import { colors } from "../../constans";

export const DinoTypeCardContainer = styled.div`
border-radius: 15px;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

export const DinoTypeContainer = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 50px 0;
`

export const DinoTypeCard = styled.a`
border-radius: 15px;
width: 300px;
height: 400px;
background-color: ${colors.second};
display: flex;
flex-direction: column;
align-items: center;
margin: 50px;
cursor: pointer;
text-decoration: none;
color: ${colors.first};
`

export const DinoImage = styled.img`
width: 250px;
height: 150px;
margin-bottom: 25px;
`

export const DinoTypesText = styled.p`
margin: 5px 0;
`

