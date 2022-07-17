import React from 'react'
import { AboutContainer,AboutWrap,AboutImageContainer,AboutTextContainer,AboutDesc,AboutTextHead,Img } from './AboutElement'
import Dog from '../../image/dog2.png'

const About = () => {
  return (
    <AboutContainer id='about'>
      <AboutWrap>

        <AboutImageContainer>
          <Img src={Dog}/>
        </AboutImageContainer>
        <AboutTextContainer>
          <AboutTextHead>About the shelter</AboutTextHead>
          <AboutTextHead>"Cozy House"</AboutTextHead>
          <AboutDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo enim aliquid molestias reiciendis? Repudiandae in enim, at ut illo facilis est hic, laudantium repellendus inventore voluptates? Nisi ratione sunt dolorum.</AboutDesc>
          <AboutDesc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt maiores ipsa omnis optio. Dolorum magnam aliquid enim est obcaecati minima repellendus perferendis labore, eius sapiente voluptates eligendi maxime! Tempore.</AboutDesc>
        </AboutTextContainer>

      </AboutWrap>
    </AboutContainer>
  )
}

export default About