import { useState } from 'react';
import CommentForm from './CommentForm';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
const Comment = ({match , medicationId, id, title, description, deleteComment, updateComment }) => {
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
          <Button onClick={() => setEdit(true)}>Edit</Button>
        }
        <Button onClick={() => deleteComment( match.params.id ,id)}>Delete Comment</Button>
      </li>
    </>
  )
}

export default withRouter(Comment);