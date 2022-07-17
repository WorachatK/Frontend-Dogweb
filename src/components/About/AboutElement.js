import styled from "styled-components";

export const AboutContainer = styled.div`
    height: 80vh;
    width: 100%;

    @media (max-width: 800px){
        height: auto;
    }
`
export const AboutWrap = styled.div`
    margin: 0 120px;
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px){
        margin: 50px 20px;
        flex-direction: column;
    }
`
export const AboutImageContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const Img = styled.img`
    width: 100%;
`

export const AboutTextContainer = styled.div`
    flex: 1;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const AboutTextHead = styled.h1`
    font-size: 40px;
    margin-bottom: 20px;
    color: #635e56;

    @media (max-width: 800px) {
        margin: 20px 0;
        
    }
`
export const AboutDesc = styled.p`
    margin-bottom: 20px;
    color: #635e56;
`

