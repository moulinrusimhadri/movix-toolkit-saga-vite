import React, { useEffect, useState } from 'react'
import { ContentWrapper } from '../styledComponents/ContentWrapper.styled';
import { HeroSection,Para,SearchBox,SearchButton,InputField,HeroHeading, HeroContent, HeroBg } from '../styledComponents/HeroStyling.styled';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import MyImage from './LazyLoadImg';

const Hero = () => {
  const [background,setBackground] = useState("")
  const [searchQuery,setSearchQuery] = useState("");
  const navigate = useNavigate();
  const imageDomain = import.meta.env.VITE_APP_IMAGE_DOMAIN; 

  const {data,loading} = useFetch("/movie/upcoming")
    console.log(data,loading)
  useEffect(()=>{
      const bg = imageDomain+data?.data?.results[Math.floor(Math.random()*20)].backdrop_path;
      setBackground(bg)
      console.log(bg)
  },[data])

  const searchQueryHandler = (e)=>{
      if(e.key==='Enter' && searchQuery.length>0){
        navigate(`/search/${searchQuery}`)
      }
  }


  return (
    <HeroSection>
      {!loading && <HeroBg><MyImage src={background}/> </HeroBg>}
      <ContentWrapper>
        <HeroContent>
          <HeroHeading>Welcome.</HeroHeading>
          <Para>Millions of movies, TV shows and people to discover. Explore now.</Para>
          <SearchBox>
            <InputField onKeyUp={searchQueryHandler} type="text" value={searchQuery} placeholder="Search for a movie or TV show..." onChange={e=>setSearchQuery(e.target.value)}/>
            <SearchButton>Search</SearchButton>
          </SearchBox>
        </HeroContent>
      </ContentWrapper>
    </HeroSection>
  )
}

export default Hero