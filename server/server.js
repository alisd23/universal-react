import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import { RouterContext, match } from 'react-router';
import paths from 'config/paths';
import ports from 'config/ports';
import routes from 'shared/routes';
import initialHtml from 'server/initial-html';

export default (params) => {
  const app = express();

  // Server static files (js, images)
  app.use(express.static(paths.build));

  // All page requests are handled in one function
  app.get('*', (req, res) => {
    match(
      { routes, location: req.url },
      (error, redirectLocation, renderProps) => {
        if (error) {
          res.status(500).send(error.message);
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
          // Render our app to a HTML string
          const reactMarkup = renderToString(
            <RouterContext {...renderProps} />
          );
          // Create a full HTML page, including script links
          const html = initialHtml(reactMarkup, params.chunks());
          // Send to the client
          res.status(200).send(html);
        } else {
          res.status(404).send('Not found');
        }
      }
    );
  });

  // Start server
  app.listen(ports.SERVER_PORT, function(error) {
    if (error) {
      console.error(error);
    } else {
      console.info('==> 🌎 WEB server listening on port %s.', ports.SERVER_PORT);
    }
  });
};
