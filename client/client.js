import React from 'react';
import ReactDOM from 'react-dom';
import { rehydrate } from 'glamor';
import { BrowserRouter } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import fetchChunks from 'client/fetchChunks';
import routes from 'shared/routes';

rehydrate(window._glam);

const render = () => {
  const App = require('shared/components/App').default;
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  );
};

// In dev mode everything is bundled together.
// In prod we need to wait for async chunks to download before rendering
if (process.env.NODE_ENV === 'production' || _SPLIT_) {
  fetchChunks(routes).then(render);
} else {
  render();
}

/*
 HOT RELOADING SETUP - DEV ONLY
 */
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('shared/components/App', () => {
      render();
    });
    module.hot.accept('shared/routes', () => {
      render();
    });
  }
}
