import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

export const fetchDatafromApi = async (url,params) => {
   try{
    const {data} = await axios.get(BASE_URL+url,{
        headers:{
            Authorization : "bearer "+TOKEN
        },params
    }) 
        return data
   }catch(err){
        console.log(err);
    return err
   }
}
