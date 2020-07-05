import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Page } from './components';
import GlobalStyle from './global/globalStyle';

function App() {
  const [colors, setColors] = useState({
    mainBlue: '#2B65F9',
    mainBlack: '#333333',
    mainGray: '#757575',
    secondaryWhite: '#E9F3F5',
    mainWhite: '#FFF',
  });

  return (
    <ThemeProvider theme={{ colors, setColors }}>
      <Page />
      <GlobalStyle />
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
