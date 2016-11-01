import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import path from 'path';
import { ServerRouter, createServerRenderContext } from 'react-router';
import paths from 'config/paths';
import ports from 'config/ports';
import App from 'components/App/App';
import initialHtml from './initial-html';

export default (params) => {
  const app = express();

  app.use(express.static(path.join(paths.build)));

  app.get('*', (req, res) => {
    const context = createServerRenderContext();

    // render the first time
    const createElement = () => (
      <ServerRouter
        location={req.url}
        context={context}
      >
        <App />
      </ServerRouter>
    );

    let markup = renderToString(createElement());

    // get the result
    const result = context.getResult();

    if (result.redirect) {
      res.redirect(301, result.redirect.pathname);
    } else {
      if (result.missed) {
        res.status(404);
        markup = renderToString(element);
      }
      const html = initialHtml(markup, params.chunks());
      res.send(html);
    }
  })

  app.listen(ports.SERVER_PORT, function(error) {
    if (error) {
      console.error(error);
    } else {
      console.info('==> 🌎 Backend server listening on port %s.', ports.SERVER_PORT);
    }
  });
};
