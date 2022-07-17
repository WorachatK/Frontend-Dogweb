import React, { useState } from 'react'
import { OurpetContainer,OurpetWrap,OurpetHead,Arrow,OurpetSlider,OurpetHeadText,SliderPostCard,ImgCard,CardName,SliderContainer} from './OurpetElement'
import {Button} from '../ButtonElement'

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { dog1 } from '../data'

const Ourpet = () => {

    const [slideIndex,setSlideInddex] = useState(0)

    const handleClick = (direction) =>{
        if(direction==="left"){
            setSlideInddex(slideIndex > -5 ? slideIndex-1 : 5)
        } else {
            setSlideInddex(slideIndex < 5 ? slideIndex +1 : -5)
        }
    }
  return (
    <OurpetContainer id='ourpet'>
        

        <OurpetWrap>
            <OurpetHead>
                <OurpetHeadText>Our friends who are looking for a house</OurpetHeadText>
            </OurpetHead>

            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftIcon/>
            </Arrow>

            <SliderContainer slideIndex={slideIndex}>
                {dog1.map(item=>(
                <OurpetSlider>
                    <SliderPostCard>
                        <ImgCard src={item.img} alt={item.name}/>
                        <CardName>{item.name}</CardName>
                        <Button>Learn More</Button>
                    </SliderPostCard>
                </OurpetSlider>
                ))}
            </SliderContainer>

            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightIcon/>
            </Arrow>

            <Button>Go to know the rest</Button>
        </OurpetWrap>

        

    </OurpetContainer>
  )
}

export default Ourpet