import React, { useEffect, useState } from 'react'
import { NavbarContainer,NavbarWrap,NavbarLogoContainer,NavbarLogo,NavbarLogoText,NavbarLinkContainer, NavbarLink,MenuContainer } from './NavbarElement'
import MenuIcon from '@mui/icons-material/Menu';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({handleOpen}) => {

    const [scrollNav,setScrollNav] = useState(false)

    const changNav =()=>{
        if(window.scrollY >= 80 ){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',changNav)
    })

    const toggleHome = () =>{
        scroll.scrollToTop();
    }


  return (
    <NavbarContainer scrollNav={scrollNav}>
        <NavbarWrap>
            <NavbarLogoContainer>
                <NavbarLogo to='' onClick={toggleHome}>
                    Cozy House
                </NavbarLogo>
                <NavbarLogoText>
                    Shelter for pets in Boston
                </NavbarLogoText>
            </NavbarLogoContainer>

            <NavbarLinkContainer>
                <NavbarLink to='about' 
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact='true'
                    offset={-75}
                >
                    About the shelter
                </NavbarLink>
                <NavbarLink to='ourpet'
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact='true'
                    offset={-75}
                >
                    Our pets
                </NavbarLink>
                <NavbarLink to='help'
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact='true'
                    offset={-75}
                >
                    To help the shelter
                </NavbarLink>
                <NavbarLink to='contract'
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact='true'
                    offset={-75}
                >
                    Contacts
                </NavbarLink>
            </NavbarLinkContainer>

            <MenuContainer onClick={handleOpen}>
                <MenuIcon/>
            </MenuContainer>       
        </NavbarWrap>
    </NavbarContainer>
  )
}

export default Navbar