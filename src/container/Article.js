import React from 'react'
import Header from '../components/Header'
import Tags from '../components/Tags'
import CopyRight from '../components/Copyright'
import Passage from '../components/Passage'
import Comments from '../components/Comments'
import CommentList from '../components/CommentList'
import {blogInfo, categories, passageInfo, tags, where, commentList} from "../TextData";


class Article extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    alert(this.props.match.params.title)
  }
  render(){
    return(
      <div className="Article">
        <div className="header">
          <Header name={blogInfo.blogName}
                  description={blogInfo.description}
                  where={where[1]}
                  passageInfo={passageInfo}
          />
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-7">
            <Passage passageInfo={passageInfo}/>
            <Comments/>
            <CommentList commentList={commentList}/>
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

export default Article