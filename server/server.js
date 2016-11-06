import React from 'react';
import { renderToString } from 'react-dom/server';
import mongoose from 'mongoose';
import session from 'express-session';
import Helmet from 'react-helmet';
import express from 'express';
import path from 'path';
import { renderStatic } from 'glamor/server';
import { ServerRouter, createServerRenderContext } from 'react-router';
import { appConfig, sessionConfig, connectMongoDB, requests } from 'revyou-core';
import paths from 'config/paths';
import ports from 'config/ports';
import App from 'shared/components/App';
import initialHtml from 'server/initial-html';

const MongoStore = require('connect-mongo')(session);

export default (params) => {
  const app = express();

  connectMongoDB(appConfig.MONGO_URL);

  app.use(express.static(path.join(paths.build)));
  app.use(session({
    ...sessionConfig,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  }));

  app.get('*', (req, res) => {
    const { headers } = req;
    const context = createServerRenderContext();

    requests.testAuth({ headers })
      .then(data => console.log('CHECK', data));

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
      const helmet = Helmet.rewind();
      const html = initialHtml(renderData, params.chunks(), helmet);
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
