import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import Cookies from 'js-cookie'

const Home = () => {
  const getTrendingMovies = async () => {
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'Get',
    }
    const response = await fetch(
      'https://apis.ccbp.in/movies-app/trending-movies',
      options,
    )
    const data = await response.json()
    console.log(data)
  }
  useEffect(getTrendingMovies())
  return (
    <div>
      <h1>This is Home section</h1>
    </div>
  )
}
export default Home
