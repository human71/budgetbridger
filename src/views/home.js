import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Component1 from '../components/component1'
import AppComponent from '../components/component'
import Component3 from '../components/component3'
import Component2 from '../components/component2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Budget Bridger</title>
        <meta property="og:title" content="Budget Bridger" />
      </Helmet>
      <div className="home-navbar navbar-container">
        <div className="max-width">
          <div className="home-logo">
            <Link to="/" className="home-navlink">
              <img alt="image" src="/logo.svg" className="home-image" />
            </Link>
          </div>
          <div className="home-links">
            <a
              href="https://#"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              <img alt="image" src="/vector1.svg" className="home-image1" />
            </a>
            <Link to="/" className="home-text">
              Home
            </Link>
            <Link to="/login" className="home-navlink1 button-secondary button">
              Log in
            </Link>
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="home-headbody section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <h1 className="home-text01">
              <span className="home-text02">Welcome to</span>
              <span className="home-text03">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text04">BudgetBridger</span>
              <br className="home-text05"></br>
              <span className="home-text06">
                Bridging your
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text07">Finances</span>
            </h1>
            <span className="home-text08">
              Empower your financial journey with BudgetBridger - Where managing
              budget together was never that easy!
            </span>
            <div className="home-container1">
              <Link
                to="/login"
                className="home-navlink2 button-secondary button bg-transparent"
              >
                Let&apos;s Get Started!
              </Link>
            </div>
          </div>
          <img alt="image" src="/homebg-700w.png" className="home-hero-image" />
        </div>
      </div>
      <div className="home-features section-container">
        <div className="home-features1">
          <h1 className="home-text09">
            <span>Our Features</span>
            <br></br>
          </h1>
          <span className="home-text12">
            BudgetBridger is your ultimate financial companion for managing
            busgets. Explore the powerful features designed to simplify budget
            management and enhance your financial control.
          </span>
          <div className="home-container2">
            <Component1 rootClassName="rootClassName"></Component1>
            <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
            <Component3 rootClassName="component3-root-class-name2"></Component3>
            <Component2 rootClassName="component2-root-class-name"></Component2>
          </div>
        </div>
      </div>
      <div className="home-footer section-container">
        <footer className="home-footer1">
          <span className="home-text13">
            © 2023 Budget Bridger, All Rights Reserved.
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Home
