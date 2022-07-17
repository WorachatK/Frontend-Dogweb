import styled from "styled-components";

export const HeadContainer = styled.div`
    position: relative;
    height: 90vh;
    width: 100%;
    background: rgb(138,95,32);
    background: linear-gradient(160deg, rgba(138,95,32,1) 0%, rgba(24,1,1,1) 100%);

    @media (max-width: 800px){
        height: auto;
    }

`
export const HeadWrap= styled.div`
    height: 100%;
    display: flex;
    padding: 0 120px;

    @media (max-width: 800px){
        flex-direction: column;
        padding: 100px 10px 0 10px;
    }
`

export const TextContainer = styled.div`
    flex: 1;
    display: flex;
    color: white;
`
export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding-left: 10px;
`
export const TextHead = styled.h1`
    font-size: 48px;
    margin-bottom: 20px;
`

export const TextDes = styled.p`
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: lighter;
`
export const ImgContainer =styled.div`
    flex: 1;
    height: auto;
    display: flex;
    justify-content: end;
    align-items: flex-end;
    top: 0;
    right: 0;
    width: auto;
`
export const Img = styled.img`
    width: 100%;
    object-fit: scale-down;
`