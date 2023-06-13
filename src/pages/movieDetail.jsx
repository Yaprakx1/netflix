import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { fetchByUrl } from '../app/actions/movieActions';
import { baseImageUrl } from '../components/hero';

const MovieDetail = () => {
const [movieDetail,setMovieDetail]=useState(null)
  
 const {movieId} = useParams()
 useEffect(()=>{
  fetchByUrl(`/movie/${movieId}`)
  .then((res)=>setMovieDetail(res))
 },[]);
 if(movieDetail === null) return "Loading..."
  return (
    <div className='movi-detail row bg-black text-light p-5'>
      <div className='col-md-6 d-flex align-items-center justify-content-center'>
        <img className='img-fluid movie-detail' src={`${baseImageUrl}${movieDetail.poster_path}`} alt="" />
        </div>
      <div className='col-md-6'>
        <h1>{movieDetail.title}</h1>
        <p>{movieDetail.overview}</p>
        <div className='row row-cols-2'>
          <div><p>Cost:{movieDetail.budget}</p>
          <p>Revenue:{movieDetail.revenue}</p>
          <p>Profit:{movieDetail.revenue - movieDetail.budget}</p>
          </div>
          <div>
            <div className='d-flex gap-2'>
              Kategories:
              {movieDetail.genres.map((genre)=> <p className='badge'>{genre.name}</p> )}
            </div>
            <div className='d-flex'>
              Languages:
              {
               movieDetail.spoken_languages.map((lang)=>( <p>{lang.name}</p>  ))
              }
            </div>
            <div>
            Company:
              {
               movieDetail.production_companies.map((comp)=>( <p className='badge bg-warning'>{comp.name}</p>  ))
              }
            </div>
          </div>

        </div>

      </div>
      

    </div>
  )
}

export default MovieDetail;
