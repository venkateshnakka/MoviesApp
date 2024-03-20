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
        <li>Home</li>
        <li>Popular</li>
      </ul>
    </div>
    <div className="header-part2">
      <img
        src="https://res.cloudinary.com/dssfsnedz/image/upload/v1710215797/searchsearch_a7cfzi.png"
        alt="search icon"
      />
      <img
        src="https://res.cloudinary.com/dssfsnedz/image/upload/v1710061557/Avataruser-icon_duq8s5.svg"
        alt="search icon"
      />
    </div>
  </div>
)
export default Header
