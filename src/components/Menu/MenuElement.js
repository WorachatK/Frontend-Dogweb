import styled from "styled-components";
import { Link } from "react-scroll";

export const MenuContainer = styled.div` 
    position: fixed;
    top: 0;
    left: 0;
    background-color: burlywood;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({ openMenu })=> (openMenu ? '100%' : '0')};
    top: ${({ openMenu })=> (openMenu ? '0' : '-100%')};
    transition: 0.3s ease-in-out;
    z-index:99;
`
export const MenuWrap = styled.div` 

`
export const CloseContainer = styled.div`
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    margin: 20px;
    cursor: pointer;

`
export const MenuLinkContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const MenuLink = styled(Link)` 
    margin: 20px 0;
    cursor: pointer;
    font-size: xx-large;
    transition: all 0.3s ease;

    &:hover {
        color: white;
    }
`
