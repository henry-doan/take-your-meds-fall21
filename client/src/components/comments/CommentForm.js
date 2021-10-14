import { useState, useEffect } from 'react';

const CommentForm = ({ addComment, id, title, description, updateComment, setEdit }) => {
  const [comment, setComment] = useState({ title: "", description: "" })

  useEffect( () => {
    if (id) {
      setComment({ title, description })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateComment(id, comment)
      setEdit(false)
    } else {
      addComment(comment)
    }
    setComment({ title: "", description: "" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="title"
          value={comment.title}
          onChange={(e) => setComment({...comment, title: e.target.value })}

          required
          placeholder="Title"
        />
         <input 
          name="description"
          value={comment.description}
          onChange={(e) => setComment({...comment, description: e.target.value })}

          required
          placeholder="Description"
        />
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default CommentForm;