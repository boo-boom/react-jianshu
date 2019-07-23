import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './static/css/reset.css';
import './static/font/iconfont.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
