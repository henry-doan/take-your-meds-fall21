import React, { useState } from 'react';
import axios from 'axios';

export const CommentContext = React.createContext();
export const CommentConsumer = CommentContext.Consumer;

const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([])

  // useEffect(() => {
  //   axios.get('/api/comments')
  //     .then( res => setComments(res.data) )
  //     .catch( err => console.log(err))
  // }, [])
  const grabComments = (medicationId) => {
    axios.get(`/api/medications/${medicationId}/comments`)
      .then( res => setComments(res.data) )
      .catch( err => console.log(err))
  }

  const addComment = (medicationId, comment) => {
    axios.post(`/api/medications/${medicationId}/comments`, { comment })
      .then( res => {
        setComments([...comments, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateComment = (medicationId, id, comment) => {
    axios.put(`/api/medications/${medicationId}/comments/${id}`, { comment })
      .then(res => {
        const updatedComments = comments.map( c => {
          if (c.id == id) {
            return res.data 
          }
          return c
        })
        setComments(updatedComments)
      })
      .catch( err => console.log(err))
  }

  const deleteComment = (medicationId, id ) => {
    axios.delete(`/api/medications/${medicationId}/comments/${id}`)
      .then(res => {
        setComments(comments.filter( c => c.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <CommentContext.Provider value={{
      comments,
      grabComments: grabComments,
      addComment: addComment,
      updateComment: updateComment,
      deleteComment: deleteComment,
    }}>
      { children}
    </CommentContext.Provider>
  )

}

export default CommentProvider;