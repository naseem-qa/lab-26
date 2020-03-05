import React from 'react';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regester: 0,
    };
  }

    increasHandleClick = e => {
      e.preventDefault();
      let regester = this.state.regester;
      ++regester;
      this.setState({ regester });
    }

    decreaseHandleClick = e => {
      e.preventDefault();
      let regester = this.state.regester;
      --regester;
      this.setState({ regester });
    }
showHia
render() {
  return (
    <section>
      <h3 style={{ color: Math.sign(this.state.regester) >= 0 ? 'Green' : 'red' }}>{this.state.regester}</h3>
      <button onClick={this.increasHandleClick}>Increas</button>
      <button onClick={this.decreaseHandleClick}>Decreas</button>

    </section>
  );
}
}
export default Main;