import React from 'react';
import './styles.scss';
import axios from 'axios';

class Carousel extends React.Component {
  state = {
    image: '',
    idx: 0,
    labels: []
  };

  componentDidMount() {
    this.fetchImages();
    this.fetchLabels();
  }

  fetchImages = async () => {
    const response = await axios.get('http://localhost:3000/image');
    this.setState({ image: response.data });
  };

  fetchLabels = async () => {
    const response = await axios.get('http://localhost:3000/labels');
    this.setState({ labels: response.data });
  };

  onClick = direction => () => {
    let { idx } = this.state;

    if (direction === 'next') {
      idx += 1;
    } else {
      idx -= 1;
    }

    if (idx == this.state.labels.length) {
      idx = 0;
    } else if (idx == -1) {
      idx = this.state.labels.length - 1;
    }

    this.setState({ idx });
  };

  render() {
    const { image, labels, idx } = this.state;

    return (
      <div className="container">
        <div className="image-container">
          <div
            style={{
              backgroundImage: `url(${image})`
            }}
            className="image"
          >
            {labels.length > 0 ? (
              <div className="label-container">
                <span className="upper label">
                  {labels[idx].upperText.toUpperCase()}
                </span>
                <span className="lower label">
                  {labels[idx].lowerText.toUpperCase()}
                </span>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div>
          <button className="button" onClick={this.onClick('prev')}>
            Prev
          </button>
          <button className="button" onClick={this.onClick('next')}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
