import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comments = ({medicationId}) => (


  <>
  <CommentForm medicationId={medicationId} />
  <CommentList medicationId={medicationId} />
  </>
)


export default Comments;
