import React, {Component} from 'react'
import Slider from 'react-slick'
import './index.css'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

/* Add css to your project */

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}

class OriginalMovies extends Component {
  renderSlider = () => {
    const {trendingMovies} = this.props
    return (
      <Slider {...settings}>
        {trendingMovies.map(movie => {
          const {title, id} = movie
          return (
            <div className="slick-item" key={id}>
              <img
                className="logo-image"
                src={movie.poster_path}
                alt="company logo"
              />
            </div>
          )
        })}
      </Slider>
    )
  }

  render() {
    return (
      <div className="originals-container">
        <p className="heading">Originals</p>
        <div className="slick-container">{this.renderSlider()}</div>
      </div>
    )
  }
}

export default OriginalMovies
