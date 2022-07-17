import styled from "styled-components";

export const HelpUsContainer = styled.div`
    height: 85vh;

    @media (max-width: 800px){
        height: auto;
    }
`
export const HelpUsWrap = styled.div`
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const HelpUsHead = styled.div`
    color: #635e56;
    padding-bottom: 30px;
`
export const HelpUsHeadText = styled.h1`

`
export const HelpUsIconContainer = styled.div`
    margin-top: 50px;
`
export const HelpUsParent = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-column-gap: 50px;
    grid-row-gap: 10px;

    @media (max-width: 800px){
        grid-template-columns: repeat(3,1fr);
    }

    @media (max-width: 480px){
        grid-template-columns: repeat(2,1fr);
    }
`
export const HelpUsGrid = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
`
export const LogoIcon = styled.div`
    color: #FFDEAD;
    font-size: 50px;
`
export const IconText = styled.div`

    color: #635e56;
`


