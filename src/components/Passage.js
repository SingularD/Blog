import React from 'react'
import PropTypes from 'prop-types'

const Passage = ({ passageInfo }) => {
  return(
    <div className=" passage mt-5 float-left">
      <h1>{ passageInfo.passageName }</h1>
      <p className="mt-5 font-weight-normal text-justify">{ passageInfo.content }</p>
      <br/>
      <hr/>
    </div>
  )
}

export default Passage