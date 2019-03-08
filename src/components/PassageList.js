import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const PassageList = ({ items }) => {
  return(
    <ul className="list-group d-flex">
      {
        items.map( (item) => (
          <li className="list-group-item d-flex
           align-items-center border-top-0
            border-left-0 border-right-0
            mt-4"
          key={item.id}
          >
            <div>
              <h3 className="passage-title">
                <Link to='/Article' className="alert-link passageList-a">
                  { item.title }
                   </Link>
              </h3>
              <p>
                <Link to="/" className="alert-link passageList-a">
                  { item.description }
                  </Link>
              </p>
              <p>
                { item.date }
              </p>
            </div>
          </li>
          ))
      }
    </ul>
  )
}

PassageList.propTypes = {
  items: PropTypes.array.isRequired
}

export default PassageList