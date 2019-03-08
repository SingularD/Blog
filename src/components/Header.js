import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({ name, description, where, passageInfo }) => {
  return(
    <div className="header">
      <div className="title row justify-content-between ml-5">
        <div className="blog-name col-3 mt-3">
          <Link className="alert-link header-a" to="/">{name}'s Blog</Link>
        </div>
        <div className="title-options col-3 row mt-3">
          <div className="col-4">
            <Link className="alert-link header-a" to="/">文章</Link>
          </div>
          <div className="col-4">
            <Link className="alert-link header-a" to="/">归档</Link>
          </div>
        </div>
      </div>
      <div className="description">
        <h1>{ where === 'homePage' ? name+'s Blog' : passageInfo.passageName}</h1>
        <p>{ where === 'homePage' ? description : passageInfo.description }</p>
      </div>
    </div>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  where: PropTypes.string.isRequired,
  passageInfo: PropTypes.object.isRequired
}

export default Header