import React from 'react'
import { MenuContainer,MenuWrap,MenuLink,CloseContainer,MenuLinkContainer } from './MenuElement'
import CloseIcon from '@mui/icons-material/Close';

const Menu = ({openMenu ,handleOpen}) => {
  return (
    <MenuContainer openMenu={openMenu}>
        
        <MenuWrap>

            <CloseContainer onClick={handleOpen}>
                <CloseIcon sx={{fontSize:"2.5rem"}}/>
            </CloseContainer>

            <MenuLinkContainer>
                <MenuLink to='about'
                  onClick={handleOpen}
                  smooth={true} 
                  duration={500} 
                  spy={true}
                  exact='true'
                  offset={-75}
                >
                  About the shelter
                </MenuLink>
                <MenuLink to='ourpet'
                  onClick={handleOpen}
                  smooth={true} 
                  duration={500} 
                  spy={true}
                  exact='true'
                  offset={-75}
                >
                  Our pets
                </MenuLink>
                <MenuLink to='help'
                  onClick={handleOpen}
                  smooth={true} 
                  duration={500} 
                  spy={true}
                  exact='true'
                  offset={-75}
                >
                  To help the shelter
                </MenuLink>
                <MenuLink to='contract'
                  onClick={handleOpen}
                  smooth={true} 
                  duration={500} 
                  spy={true}
                  exact='true'
                  offset={-75}
                >
                  Contacts
                </MenuLink>
            </MenuLinkContainer>
            
        </MenuWrap>

    </MenuContainer>
  )
}

export default Menu