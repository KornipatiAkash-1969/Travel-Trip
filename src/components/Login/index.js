import {useState} from 'react'

import {withRouter, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa'

import './index.css'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorDetails, setErrorDetails] = useState({
    showErrorMsg: false,
    errorMsg: '',
  })

  const onChangeUsername = event => {
    setUsername(event.target.value)
    if (errorDetails.showErrorMsg) {
      setErrorDetails({showErrorMsg: false, errorMsg: ''})
    }
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
    if (errorDetails.showErrorMsg) {
      setErrorDetails({showErrorMsg: false, errorMsg: ''})
    }
  }

  const onTogglePassword = () => {
    setPasswordVisible(prevState => !prevState)
  }

  const onSubmitSuccess = jwtToken => {
    const {history} = props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')

    setErrorDetails({
      showErrorMsg: false,
      errorMsg: '',
    })
  }

  const onSubmitFailure = errorMsg => {
    setErrorDetails(prevState => ({
      ...prevState,
      showErrorMsg: true,
      errorMsg,
    }))
  }

  const onSubmitLoginForm = async event => {
    event.preventDefault()
    setIsSubmitted(true)
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }

    setUsername('')
    setPassword('')
    setPasswordVisible(false)
  }

  const showPasswordIcon = <FaRegEye className="icon" />
  const hidePasswordIcon = <FaRegEyeSlash className="icon" />

  const isUsernameError =
    (isSubmitted && username.trim() === '') || errorDetails.showErrorMsg
  const isPasswordError =
    (isSubmitted && password.trim() === '') || errorDetails.showErrorMsg

  const token = Cookies.get('jwt_token')

  if (token !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="bg-container">
      <div className="login-container">
        <h1 className="travel-trip-heading">Travel Trip</h1>
        <form className="login-form" onSubmit={onSubmitLoginForm}>
          <label htmlFor="username" className="input-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            className={`input ${isUsernameError ? 'input-error' : ''}`}
            onChange={onChangeUsername}
            value={username}
          />
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <div
            className={`password-container ${
              isPasswordError ? 'input-error' : ''
            }`}
          >
            <input
              id="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              className="input-password"
              onChange={onChangePassword}
              value={password}
            />
            <button
              type="button"
              className="icon-button"
              onClick={onTogglePassword}
              data-testid="show-password"
            >
              {passwordVisible ? showPasswordIcon : hidePasswordIcon}
            </button>
          </div>
          {errorDetails.showErrorMsg && (
            <p className="error-message">{errorDetails.errorMsg}</p>
          )}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default withRouter(Login)
