import { CommentConsumer } from "../../providers/CommentProvider";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";

const CommentList = ({ medicationId, grabComments, comments }) => {

  useEffect(() => {
    grabComments(medicationId)
  })
  return (
    <>
      <h1>Comments</h1>
      <Grid columns={3} divided stackable>
        { comments.map(c => 
          <Grid.Column>
            {c.comments}
          </Grid.Column>                 
          )}

      </Grid>
    </>
  )
}


const ConnectedCommentList = (props) => (
  <CommentConsumer>
    { value => <CommentList {...props} {...value}/>}
  </CommentConsumer>
)
export default ConnectedCommentList;