import React from 'react'
import PropTypes from 'prop-types'

const PassageList = ({ items }) => {
  return(
    <ul className="list-group w-50 d-flex">
      {
        items.map( (item) => (
          <li className="list-group-item d-flex
           align-items-center border-top-0
            border-left-0 border-right-0
            mt-4"
          key={item.id}
          >
            <div>
              <h3>
                <a className="alert-link passage-title"
                   href="#">{ item.title }</a>
              </h3>
              <p>
                <a href="#">{ item.description }</a>
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