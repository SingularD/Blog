import React from 'react'
import PropTypes from 'prop-types'

class Comments extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      url: '',
      content: ''
    }
  }
  handleInputChange = (e) => {

    const target = e.target
    const value = target.value
    const formName = target.name
    this.setState({
      [formName]: value
    })
  }
  handleSubmit = () => {
    this.props.getInputValue(this.state.name, this.state.email, this.state.url, this.state.content)
  }
  render() {
    return(
      <div className="comment w-75">
        <form>
          <div className="row mt-3 justify-content-between">
            <div className="col-3 comments">
              <input type="text"
                     name="name"
                     className="form-control"
                     placeholder="昵称*(必填)"
                     onChange={ this.handleInputChange }
              />
            </div>
            <div className="col-3">
              <input type="email"
                     name="email"
                     className="form-control"
                     placeholder="邮箱*(选填)"
                     onChange={ this.handleInputChange }
              />
            </div>
            <div className="col-3">
              <input type="text"
                     name="url"
                     className="form-control"
                     placeholder="网址*(选填)"
                     onChange={ this.handleInputChange }
              />
            </div>
          </div>
          <div className="comments form-group mt-3">
            {/*<label htmlFor="commentContent">*/}
            {/*评论区：*/}
            {/*</label>*/}
            <textarea className="form-control"
                      name="content"
                      id="commentContent"
                      placeholder="赶快评论一个吧"
                      onChange={ this.handleInputChange }
            >
          </textarea>
          </div>
          <button type="button" className="btn btn-secondary float-right comments mt-3 mb-3"
                  onClick={ this.handleSubmit }
          >
            提交
          </button>
        </form>
      </div>
    )
  }
}

export default Comments