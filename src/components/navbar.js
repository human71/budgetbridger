import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-navbar navbar-container ${props.rootClassName} `}>
      <div className="navbar-max-width max-width">
        <div className="navbar-container">
          <Link to="/" className="navbar-navlink">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="navbar-image"
            />
          </Link>
          <div className="navbar-logo"></div>
        </div>
        <div className="navbar-links">
          <Link to="/" className="navbar-navlink1">
            <div className="navbar-container1">
              <img
                alt={props.image_alt2}
                src={props.image_src2}
                className="navbar-image1"
              />
              <span className="navbar-text">{props.Text}</span>
            </div>
          </Link>
          <Link to="/create" className="navbar-navlink2">
            <div className="navbar-container2">
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                className="navbar-image2"
              />
              <span className="navbar-text1">{props.Text1}</span>
            </div>
          </Link>
          <Link to="/" className="navbar-navlink3">
            <div className="navbar-container3">
              <img
                alt={props.image_alt4}
                src={props.image_src4}
                className="navbar-image3"
              />
              <span className="navbar-text2">{props.Text2}</span>
            </div>
          </Link>
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="navbar-image4"
          />
        </div>
        <div className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon">
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  Text2: 'Logout',
  image_src4: '/vector4.svg',
  image_alt2: 'image',
  image_alt1: 'image',
  image_alt3: 'image',
  rootClassName: '',
  image_src3: '/vector3.svg',
  image_alt4: 'image',
  Text: 'Dashboard',
  Text1: 'Create Expense',
  image_src1: '/dp-200h.png',
  image_src2: '/vector2.svg',
  image_alt: 'image',
  image_src: '/logo.svg',
}

Navbar.propTypes = {
  Text2: PropTypes.string,
  image_src4: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt3: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt4: PropTypes.string,
  Text: PropTypes.string,
  Text1: PropTypes.string,
  image_src1: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Navbar
