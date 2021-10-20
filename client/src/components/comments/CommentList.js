import { CommentConsumer } from "../../providers/CommentProvider";
import { useEffect, useState } from "react";
import Comment from './Comment'
import { withRouter } from "react-router-dom";
const CommentList = ({ match, medicationId, grabComments, comments, deleteComment, updateComment }) => {

  useEffect(() => {
    grabComments(match.params.id)
  }, [])
  return (
    <>
      <h1>Comments</h1>
      {
          comments.map( c => 
             <Comment
               {...c} 
               deleteComment={deleteComment} 
               updateComment={updateComment}
             />
           )
         }

    </>
  )
}


const ConnectedCommentList = (props) => (
  <CommentConsumer>
    { value => <CommentList {...props} {...value}/>}
  </CommentConsumer>
)
export default withRouter(ConnectedCommentList);
