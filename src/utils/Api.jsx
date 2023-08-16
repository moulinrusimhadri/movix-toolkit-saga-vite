import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN = import.meta.env.VITE_APP_TMDB_ACCESS_TOKEN;

const fetchDataFromApi = async (url,params)=>{
    // console.log(url)
       const data = axios.get(BASE_URL+url,{
            headers:{
                Authorization: "bearer "+API_TOKEN
            },params
        })
        // console.log(data)
        return data
    }


export default fetchDataFromApi;