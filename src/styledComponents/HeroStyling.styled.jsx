import styled  from "styled-components";
import { Button } from "./Button.styled";

export const HeroSection = styled.div`
    width:100%;
    min-height:100vh;
    position:relative;
    padding: 200px 20px 200px 20px;
`
export const HeroBg = styled.div`
    width:100%;
    height:100%;
    & > span{
        img{
            object-fit:fill;
            width:100%;
            height:100%;
            position:absolute;
            z-index:-2;
            top:0;
            left:0;
            opacity:0.5;
        }
    }  
`
export const HeroHeading = styled.h1`
    font-size:4.5rem;
    font-weight:700;

`
export const HeroContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    z-index:2
`;
export const Para = styled.p`
    font-weight:500;
    font-size: 20px;
    
`;
export const SearchBox = styled.form`
    margin-top:20px;
`;
export const InputField = styled.input`
    width:500px;
    padding:15px 15px 15px 15px;
    border:none;
    background:white;
    color:black;
    font-size:15px;
`;
export const SearchButton = styled(Button)`
    background: rgb(251,185,41);
    background: linear-gradient(248deg, rgba(251,185,41,1) 0%, rgba(249,120,9,1) 100%);
    border:none;
    font-size:16px;
    color:white;
`;
