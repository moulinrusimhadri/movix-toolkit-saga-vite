import React from 'react'
import { HeaderStyled,Nav,Links,NavSpan,NavSpanIcon } from '../styledComponents/HeaderStyling';
import { ContentWrapper } from '../styledComponents/ContentWrapper.styled'
import Logo from "../Assets/movix-logo.svg"
import { Img } from '../styledComponents/HeaderStyling';
import {AiOutlineSearch} from "react-icons/ai"

const Header = () => {
  return (
    <HeaderStyled>
        <ContentWrapper>    
            <Nav>
                <Img src={Logo} alt=''/>
                <Links>
                    <NavSpan to="/movies">Movies</NavSpan>
                    <NavSpan>TV Shows</NavSpan>
                    <NavSpanIcon><AiOutlineSearch/></NavSpanIcon>
                </Links>    
            </Nav>    
        </ContentWrapper>
    </HeaderStyled>
    
  )
}

export default Header