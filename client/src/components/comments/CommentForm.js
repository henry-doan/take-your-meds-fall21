import { CommentConsumer } from "../../providers/CommentProvider";
import { useEffect, useState } from "react";
import Comment from './Comment'
import { withRouter } from "react-router-dom";

const CommentForm = ({ match, addComment, medicationId, updateComment, title, description, id }) => {
  const [comment, setComment] = useState({ title: '', description: ''})

  useEffect( ()=> {
    if (id) {
      setComment({ title, description })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateComment(match.params.id, id, comment)
    } else {
      addComment(medicationId, comment)
    }
    setComment({ title:'', description: ''})
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
      <input
          name='title'
          value={comment.title}
          onChange={(e) => setComment({...comment, title: e.target.value })}
          required
          placeholder="Comment Title"
        />
        <input
          name='description'
          value={comment.description}
          onChange={(e) => setComment({...comment, description: e.target.value })}
          required
          placeholder="Comment Description"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}


const ConnectedCommentForm = (props) => (
  <CommentConsumer>
    { value => <CommentForm {...props} {...value}/>}
  </CommentConsumer>
)
export default withRouter(ConnectedCommentForm);