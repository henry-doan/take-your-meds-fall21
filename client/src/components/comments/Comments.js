import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comments = ({medicationId}) => (


  <>
  <CommentList medicationId={medicationId} />
  <br/>
  <CommentForm medicationId={medicationId} />

  </>
)


export default Comments;
