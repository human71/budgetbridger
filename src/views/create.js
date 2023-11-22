import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './create.css'

const Create = (props) => {
  return (
    <div className="create-container">
      <Helmet>
        <title>Create - Budget Bridger</title>
        <meta property="og:title" content="Create - Budget Bridger" />
      </Helmet>
      <div className="create-navbar navbar-container">
        <div className="create-max-width max-width">
          <div className="create-container01">
            <Link to="/" className="create-navlink">
              <img alt="image" src="/logo.svg" className="create-image" />
            </Link>
            <div className="create-logo"></div>
          </div>
          <div className="create-links">
            <Link to="/dashboard" className="create-navlink1">
              <div className="create-container02">
                <img alt="image" src="/vector2.svg" className="create-image1" />
                <span className="create-text">Dashboard</span>
              </div>
            </Link>
            <Link to="/create" className="create-navlink2">
              <div className="create-container03">
                <img alt="image" src="/vector3.svg" className="create-image2" />
                <span className="create-text1">Create Expense</span>
              </div>
            </Link>
            <Link to="/" className="create-navlink3">
              <div className="create-container04">
                <img alt="image" src="/vector4.svg" className="create-image3" />
                <span className="create-text2">Logout</span>
              </div>
            </Link>
            <img alt="image" src="/dp-200h.png" className="create-image4" />
          </div>
        </div>
      </div>
      <div className="create-section section-container">
        <div className="create-container05">
          <div className="create-container06"></div>
        </div>
        <div className="create-container07">
          <span className="create-text3">Create Expense</span>
          <span className="create-text4">Create a new expense</span>
          <form
            action="submit"
            method="post"
            enctype="application/x-www-form-urlencoded"
            className="create-form"
          >
            <div className="create-container08">
              <span className="create-text5">Event *</span>
              <input type="text" required className="create-input input" />
            </div>
            <div className="create-container09">
              <span className="create-text6">Number of People *</span>
              <input type="text" required className="create-input1 input" />
            </div>
            <div className="create-container10">
              <div className="create-container11">
                <span className="create-text7">Report Cost *</span>
                <input type="text" required className="create-input2 input" />
              </div>
            </div>
            <Link to="/dashboard" className="create-navlink4 button">
              Save Expense
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
