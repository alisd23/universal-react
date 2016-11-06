export default ({ html, css, ids }, assets, helmet) => `
  <!doctype html>
  <html ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
      ${helmet.base.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${helmet.script.toString()}
      ${helmet.style.toString()}
      <style>${css}</style>
      ${
        Object.keys(assets.styles).map(name =>
          `<link rel="stylesheet" type="text/css" href="${assets.styles[name]}" />`
        )
      }
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
