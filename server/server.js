import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import path from 'path';
import { renderStatic } from 'glamor/server';
import { ServerRouter, createServerRenderContext } from 'react-router';
import paths from 'config/paths';
import ports from 'config/ports';
import App from 'components/App';
import initialHtml from './initial-html';

export default (params) => {
  const app = express();

  app.use(express.static(path.join(paths.build)));

  app.get('*', (req, res) => {
    const context = createServerRenderContext();

    // render the first time
    const element = (
      <ServerRouter
        location={req.url}
        context={context}
      >
        <App />
      </ServerRouter>
    );

    let renderData = renderStatic(() => renderToString(element));

    // get the result
    const result = context.getResult();

    if (result.redirect) {
      res.redirect(301, result.redirect.pathname);
    } else {
      if (result.missed) {
        res.status(404);
        renderData = renderStatic(() => renderToString(element));
      }
      const html = initialHtml(renderData, params.chunks());
      res.send(html);
    }
  });

  app.listen(ports.SERVER_PORT, function(error) {
    if (error) {
      console.error(error);
    } else {
      console.info('==> 🌎 WEB server listening on port %s.', ports.SERVER_PORT);
    }
  });
};
