import React, { useState, useEffect } from 'react';
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
  const grabComments = () => {
    axios.get('/api/comments')
      .then( res => setComments(res.data) )
      .catch( err => console.log(err))
  }

  const addComment = (comment) => {
    axios.post('/api/comments', { comment })
      .then( res => {
        setComments([...comments, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateComment = (id, comment) => {
    axios.put(`/api/comments/${id}`, { comment })
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

  const deleteComment = (id) => {
    axios.delete(`api/comments/${id}`)
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