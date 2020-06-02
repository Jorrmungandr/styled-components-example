import React from 'react';
import ReactDOM from 'react-dom';

import { Page } from './components';
import GlobalStyle from './global/globalStyle';

function App() {
  return (
    <section>
      <Page />
      <GlobalStyle />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
