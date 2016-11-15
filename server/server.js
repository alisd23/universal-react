import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import express from 'express';
import path from 'path';
import { renderStatic } from 'glamor/server';
import { RouterContext, match } from 'react-router';
import paths from 'config/paths';
import ports from 'config/ports';
import routes from 'shared/routes';
import initialHtml from 'server/initial-html';

export default (params) => {
  const app = express();

  app.use(express.static(path.join(paths.build)));

  app.get('*', (req, res) => {
    match(
      { routes, location: req.url },
      (error, redirectLocation, renderProps) => {
        if (error) {
          res.status(500).send(error.message);
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
          const element = <RouterContext {...renderProps} />;
          const renderData = renderStatic(() => renderToString(element));
          const helmet = Helmet.rewind();
          const html = initialHtml(renderData, params.chunks(), helmet);
          res.status(200).send(html);
        } else {
          res.status(404).send('Not found');
        }
      }
    );
  });

  app.listen(ports.SERVER_PORT, function(error) {
    if (error) {
      console.error(error);
    } else {
      console.info('==> 🌎 WEB server listening on port %s.', ports.SERVER_PORT);
    }
  });
};
