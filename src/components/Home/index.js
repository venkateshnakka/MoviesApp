import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Cookies from 'js-cookie'
import TrendingMovies from '../TrendingMovies'

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([])
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
  useEffect(() => {
    getTrendingMovies()
  }, [])
  return (
    <div>
      {trendingMovies.map(eachMovie => (
        <TrendingMovies eachMovie={eachMovie} key={eachMovie.id} />
      ))}
    </div>
  )
}
export default Home
