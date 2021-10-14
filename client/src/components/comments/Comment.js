import { useState } from 'react';
import CommentForm from './CommentForm';

const Comment = ({ id, title, description, deleteComment, updateComment }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        {title}
        <br />
        {description}
        {
          editing ?
          <>
            <CommentForm
              id={id}
              title={title}
              description={description}
              updateComment={updateComment}
              setEdit={setEdit}
            />
          </>
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteComment(id)}>Delete Comment</button>
      </li>
    </>
  )
}

export default Comment;