import React from 'react'

const CommentList = ({ commentList }) => {
  return(
    <ul className="comment-list list-group list-group-flush">
      {
        commentList.map((item) => (
          <li className="list-group-item" key={item.commentListId}>
            <p>{item.name}:</p>
            <p>{item.commentContent}</p>
            <p>{item.date}</p>
          </li>
        ))
      }
    </ul>
  )
}
export default CommentList