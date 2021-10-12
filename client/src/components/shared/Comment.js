// import { useState } from 'react';
// import CommentForm from './CommentForm';
// import Comments from '../comments/Comments';

// const Comment = ({ id, title, description }) => {
//   const [editing, setEdit] = useState(false)

//   return (
//     <>
//       <li>
//         {title, description}
//         <br />
//         Complete: { complete ? "Complete" : "Not Complete" }
//         {
//           editing ?
//           <>
//             <CommentForm
//               id={id}
//               title={title}
//               complete={complete}
//               updateComment={updateComment}
//               setEdit={setEdit}
//             />
//              <CommentForm
//               id={id}
//               description={description}
//               complete={complete}
//               updateLocation={updateComment}
//               setEdit={setEdit}
//             />
//           </>
//           :
//           <button onClick={() => setEdit(true)}>Edit</button>
//         }
//         <button onClick={() => deleteComment(id)}>Delete Comment</button>
//       </li>
//       <Comments commentId={id} />
//     </>
//   )
// }

// export default Comment;