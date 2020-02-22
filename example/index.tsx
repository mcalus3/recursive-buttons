import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RecursiveButtons } from '../src';

const App = () => {
  return (
    <div style={{ width: '200px', height: '300px' }}>
      <RecursiveButtons />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
