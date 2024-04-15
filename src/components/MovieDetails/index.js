import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const MovieDetails = () => {
  const [movieItem, setMovieItem] = useState([])
  const params = useParams()
  const path = params.id
  const getMovieItemDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/movies-app/movies/${path}`,
      options,
    )
    const movieData = await response.json()
    setMovieItem(movieData.movie_details)
    console.log(movieData.movie_details)
  }
  useEffect(() => {
    getMovieItemDetails()
  }, [])
  console.log(path)
  return (
    <div>
      <div className="movie-banner-container">
        <img
          src={movieItem?.backdrop_path}
          alt={movieItem?.title}
          className="movie-banner"
        />
        <div className="banner-content-container">
          <h1>{movieItem?.title}</h1>

          <div className="d-flex flex-row">
            <p>{`${Math.floor(movieItem?.runtime / 60)}h ${
              movieItem?.runtime % 60
            }m`}</p>
            <p className="ms-4">
              {new Date(movieItem?.release_date).getFullYear()}
            </p>
          </div>

          <p>{movieItem?.overview}</p>
          <button className="btn bg-white rounded">Play</button>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row sub-containers">
          <div className="col-lg-3">
            <p className="movie-details-headings">Genres</p>
            {movieItem?.genres?.map(genre => (
              <p>{genre.name}</p>
            ))}
          </div>
          <div className="col-lg-3">
            <p className="movie-details-headings">Audio Available</p>
            {movieItem?.spoken_languages?.map(eachLanguage => (
              <p>{eachLanguage?.english_name}</p>
            ))}
          </div>
          <div className="col-lg-3">
            <p className="movie-details-headings">Rating Count</p>
            <p>{movieItem?.vote_count}</p>
            <p className="movie-details-headings">Rating Average</p>
            <p>{movieItem?.vote_average}</p>
          </div>
          <div className="col-lg-3">
            <p className="movie-details-headings">Budget</p>
            <p>{movieItem?.budget}</p>
            <p className="movie-details-headings">Release Date</p>
            <p>{movieItem?.release_date}</p>
          </div>
        </div>
        <div className="row">
          <h4 className="mt-5">More like this</h4>

          {movieItem?.similar_movies?.map(similarMovie => (
            <div key={similarMovie.id} className="col-md-4 col-lg-3 mb-3">
              <img
                className="similar-movie"
                src={similarMovie?.poster_path}
                alt={similarMovie.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default MovieDetails
