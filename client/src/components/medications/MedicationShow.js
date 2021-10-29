import { Item, Segment, Image } from "semantic-ui-react";
import Img from '../../images/meds/download.png'
import styled, {keyframes} from "styled-components";

const ImageContainer = styled.div`
  border-radius: 50px;

`

const MedicationShow = () => (
  <Item.Group>
    <Item>
      <ImageContainer>
      <div style="line-height:10px">
      <image size="small" src={Img} />
      </div>

      </ImageContainer>
      <br/>
      <Item.Content>
        <Item.Header as='a'>Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          {/* <Image src='/images/wireframe/short-paragraph.png' /> */}
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default MedicationShow;
