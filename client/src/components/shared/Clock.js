import { Component } from 'react';

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
      <h1>
       { date.toLocaleTimeString() }
      </h1>
    )
  }
}

export default Clock;