import styled from "styled-components";
import { Link } from "react-scroll";

export const NavbarContainer = styled.div`
    background: ${({scrollNav})=>(scrollNav ? 'rgb(138,95,32)' : 'transparent')};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 10;
    position: fixed;
    transition: all 0.3s ease;
`
export const NavbarWrap = styled.div`
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    color: white;
    margin: 10px 0;
`
export const NavbarLogoContainer = styled.div`

`
export const NavbarLogo = styled(Link)`
    font-size: 38px;
    cursor: pointer;

`
export const NavbarLogoText = styled.p`

`

export const NavbarLinkContainer = styled.div`
    @media (max-width: 800px) {
        display: none;
    }
`

export const NavbarLink = styled(Link)`
    cursor: pointer;
    margin-left: 2vw;

    &.active {
        border-bottom: 3px solid oldlace;
    }
`
export const MenuContainer =styled.div`
    display: none;

    @media (max-width: 800px){
        display: block;
        cursor: pointer;
    }
`