import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.div`
    height: 60px;
    background: rgba(0,0,0,0.25);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    position:fixed;
    width:100%;
    padding-top:10px;
    z-index:2;
`

export const Img = styled.img`
    font-size:20px;
`
export const Nav = styled.nav`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

`

export const Links = styled.ul`
    display:flex;
    gap:30px;   
    padding-top:5px;
   $:hover{
    // color:;
   } 
`

export const NavSpan = styled(NavLink)`
    cursor:pointer;    
    text-decoration:none;
    color:white;
`
export const NavSpanIcon = styled(NavSpan)`
   font-size:20px;
`