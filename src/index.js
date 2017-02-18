import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Sortable from 'sortablejs'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

var el = document.getElementById('items');
var sortable = Sortable.create(el);
