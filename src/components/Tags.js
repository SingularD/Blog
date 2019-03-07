import React from 'react'
import PropTypes from 'prop-types'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'

const Tags =  ({ tags, categories }) => {
  return (
    <ul className="list-group list-group-flush d-flex tags mt-5 w-25">
      <li className="list-group-item border-bottom border-top">
        <div>
          {tags.map((tag) => (
            <span className="hover-grey badge badge-pill badge-secondary mr-2"
                  key={tag.tagId}
            >
              { tag.tagItem }
            </span>
          ))}
        </div>
      </li>
      <li className="list-group-item border-bottom">
        <p>categories:</p>
        <ul className="list-group">
          {
            categories.map(( category ) => (
              <li className="list-group-item border-0" key={category}>
                <a href="#" className="alert-link">
                  {category}
                </a>
              </li>
            ))
          }
        </ul>
      </li>
      <li className="list-group-item border-bottom">
        <h5>ABOUT ME</h5>
        <br/>
        <LogoGithub className="mr-3 hover-grey" fontSize="30px" color="grey"/>
        <LogoTwitter className="hover-grey" fontSize="30px" color="grey"/>
      </li>
      <li className="list-group-item">
        <h5>FRIENDS</h5>
      </li>
    </ul>
  )
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
}

export default Tags