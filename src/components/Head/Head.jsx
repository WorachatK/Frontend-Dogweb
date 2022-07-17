import React from 'react'
import { HeadContainer,ImgContainer,Img,TextContainer ,HeadWrap,TextHead,TextDes,TextWrap} from './HeadElement'
import { Button } from '../ButtonElement'
import Dog1 from '../../image/dog1.png'

const Head = () => {
  return (
    <HeadContainer id='home'>
        <HeadWrap>
            <TextContainer>
                <TextWrap>
                    <TextHead>Not Only people need a house</TextHead>
                    <TextDes>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae soluta mollitia aperiam quidem doloremque laboriosam quam quas. Atque natus possimus nihil ut rem quibusdam culpa sequi itaque numquam unde?</TextDes>
                    <Button>Make a friend</Button>
                </TextWrap>
            </TextContainer>
            <ImgContainer>
                <Img src={Dog1} alt='dog'/>
            </ImgContainer>
        </HeadWrap>
    </HeadContainer>
  )
}

export default Head