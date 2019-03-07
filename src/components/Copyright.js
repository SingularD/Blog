import React from 'react'
import PropTypes from 'prop-types'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'

const Copyright = ({ blogInfo }) => {
  return(
    <div className="mt-5">
      <div className="row justify-content-center w-100">
        <LogoGithub className="ml-5 mr-3 hover-grey col-1" fontSize="50px" color="grey"/>
        <LogoTwitter className="hover-grey col-1" fontSize="50px" color="grey"/>
      </div>
      <div className="mt-3">
        <p>Copyright © { blogInfo.blogName }'s Blog 2019
          <br/>
          Theme by { blogInfo.author } |
          Published with { blogInfo.published }
        </p>
      </div>
    </div>
  )
}

Copyright.propTypes = {
  blogInfo: PropTypes.object.isRequired
}

export default Copyright