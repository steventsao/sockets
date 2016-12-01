import React from 'react';
import { render } from 'react-dom';
import SearchBox from './components/SearchBox.jsx';

const Home = () => (
  <div>
    <SearchBox />
  </div>
);

window.onload = () => {
  render(
    <Home />,
    document.getElementById('root')
  );
};
