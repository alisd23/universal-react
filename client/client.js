import React from 'react';
import ReactDOM from 'react-dom';
import { rehydrate } from 'glamor';
import { BrowserRouter } from 'react-router';
import { AppContainer } from 'react-hot-loader';

rehydrate(window._glam);

const render = () => {
  const App = require('components/App/App').default;
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  );
}

render();

/*
 HOT RELOADING SETUP - DEV ONLY
 */
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('components/App/App', () => {
      render();
    });
  }
}
