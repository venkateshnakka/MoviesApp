import React, {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([])

  const getPopularMovies = async () => {
    try {
      const jwtToken = Cookies.get('jwt_token')
      const options = {
        method: 'get',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
      const response = await fetch(
        'https://apis.ccbp.in/movies-app/popular-movies',
        options,
      )
      const data = await response.json()
      setPopularMovies(data.results)
      console.log(data.results)
    } catch (err) {
      console.log(err.message)
    }
  }
  useEffect(() => {
    getPopularMovies()
  }, [])
  if (popularMovies.length === 0) {
    return (
      <div className="products-loader-container">
        <Loader type="ThreeDots" color="#fff" height="50" width="50" />
      </div>
    )
  }
  return (
    <div className="popular-movies-container">
      <div className="container">
        <div className="row">
          {popularMovies.map(eachMovie => (
            <div key={eachMovie.id} className="col-md-4 col-lg-3 mb-3">
              <img
                src={eachMovie?.poster_path}
                className="popular-movie-poster rounded"
                alt={eachMovie?.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Popular
