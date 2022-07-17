import React from 'react'
import { FooterContainer,FooterWrap,FooterLeaf,FooterCenter,TextHead,TextContract,ContractIcon,ContractText,FooterRight,FooterImage } from './FooterElement'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import dog from '../../image/dog5.png'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>

            <FooterLeaf>
                <TextHead>For questions and suggerstions</TextHead>
                <TextContract>
                    <ContractIcon><EmailIcon/></ContractIcon>
                    <ContractText>email@email.com</ContractText>
                </TextContract>
                <TextContract>
                    <ContractIcon><LocalPhoneIcon/></ContractIcon>
                    <ContractText>+12 345 6789</ContractText>
                </TextContract>
            </FooterLeaf>

            <FooterCenter>
                <TextHead>We are waiting for you visit</TextHead>
                <TextContract>
                    <ContractIcon><LocationOnIcon/></ContractIcon>
                    <ContractText>Boston,Central Street,1st (Entrance from the store)</ContractText>
                </TextContract>
                <TextContract>
                    <ContractIcon><LocationOnIcon/></ContractIcon>
                    <ContractText>London,South Park,19st</ContractText>
                </TextContract>
            </FooterCenter>

            <FooterRight>
                <FooterImage src={dog}></FooterImage>
            </FooterRight>

        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer