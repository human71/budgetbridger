import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './dashboard.css'

const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard - Budget Bridger</title>
        <meta property="og:title" content="Dashboard - Budget Bridger" />
      </Helmet>
      <div className="dashboard-navbar navbar-container">
        <div className="dashboard-max-width max-width">
          <div className="dashboard-container01">
            <Link to="/" className="dashboard-navlink">
              <img alt="image" src="/logo.svg" className="dashboard-image" />
            </Link>
          </div>
          <div className="dashboard-links">
            <Link to="/" className="dashboard-navlink1">
              <div className="dashboard-container02">
                <img
                  alt="image"
                  src="/vector2.svg"
                  className="dashboard-image1"
                />
                <span className="dashboard-text">Dashboard</span>
              </div>
            </Link>
            <Link to="/create" className="dashboard-navlink2">
              <div className="dashboard-container03">
                <img
                  alt="image"
                  src="/vector3.svg"
                  className="dashboard-image2"
                />
                <span className="dashboard-text01">Create Expense</span>
              </div>
            </Link>
            <Link to="/" className="dashboard-navlink3">
              <div className="dashboard-container04">
                <img
                  alt="image"
                  src="/vector4.svg"
                  className="dashboard-image3"
                />
                <span className="dashboard-text02">Logout</span>
              </div>
            </Link>
            <img alt="image" src="/dp-200h.png" className="dashboard-image4" />
          </div>
          <div className="dashboard-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="dashboard-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="dashboard-section section-container">
        <div className="dashboard-container05">
          <div className="dashboard-container06">
            <div className="dashboard-container07">
              <div className="dashboard-container08">
                <div className="dashboard-container09">
                  <img
                    alt="image"
                    src="/external/available.svg"
                    className="dashboard-image5"
                  />
                  <div className="dashboard-container10">
                    <span className="dashboard-text03">Available Budget</span>
                    <span className="dashboard-text04">
                      <span>₹</span>
                      <span>20,000</span>
                    </span>
                  </div>
                </div>
                <div className="dashboard-container11">
                  <img
                    alt="image"
                    src="/expense.svg"
                    className="dashboard-image6"
                  />
                  <div className="dashboard-container12">
                    <span className="dashboard-text07">Total Spent</span>
                    <span className="dashboard-text08">₹80,000</span>
                  </div>
                </div>
                <div className="dashboard-container13">
                  <img
                    alt="image"
                    src="/total.svg"
                    className="dashboard-image7"
                  />
                  <div className="dashboard-container14">
                    <span className="dashboard-text09">Total Budget</span>
                    <span className="dashboard-text10">₹20,000</span>
                  </div>
                </div>
              </div>
              <div className="dashboard-container15">
                <img
                  alt="image"
                  src="/uilrefresh.svg"
                  className="dashboard-image8"
                />
                <span className="dashboard-text11">Create Expense</span>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-container16">
          <div className="dashboard-container17">
            <div className="dashboard-container18">
              <div className="dashboard-container19"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
