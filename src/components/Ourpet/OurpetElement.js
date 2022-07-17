import styled from "styled-components";

export const OurpetContainer = styled.div`
    background-color: #fff0da;
    height: 100vh;
    width: 100%;
`
export const OurpetWrap =styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(${prop=>prop.slideIndex * -100}vw);
    transition: all 1s ease;
    overflow: hidden;

`
export const OurpetHead =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`

export const OurpetHeadText =styled.h1`
    color: #635e56;
    display: flex;

    @media (max-width: 600){
        font-size: 12px;
    }
`
export const Arrow =styled.div`
    width: 50px;
    height: 50px;
    background-color: orange;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${props=>props.direction === "left" && "50px"};
    right: ${props=>props.direction === "right" && "50px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

export const SliderContainer=styled.div`
    color: #635e56;
    display: flex;
    transform: translateX(${prop=>prop.slideIndex * -320}px);
    transition: all 1s ease;

`
export const OurpetSlider =styled.div`
    height: 450px;
    width: 300px;
    background-color: #fff;
    margin: 30px 10px;
    border-radius: 30px;
`

export const SliderPostCard =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height: auto;
`

export const ImgCard =styled.img`
    width: auto;
    height: 300px;
    padding: 20px;
    object-fit: scale-down;
`

export const CardName =styled.h2`
    margin-bottom: 10px;
`





