import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel';
import pikachu from './assets/pikachu.svg';
import pokeball from './assets/pokeball.jpg';
import './App.scss';

const App = () => (
  <>
    <Carousel />
    <hr />
    <div className="pikachu">
      <span>im base64</span>
      <div className="image" style={{ backgroundImage: `url(${pikachu})` }} />
    </div>
    <hr />
    <div>
      <img src={pokeball} alt="pokeball" height="100" width="100" />
      <span>image ref</span>
    </div>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
