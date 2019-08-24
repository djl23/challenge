import React from 'react';
import ReactDOM from 'react-dom';
import Clicker from './component/Clicker';
import './styles.scss';

const app = document.getElementById('root');

ReactDOM.hydrate(<Clicker data={window.__INITIAL__DATA__.data} />, app);
