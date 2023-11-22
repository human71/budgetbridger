import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Budget Bridger</title>
        <meta property="og:title" content="Login - Budget Bridger" />
      </Helmet>
      <div className="login-navbar navbar-container">
        <div className="max-width">
          <div className="login-logo">
            <Link to="/" className="login-navlink">
              <img alt="image" src="/logo.svg" className="login-image" />
            </Link>
          </div>
          <div className="login-links">
            <Link to="/" className="login-navlink1">
              <div className="login-container1">
                <img alt="image" src="/vector1.svg" className="login-image1" />
                <span className="login-text">Home</span>
              </div>
            </Link>
            <Link
              to="/login"
              className="login-navlink2 button-secondary button"
            >
              Log in
            </Link>
          </div>
          <div className="login-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="login-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="login-section section-container">
        <div className="login-container2">
          <div className="login-container3"></div>
        </div>
        <div className="login-container4">
          <span className="login-text1">Sign In</span>
          <span className="login-text2">
            Please login with your Mathworks credentials to continue
          </span>
          <form
            action="submit"
            method="post"
            enctype="application/x-www-form-urlencoded"
            className="login-form"
          >
            <input
              type="text"
              required
              placeholder="Email"
              className="login-input input"
            />
            <input
              type="password"
              required
              minlength="8"
              placeholder="Password"
              className="login-textinput input"
            />
            <Link to="/dashboard" className="login-navlink3 button">
              LOGIN
            </Link>
          </form>
          <span className="login-text3">
            <span>
              Forgot password? Contact
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://mathworks.com"
              target="_blank"
              rel="noreferrer noopener"
              className="login-link"
            >
              Adminstration
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
