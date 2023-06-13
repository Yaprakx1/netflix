import axios from "axios";
import { ActionTypes } from "../actionType";


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODM0MTczZmJkOWMwMWFjMDMxMTFkZTc0ZTdmZDUyOCIsInN1YiI6IjY0N2UzOGNmMGUyOWEyMmJlMjkzNmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vrzvh-Pt7J8ekX87q488yCzCaFnAsEQOM2w5Wv85Hl4'
    }
  };

  axios.defaults.baseURL='https://api.themoviedb.org/3'

  export const getMovies = ()=>(dispatch)=>{
   axios.get('/movie/popular',options)
   .then((res)=>dispatch({
     type:ActionTypes.SET_MOVİES,
     payload:res.data.results
   }));


       
  };

  export const getGenres = ()=>(dispatch)=>{
    axios.get('/genre/movie/list',options)
    .then((res)=>dispatch({
      type:ActionTypes.GET_GENRES,
      payload:res.data.genres
    }));
  };

  //custom hook
   
  export const fetchByUrl =async(url)=>{
  const res =  await axios.get(url,options);
  return (res.data)
  }