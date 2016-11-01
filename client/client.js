import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import App from 'components/App/App';

ReactDOM.render(
  <AppContainer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContainer>,
  document.getElementById('root')
);

/*
 HOT RELOADING SETUP - DEV ONLY
 */
if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('components/App/App', () => {
    const NewApp = require('components/App/App').default;
    ReactDOM.render(
      <AppContainer>
        <BrowserRouter>
          <NewApp />
        </BrowserRouter>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
