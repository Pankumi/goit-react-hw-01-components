
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './utils/variables.scss';
import { App } from 'components/App';

// // Створення реакт елемента title
// const title = React.createElement('hi', {}, 'hello world');

ReactDOM.createRoot(document.getElementById('root')).render(
  // title
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
