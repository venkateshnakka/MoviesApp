import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="header-part1">
      <img
        src="https://res.cloudinary.com/dssfsnedz/image/upload/v1710058589/movies-icon_pdyem5.svg"
        alt="MoviesApp"
        className="movies-icon"
      />
      <ul className="nav-items">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/popular">
          <li>Popular</li>
        </Link>
      </ul>
    </div>
    <div className="header-part2">
      <img
        src="https://res.cloudinary.com/dssfsnedz/image/upload/v1710215797/searchsearch_a7cfzi.png"
        alt="search icon"
      />
      <img
        src="https://res.cloudinary.com/dssfsnedz/image/upload/v1710061557/Avataruser-icon_duq8s5.svg"
        alt="Avatar icon"
        className="avatar"
      />
    </div>
  </div>
)
export default Header
