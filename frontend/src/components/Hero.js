import React from 'react'
import { HeroContainer, HeroWrapper, Title, Desc, HeroItem } from './HeroStyles'
import image1 from '../images/image1.png' 

const Hero = () => {
  return (
    <HeroContainer>
        <HeroWrapper>
            <HeroItem>
                <div>
                    <Title>La mode est africaine</Title>
                    <Desc>MotherlandHeritage vous offre une collection de vêtements, chaussures et accessoires
                        inspirés des traditions affricaines. Le bazin, le tissu sous toutes les formes.
                    </Desc>
                </div>
            </HeroItem>
            <HeroItem>
                <img src={image1} alt=''></img>
            </HeroItem>
        </HeroWrapper>
    </HeroContainer>
  )
}

export default Hero