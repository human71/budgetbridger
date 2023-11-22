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
            <a
              href="https://#"
              target="_blank"
              rel="noreferrer noopener"
              className="login-link"
            >
              <img alt="image" src="/vector1.svg" className="login-image1" />
            </a>
            <Link to="/" className="login-text">
              Home
            </Link>
            <Link
              to="/login"
              className="login-navlink1 button-secondary button"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
      <div className="login-section section-container">
        <div className="login-container1">
          <div className="login-container2"></div>
        </div>
        <div className="login-container3">
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
            <Link to="/dashboard" className="login-navlink2 button">
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
              className="login-link1"
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
