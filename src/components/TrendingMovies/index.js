const TrendingMovies = props => {
  const {eachMovie} = props
  console.log(eachMovie)
  const {title} = eachMovie
  return (
    <div>
      <img src={eachMovie.poster_path} alt={title} />
      <h1>{title}</h1>
    </div>
  )
}
export default TrendingMovies
