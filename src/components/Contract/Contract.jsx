import React from 'react'
import { ContractContainer,ContractWrap,ContractPicCon,ContractPic,ContractTextCon,ContractTextHead,ContractTeaxtName,ContractBank,ContractTextP,BankIcon,BankNumber } from './ContractElement'
import dog from '../../image/dog9.png'
import CreditCardIcon from '@mui/icons-material/CreditCard';

const Contract = () => {
  return (
    <ContractContainer id='contract'>
        <ContractWrap>
            <ContractPicCon>
                <ContractPic src={dog}/>
            </ContractPicCon>
            <ContractTextCon>
                <ContractTextHead>In adddition,you can make a donations</ContractTextHead>
                <ContractTeaxtName>Name of the bank/Type of bank account</ContractTeaxtName>
                <ContractBank>
                  <BankIcon><CreditCardIcon/></BankIcon>
                  <BankNumber>8380 2880 8028 8791 7435</BankNumber>
                </ContractBank>
                <ContractTextP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ad doloribus autem unde possimus quas animi aut sed ea officia, dignissimos veritatis quae accusantium. Iste ex officia quidem. Veritatis, nam!</ContractTextP>
            </ContractTextCon>
        </ContractWrap>
    </ContractContainer>
  )
}

export default Contract