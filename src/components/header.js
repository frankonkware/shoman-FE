import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = ({ siteTitle }) => {
  // const oneDay = 24 * 60 * 60 * 1000
  // const currentDate = new Date()
  // const secondDate = new Date(2020, 1, 6)

  // const diffDays = Math.round(Math.abs((secondDate - currentDate) / oneDay))
  return (
    <header
      style={{
        background: `rebeccapurple`,
      }}
    >
      <div className="headerWrapper">
        <h1 style={{ margin: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <div className="headerTitle">{siteTitle}</div>
            </Link>
            <div className="menuItemWrapper">
              {/* authorised user */}
              {/* <Link to="/home" className="menuItem">
              Home
            </Link> */}
              {/* <span className="menuItem">| </span> */}
              {/* {diffDays > 0 ? (
                <Link to="/apply" className="menuItem">
                  Apply
                  <span className="subTitleDescription">
                    {diffDays} More Days
                  </span>
                </Link>
              ) : ( */}
                <Link className="menuItem disabledMenuItem">
                  Apply
                  <span className="subTitleDescription">Closed</span>
                </Link>
              {/* )} */}

              <span className="menuItem" style={{ color: "yellow" }}>
                |{" "}
              </span>
              <Link to="/about" className="menuItem">
                About
              </Link>
              {/* <span className="menuItem">| </span> */}
              {/* <span to="/" className="menuItem">
              Reach Out - <span style={{color:"yellow"}}>shoman@gmail.com</span>
            </span> */}
              {/* <span className="menuItem">| </span> */}

              {/* unathorised user */}
              {/* <Link to="/auth" className="menuItem">
              Login
            </Link>
            <span className="menuItem">| </span>
            <Link to="/apply" className="menuItem">
              Apply <span className="applyingText">As a Mentee</span>
            </Link> */}
            </div>
          </div>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
