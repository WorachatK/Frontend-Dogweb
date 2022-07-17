import styled from "styled-components";

export const FooterContainer = styled.div`
    background: rgb(138,95,32);
    background: linear-gradient(160deg, rgba(138,95,32,1) 0%, rgba(24,1,1,1) 100%);
    height: 30vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px){
        height: auto;
    }
`
export const FooterWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    @media (max-width: 800px){
        flex-direction: column;
        margin-top: 50px;
    }
`
export const FooterLeaf = styled.div`
    width: 100%;
    margin-right: 10px;
    @media (max-width: 800px){
        margin-bottom: 50px;
    }
`
export const FooterCenter = styled.div`
    width: 100%;
`
export const TextHead = styled.h2`
    margin-bottom: 15px;
    color: white;

`
export const TextContract = styled.div`
    display: flex;
    align-items: center;
`
export const ContractIcon = styled.div`
    margin-right: 10px;
`

export const ContractText = styled.div`
    color: white;

`
export const FooterRight = styled.div`

    width: 100%;
    height: 100%;
`
export const FooterImage = styled.img`
    width: 100%;
    height: 95%;
    object-fit: scale-down;
`
