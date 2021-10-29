import React from "react";
import kat from "../../images/kat.png";
import thomas from "../../images/thomas.png";
import sean from "../../images/sean.png";
import meg from "../../images/meg.png";
import { Item, Segment, Icon, Form } from "semantic-ui-react";

const About = () => (
  <Item.Group>
    <Segment>
      <Item>
        <br></br>
        <Item.Image size="small" src={kat} />
        <br></br>
        <Item.Content>
          {" "}
          <br></br>
          <Item.Header>
            <strong>Kat Athay</strong>
          </Item.Header>
          <Item.Meta>DevPoint Labs Final Project</Item.Meta>
          <Item.Extra>Developer of Take Your Meds.</Item.Extra> <br />
          <a href="https://www.linkedin.com/in/katathay/">
            <Icon size="big" name="linkedin" />
          </a>
          <a href="https://github.com/Kat4Kimi">
            <Icon size="big" name="github square" />
          </a>
        </Item.Content>
      </Item>
    </Segment>
    <Segment>
      <Item>
        <br></br>
        <Item.Image size="small" src={meg} />
        <br></br>
        <Item.Content>
          <br></br>
          <Item.Header>
            <strong>Meg Graham</strong>
          </Item.Header>
          <Item.Meta>DevPoint Labs Final Project</Item.Meta>
          <Item.Extra>Developer of Take Your Meds.</Item.Extra> <br />
          <a href="https://www.linkedin.com/in/marygraham96">
            <Icon size="big" name="linkedin" />
          </a>
          <a href="https://github.com/meggles781">
            <Icon size="big" name="github square" />
          </a>
        </Item.Content>
      </Item>
    </Segment>
    <Segment>
      <Item>
        <br></br>
        <Item.Image size="small" src={sean} />
        <br></br>
        <Item.Content>
          <br></br>
          <Item.Header>
            <strong>Sean Klindt</strong>
          </Item.Header>
          <Item.Meta>DevPoint Labs Final Project</Item.Meta>
          <Item.Extra>Developer of Take Your Meds.</Item.Extra> <br />
          <a href="https://www.linkedin.com/in/sean-klindt/">
            <Icon size="big" name="linkedin" />
          </a>
          <a href="https://github.com/sean-klindt">
            <Icon size="big" name="github square" />
          </a>
        </Item.Content>
      </Item>
    </Segment>
    <Segment>
      <Item>
        <br></br>
        <Item.Image size="small" src={thomas} />
        <br></br>
        <Item.Content>
          <br></br>
          <Item.Header>
            <strong>Thomas Lohan</strong>
          </Item.Header>
          <Item.Meta>DevPoint Labs Final Project</Item.Meta>
          <Item.Extra>Developer of Take Your Meds.</Item.Extra> <br />
          <a href="https://www.linkedin.com/in/thomas-lohan-55b2b519b">
            <Icon size="big" name="linkedin" />
          </a>
          <a href="https://github.com/TLohan13">
            <Icon size="big" name="github square" />
          </a>
        </Item.Content>
      </Item>
    </Segment>
  </Item.Group>
);

export default About;
