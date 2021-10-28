import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConnectedCommentForm from "./CommentForm";
import CommentForm from './CommentForm';
import { withRouter } from 'react-router-dom';
import { Button, Modal, Header, Segment} from 'semantic-ui-react';
import Moment from 'react-moment';
import styled from 'styled-components';




const Comment = ({match , medicationId, id, title, description, created_at,deleteComment, updateComment }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <Segment>
        <b>{title}</b>
        <br />
        {description}
        <br/>
        <br/>
        <Moment format="MM/DD/YY hh:mm"><h5>{created_at}</h5></Moment>
   
        {
          editing ?
          <>
            <ConnectedCommentForm
              id={id}
              title={title}
              description={description}
              updateComment={updateComment}
              setEdit={setEdit}
              medicationId={medicationId}
            />
          </>
          :
           <> </>
          // <Button onClick={() => setEdit(true)}>Edit</Button>
        }
        {/* <Button onClick={() => deleteComment( match.params.id ,id)}>Delete Comment</Button> */}
      </Segment>
    </>
  )
}

export default withRouter(Comment);