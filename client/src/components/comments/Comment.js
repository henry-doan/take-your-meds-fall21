import { useState } from 'react';
import CommentForm from './CommentForm';

const Comment = ({medicationId, id, title, description, deleteComment, updateComment }) => {
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
              medicationId={medicationId}
            />
          </>
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteComment( medicationId ,id)}>Delete Comment</button>
      </li>
    </>
  )
}

export default Comment;