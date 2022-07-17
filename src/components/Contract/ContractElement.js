import styled from "styled-components";

export const ContractContainer = styled.div`
    background-color: #fff0da;
    height: 65vh;

    @media (max-width:800px){
        height: auto;
    }
`
export const ContractWrap = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 100px;

    @media (max-width:800px){
        flex-direction: column;
        padding-bottom: 50px;
    }
`
export const ContractPicCon = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width:800px){
        margin-top: 80px;
    }
`
export const ContractPic = styled.img`
    width: auto;
    object-fit: scale-down;
`
export const ContractTextCon = styled.div`
    flex: 1;
    color: #635e56;
`
export const ContractTextHead = styled.h1`
    margin-bottom: 30px;
`
export const ContractTeaxtName = styled.span`
`
export const ContractBank = styled.div`
    display: flex;
    align-items: center;
    background-color: orange;
    padding: 10px;
    border-radius: 30px;
    width:230px;
    margin: 10px 0 30px 0;
`

export const BankIcon = styled.div`
    margin: 0 10px;
`
export const BankNumber = styled.h4``
export const ContractTextP = styled.p`
    max-width: 500px;
`
