import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, Header} from 'semantic-ui-react';
import ConnectedCommentForm from "./CommentForm";
import { CommentConsumer } from "../../providers/CommentProvider";
import Comments from  '../comments/Comments'

import { withRouter } from "react-router-dom";

const ShowComment = ({ location, match, updateComment, history, deleteComment }) => {
  const [comment, setComment] = useState([])
  const [open, setOpen] = useState(false)
  // new change
  // conditional rendering
  // modified edit use state
  useEffect( () => {
    showComments()
  },[])

  const showComments = () => {
    axios.get(`/api/comments/${match.params.id}/`)
    .then( res => setComment(res.data) )
    .catch( err => console.log(err))
  }


  const { id, title, description  } = comment
  return (
    <>  
    <Header>Comment</Header>
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Editing {title} </Modal.Header>
      <Modal.Content>
        <Modal.Description>
        <ConnectedCommentForm
        id={id}
        title={title}
        description={description}
        history={history}/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='yellow' onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
    </>
  )
}

const ConnectedShowComment = (props) => (
  <CommentConsumer>
    { value => <ShowComment {...props} {...value} />}
  </CommentConsumer>
)

export default withRouter(ConnectedShowComment);