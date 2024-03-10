import './index.css'
import Header from '../Header'

const Login = () => (
  <div>
    <Header />
    <div className="login-page-bg">
      {/* <img
        src="https://res.cloudinary.com/dssfsnedz/image/upload/v1710058589/movies-icon_pdyem5.svg"
        alt="MoviesApp"
        className="movies-icon"
      /> */}
      <div className="login-card">
        <form className="login-form">
          <h2>Login</h2>
          <label htmlFor="user-name">USER NAME</label>
          <br />
          <input type="text" id="user-name" />
          <br />
          <label htmlFor="password">PASSWORD</label>
          <br />
          <input type="password" id="password" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
)

export default Login
