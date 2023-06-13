import React from 'react'
import { useEffect,useState } from 'react'
import { fetchByUrl } from '../app/actions/movieActions'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { baseImageUrl } from './hero';
import { Link } from 'react-router-dom';
import MovieDetail from '../pages/movieDetail';



const ListMovie = ({genre}) => {

    const [movies,setMovies]=useState([])

    useEffect(()=>{
     fetchByUrl(`/discover/movie?with_genres=${genre.id}`)
     .then((res)=>setMovies(res.results)) ;
    },[])
  return (
    <div className='bg-dark text-light p-4'>   
    <h1>{genre.name}</h1>
    <Splide options={{autoWidth:true,pagination:false, gap:10 }}>  
    {movies.map((movie)=> (<SplideSlide>
     <Link to={`/movie/${movie.id}`}> 
        <img className='film' src={`${baseImageUrl}${movie.poster_path}`} alt="" />
        </Link>
        </SplideSlide>
         ))}
        </Splide>
    </div>
  );
}

export default ListMovie;