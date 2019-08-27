const React = require('react');

class Clicker extends React.Component {
  state = {
    lines: [
      'Parallel lines have so much in common but it’s a shame they’ll never meet.',
      "I have an inferiority complex, but it's not a very good one.",
      "They all laughed when I said I wanted to be a comedian; Well, they're not laughing now."
    ],
    idx: 0
  };

  onClick = () => {
    let { idx, lines } = this.state;
    idx += 1;

    if (idx === lines.length) {
      idx = 0;
    }
    alert(lines[idx]);
    this.setState({ idx });
  };

  render() {
    return (
      <div>
        <button className="button" onClick={this.onClick}>
          Alert Button
        </button>
        <br />
        <span>data: {JSON.stringify(this.props.data)}</span>
      </div>
    );
  }
}

// todo: update babel for node/express
module.exports = Clicker;
