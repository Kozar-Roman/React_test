import React from 'react';
import ReactDOM from 'react-dom';

import elements from './elements';
import App from './App';

ReactDOM.render(<App initialData={elements} />, document.getElementById('root'));
