import Comment from './Comment';

const CommentList = ({ comments, deleteComment, updateComment }) => {
  return (
    <>
      <ul>
        {
          comments.map( c => 
            <Comment
              {...c} 
              deleteComment={deleteComment} 
              updateComment={updateComment}
            />
          )
        }
      </ul>
    </>
  )
}

export default CommentList;