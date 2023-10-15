// eslint-disable-next-line no-unused-vars
import React from 'react'
// import global styles
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    Bluetext,
    ParaText,
    IconContainer,
} from '../styles/Global.styled';
// import showcase styles
import { ShowcaseImageCard,ShowCaseParticleContainer,Particle } from '../styles/Showcase.styled';
// import react-icons
import {BsLinkedin,BsFacebook,BsTwitter,BsInstagram} from "react-icons/bs";
// import asset
import ShowcaseImg from '../assets/pic_oat.jpg'
import BackgroundImg from '../assets/particle.png';
const ShowCase = () => {
  return (
    <PaddingContainer
    id="Home"
    left = "4%"
    right= "10%"
    top= "15%"
    bottom = "10%"
    >
      <FlexContainer direction="row" >
        {/*--left-content-- */}
        <div>
            <Heading as="h4" size="h4">Hello</Heading>
            <Heading 
            as="h2"
            size="h2"
            top="0.5rem"
            bottom="1rem">
                I'm <Bluetext>Start Over</Bluetext>
            </Heading>
           <Heading as="h3" size="h3">
           I'm <Bluetext> Web Developer with a passion for learning new technologies.</Bluetext>
           </Heading>

           <ParaText as="p" top="2rem" bottom="4rem">
                Hello, I'm oat and I'm a Student learning new technologies for web development.
                I'm passionate about learning new technologies.
           </ParaText>

           {/*--social-icon */}
           <FlexContainer gap="20px">
                <IconContainer color='white' size="1.5rem">
                    <BsLinkedin />
                </IconContainer>

                <IconContainer color='white' size="1.5rem">
                    <BsTwitter />
                </IconContainer>

                <IconContainer color='white' size="1.5rem">
                    <BsFacebook />
                </IconContainer>

                <IconContainer color='white' size="1.5rem">
                    <BsInstagram />
                </IconContainer>

                {/*--right-content--*/}
                <FlexContainer >
                    <ShowCaseParticleContainer>
                        <ShowcaseImageCard >
                           <img src={ShowcaseImg} alt="showcase"  />
                        </ShowcaseImageCard>

                        <Particle
                            src={BackgroundImg}
                            alt='particle'
                            top="-80px"
                            left="20px"
                            rotate ="60deg"
                        />
                        <Particle
                            src={BackgroundImg}
                            alt='particle'
                            top="50px"
                            right="-70px"
                            rotate ="0deg"
                        />
                        <Particle
                            src={BackgroundImg}
                            alt='particle'
                            bottom="-80px"
                            left="-70px"
                            rotate ="50deg"
                        />
                    </ShowCaseParticleContainer>
                </FlexContainer>
           </FlexContainer>
        </div>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default ShowCase
