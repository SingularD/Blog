import React from 'react'
import Header from '../components/Header'
import PassageList from '../components/PassageList'
import Tags from '../components/Tags'
import CopyRight from '../components/Copyright'
import { blogInfo, where, passageInfo, items, tags, categories} from "../TextData";


class Home extends React.Component{
  render() {
    return(
      <div className="home">
      <div className="header">
        <Header name={blogInfo.blogName}
                description={blogInfo.description}
                where={where[0]}
                passageInfo={passageInfo}
        />
      </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-7">
            <PassageList items={ items }/>
          </div>
          <div className="col-3">
            <Tags tags={tags} categories={categories}/>
          </div>
        </div>
        <CopyRight blogInfo={blogInfo}/>
      </div>
    )
  }
}

export default Home