import React from 'react'
import Editor from 'for-editor'
import { LineChart, Line, AreaChart,XAxis, YAxis,CartesianGrid,Tooltip,Area} from 'recharts'
import { Router, Route, Link } from  'react-router-dom'

class Admin extends React.Component{
  constructor() {
    super()
    this.state = {
      value: '',
      data: [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 139,
          "amt": 2210
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]
    }
  }
  handleChange(value) {
    this.setState({
      value
    })
  }
  render() {
    const { value } = this.state
    return (
      <div>
        <div className="row justify-content-center mt-5">
          <h1>统计</h1>
        </div>
        <div className="row justify-content-center mt-5 mb-5">
          <AreaChart width={730} height={250} data={this.state.data}
                     margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </div>
        <div>
          <form>
            <div className="form-group">
              <label htmlFor="title">文章标题</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="请输入文章标题"
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">文章分类</label>
              <select
                className="form-control"
                id="category"
                name="category"
              >
                <option>JAVA</option>
                <option>C/C++</option>
                <option>前端</option>
                <option>后端</option>
                <option>移动端</option>
              </select>
            </div>
            <div className="form-group">
              <label>标签</label>
              <div className="row justify-content-between">
                <input className="form-control col-3" type="text" name="tag1"/>
                <input className="form-control col-3" type="text" name="tag2"/>
                <input className="form-control col-3" type="text" name="tag3"/>
              </div>
            </div>
          </form>
          <Editor
            value={value}
            onChange={this.handleChange.bind(this)}
          />
          <div className="row justify-content-center mt-5">
            <button type="button" className="btn btn-primary mr-5">提交</button>
            <button type="button" className="btn btn-danger">退出登录</button>

          </div>
        </div>
      </div>
    )
  }
}

export default Admin