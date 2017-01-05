export default (markup, assets) => `
  <!doctype html>
  <html>
    <head>
      <link rel='icon' href='/assets/favicon.ico' />
    </head>
    <body>
      <div id="root">${markup}</div>
    </body>
    ${
      Object.keys(assets.javascript).map(name =>
        `<script src="${assets.javascript[name]}"></script>`
      )
    }
  </html>
`;
