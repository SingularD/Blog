import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ name, description, where, passageInfo }) => {
  return(
    <div className="header">
      <div className="title row justify-content-between">
        <div className="blog-name col-3 mt-3">
          <a className="alert-link" href="#">{name}'s Blog</a>
        </div>
        <div className="title-options col-3 row mt-3">
          <div className="col-4">
            <a className="alert-link" href="#">文章</a>
          </div>
          <div className="col-4">
            <a className="alert-link" href="#">归档</a>
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