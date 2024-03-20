import React, {useState} from 'react'
import Cookies from 'js-cookie'
import './index.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginerror, setLoginerror] = useState('')
  const [errorCondtion, setErrorCondition] = useState(false)

  const onSubmitsuccess = token => {
    Cookies.set('jwt_token', token, {expires: 30})
  }

  const onSumbitfailure = errorMsg => {
    setErrorCondition(true)
    setLoginerror(errorMsg)
  }
  const submitForm = async event => {
    event.preventDefault()
    const useDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(useDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      onSubmitsuccess(data.jwt_token)
    } else {
      onSumbitfailure(data.error_msg)
    }
  }
  return (
    <div>
      <div className="login-page-bg">
        <img
          src="https://res.cloudinary.com/dssfsnedz/image/upload/v1710058589/movies-icon_pdyem5.svg"
          alt="login website logo"
          className="movies-icon"
        />
        <div className="login-card">
          <form className="login-form" onSubmit={submitForm}>
            <h2>Login</h2>
            <label htmlFor="user-name">USER NAME</label>
            <br />
            <input
              type="text"
              id="user-name"
              onChange={event => {
                setUsername(event.target.value)
              }}
            />
            <br />
            <label htmlFor="password">PASSWORD</label>
            <br />
            <input
              type="password"
              id="password"
              onChange={event => {
                setPassword(event.target.value)
              }}
            />
            <br />
            {errorCondtion && <p className="loginError">{loginerror}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
