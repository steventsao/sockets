import React from 'react';
import { render } from 'react-dom';
import SearchBox from './components/SearchBox.js';

let Home = () => (
  <div>
    <SearchBox />
  </div>
)

render(
  <Home />,
  document.getElementById('root')
)
