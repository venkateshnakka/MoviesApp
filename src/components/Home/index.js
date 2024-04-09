import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Cookies from 'js-cookie'
import TrendingMovies from '../TrendingMovies'
import OriginalMovies from '../OriginalMovies'
import Shimmer from '../Shimmer'
import './index.css'

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [originalMovies, setOriginalMovies] = useState([])
  const [randomMovie, setrandomMovie] = useState()
  const getTrendingMovies = async () => {
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'Get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(
      'https://apis.ccbp.in/movies-app/trending-movies',
      options,
    )
    const data = await response.json()
    setTrendingMovies(data.results)
  }
  const getOriginalMovies = async () => {
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'Get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(
      'https://apis.ccbp.in/movies-app/originals',
      options,
    )
    const data = await response.json()

    setOriginalMovies(data.results)
    setrandomMovie(data.results[Math.floor(Math.random() * 10)])
  }
  useEffect(() => {
    getTrendingMovies()
    getOriginalMovies()
  }, [])

  return (
    <div className="home-container">
      <div className="random-poster">
        <img
          src={randomMovie?.poster_path}
          className="randomPoster"
          alt={randomMovie?.title}
        />
      </div>
      <TrendingMovies trendingMovies={trendingMovies} />
      <OriginalMovies trendingMovies={originalMovies} />
    </div>
  )
}

export default Home
