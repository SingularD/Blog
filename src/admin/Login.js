import React from 'react'
import { Redirect } from 'react-router-dom'


class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      username: 'lisongwei',
      password: '123',
      inputUsername: '',
      inputPassword: '',
      jump: false
    }
  }
  getInputValue = (e) => {
    if (e.target.name === 'username') {
      this.setState({ inputUsername: e.target.value })
    } else {
      this.setState({ inputPassword: e.target.value })
    }
  }
  check = () => {
    const a = this.state
    if (a.username === a.inputUsername && a.password === a.inputPassword) {
      this.setState({ jump: true })
    }else {
      alert('密码错误！！！')
    }
  }
  render() {
    if ( this.state.jump ) {
      return <Redirect push to='/admin'/>
    }
    return(
      <div className='row justify-content-center mt-5'>
        <form className="w-50 text-center">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="text"
                   className="form-control"
                   id="exampleInputEmail1"
                   aria-describedby="emailHelp"
                   placeholder="Enter username"
                   name="username"
                   onChange={this.getInputValue}
            />
            <small id="emailHelp" className="form-text text-muted">
              呀，被你发现了
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password"
                   className="form-control"
                   id="exampleInputPassword1"
                   placeholder="Password"
                   name="password"
                   onChange={this.getInputValue}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.check}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default Login