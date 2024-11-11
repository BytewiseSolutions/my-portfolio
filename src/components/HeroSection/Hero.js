import React from 'react'
import { HeroBg, HeroContainer, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, Image, ResumeButton, Span, SubTitle, TextLoop, Title } from './HeroStyle';
import { Bio } from '../../data/Constants';
import Typewriter from 'typewriter-effect';
import HeroImg from '../../images/HeroImage.png';

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
        
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hello, I am <br />
              {Bio.name}
            </Title>

            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer>
            <Image src={HeroImg} alt="Hero" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default Hero
