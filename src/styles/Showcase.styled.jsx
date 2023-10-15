import styled from "styled-components";

export const ShowCaseParticleContainer = styled.div`
  position: relative;
`;

export const ShowcaseImageCard = styled.div`
position: absolute;
top: -75px;


width: 150px;
height: 150px;
border-radius: 50%;
overflow: hidden;
top: -1250%;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  
}
`
export const Particle = styled.img`
  position: absolute;
  top ${({top}) => top};
  left ${({left}) => left};
  right ${({right}) => right};
  bottom ${({bottom}) => bottom};
  transform: rotate(${({rotate}) => rotate});
`