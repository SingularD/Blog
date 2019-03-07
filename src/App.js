import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import PassageList from './components/PassageList'
import Tags from './components/Tags'
import CopyRight from './components/Copyright'
import Passage from './components/Passage'

const items = [
  {
    'id': 0,
    'title': 'Hello World!',
    'description': 'Hello World!Hello World!Hello World!Hello World!',
    'date': '2019-02-10'
  },
  {
    'id': 1,
    'title': 'Hello World!',
    'description': 'Hello World!Hello World!Hello World!Hello World!',
    'date': '2019-02-10'
  }
]
const tags = [
  {
    'tagId': 0,
    'tagItem': 'JAVA'
  },
  {
    'tagId': 1,
    'tagItem': "Web"
  }
]
const where = [
  'homePage',
  'passage'
]
const passageInfo = {
  'passageName': 'This is Passage Title',
  'description': 'these are description about this passage',
  'content': '欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，欢迎使用blog，欢迎使用blog，欢迎使用blog，' +
  '欢迎使用blog，'
}
const blogInfo = {
  'blogName': 'lagranmoon',
  'author': 'SingularD',
  'published': 'UESTC',
  'description': '这是一个未完成的博客'
}
const categories = [
  '前端',
  '后端',
  '网络安全',
  '人工智能',
  '爬虫'
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name={blogInfo.blogName}
                description={blogInfo.description}
                where={where[0]}
                passageInfo={passageInfo}
        />
        <div className="row">
          {/*<PassageList items={items}/>*/}
          <Passage passageInfo={passageInfo}/>
          <Tags tags={tags} categories={categories}/>
        </div>

        <CopyRight blogInfo={blogInfo}/>
      </div>
    );
  }
}

export default App;
