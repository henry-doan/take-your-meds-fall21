import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button, Modal, Header} from 'semantic-ui-react';
import ConnectedCommentForm from "./CommentForm";
import Moment from 'react-moment';
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
      {/* <Moment format="MM/DD/YY"> {created_at}</Moment> */}
      <h1>{title}</h1>
      <h3>{description}</h3>
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Edit</Button>}
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
      <Button color="red" onClick={() => deleteComment(id)}> Delete</Button>
      <Link to="/" >
      <Button>Go Home</Button>
      </Link>
      <Comments id={id}/>

    </>
  )
}

const ConnectedShowComment = (props) => (
  <CommentConsumer>
    { value => <ShowComment {...props} {...value} />}
  </CommentConsumer>
>
)

export default withRouter(ConnectedShowComment);