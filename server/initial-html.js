export default ({ html, css, ids }, assets) => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>${css}</style>
      <link rel='shortcut icon' href='/assets/favicons/favicon.ico' />
      ${
        Object.keys(assets.styles).map(name =>
          `<link rel="stylesheet" type="text/css" href="${assets.styles[name]}" />`
        )
      }
      <title>Ali Sheehan-Dare</title>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
    <script>window._glam = ${JSON.stringify(ids)}</script>
    ${
      Object.keys(assets.javascript).map(name =>
        `<script src="${assets.javascript[name]}"></script>`
      )
    }
  </html>
`;
