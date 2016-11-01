export default ({ html, css, ids }, assets) => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>${css}</style>
      <link rel='shortcut icon' href='/assets/favicons/favicon.ico' />
      <link rel="apple-touch-icon" sizes="57x57" href="/assets/favicons/apple-icon-57x57.png">
      <link rel="apple-touch-icon" sizes="60x60" href="/assets/favicons/apple-icon-60x60.png">
      <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicons/apple-icon-72x72.png">
      <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicons/apple-icon-76x76.png">
      <link rel="apple-touch-icon" sizes="114x114" href="/assets/favicons/apple-icon-114x114.png">
      <link rel="apple-touch-icon" sizes="120x120" href="/assets/favicons/apple-icon-120x120.png">
      <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicons/apple-icon-144x144.png">
      <link rel="apple-touch-icon" sizes="152x152" href="/assets/favicons/apple-icon-152x152.png">
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-icon-180x180.png">
      <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicons/android-icon-192x192.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicons/favicon-96x96.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">
      <link rel="manifest" href="/assets/favicons/manifest.json">
      ${
        Object.keys(assets.styles).map(name =>
          `<link rel="stylesheet" type="text/css" href="${assets.styles[name]}" />`
        )
      }
      <meta name="msapplication-TileColor" content="#ffffff">
      <meta name="msapplication-TileImage" content="assets/favicon/ms-icon-144x144.png">
      <meta name="theme-color" content="#ffffff">
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
