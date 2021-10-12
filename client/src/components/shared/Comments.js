// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const Comments = ({ userId }) => {
//   const [locations, setComments] = useState([])

//   useEffect( () => {
//     axios.get(`/api/medications/${medicationId}/comments`)
//       .then( res => {
//         setComments(res.data)
//       })
//       .catch( err => console.log(err))
//   }, [])

//   const addLocation = (location) => {
//     axios.post(`/api/medications/${medicationId}/comments`, { comment })
//       .then(res => {
//         setComments([...comments, res.data])
//       })
//       .catch( err => console.log(err))
//   }

//   const updateComment = (id, comment) => {
//     axios.put(`/api/medication/${medicationId}/comments/${id}`, { comment })
//       .then( res => {
//         let updatedComments = comments.map( c => {
//           if (c.id === id) {
//             return res.data
//           }
//           return c
//         })
//         setComments(updatedComments)
//       })
//       .catch( err => console.log(err))
//   }

//   const deleteComment = (id) => {
//     axios.delete(`/api/medications/${medicationId}/comments/${id}`)
//       .then( res => {
//         setComments( comments.filter( c => c.id !== id))
//       })
//       .catch( err => console.log(err))
//   }

//   return (
//     <>
//  <CommentForm addComment={addComment} />
//       <CommentList 
//         comments={comments} 
//         deleteComment={deleteComment}
//         updateComment={updateComment}
//       />
//     </>
//   )
// }

// export default Comments;