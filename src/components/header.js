import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <h1
      style={{
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {props.title}
      </Link>
    </h1>
  )
}

Header.propTypes = {
    title: PropTypes.string
  };

export default Header
