export default (markup, assets) => `
  <!doctype html>
  <html>
    <head>
      ${
        Object.keys(assets.styles).map(name =>
          `<link rel="stylesheet" type="text/css" href="${assets.styles[name]}" />`
        )
      }
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
