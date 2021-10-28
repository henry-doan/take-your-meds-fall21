import { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledH1 = styled.h1`
  font-size: 40px;
  margin-bottom: 0;
  display: grid;
  place-content: center;
`
const StyledH3 = styled.h3`
  font-size: 18px;
  margin-top: 5px;
  display: grid;
  place-content: center;  
`
const TimeDateContainer = styled.div`
display: grid;
place-content: center;
`
class Clock extends Component {
  state = { date: new Date() };

  componentDidMount() {
    setInterval( () => this.tick(), 1000 )
  }

  tick = () => {
    this.setState({ date: new Date() });
  }


  render() {
    const { date } = this.state;

    return (
      <>
      <TimeDateContainer>
        <StyledH1>
          {date.toLocaleTimeString([], { timeStyle: 'short' })}
        </StyledH1>
        <StyledH3>
          {moment().format('MMMM Do YYYY')}
        </StyledH3>
      </TimeDateContainer>
      </>
    )
  }
}

export default Clock;