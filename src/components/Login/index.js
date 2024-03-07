import './index.css'

const Login = () => (
  <div className="login-page-bg">
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
)

export default Login
