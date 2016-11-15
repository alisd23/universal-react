# Universal React boilerplate

Isomorphic (universal) React boilerplate, with code-splitting, hot reloading,
dev and prod builds already setup.

Features/technologies included:
- React
- React Router v3 - *Routing*
- Glamor - *JavaScript styles*
- React Hot loader - *Hot reloading*
- React Helmet - *Handling head (title/meta) tags*
- Nodemon - *Runs server in dev mode*
- Webpack (v2-beta) - *For build phase*
- Webpack Dev Server - *Serves built files in dev mode*
- Babel - *Transpilation from stage 1 features*
- Eslint - *Linting*

## Environment

- `SPLIT=true` - Forces app to do code-splitting in *dev* mode
- `MOBILE=true` - Used to build the mobile bundle

## Development

Simply run:

```
npm run dev
```

Then go to `localhost:9000`.

> Use the `SPLIT=true` environment variable setting to force code splitting
> in dev mode. It is off by default to allow hot reloading to work properly.

## Production

```
npm run prod
```

> **NOTE**
> This command uses `nodemon` at the moment (to allow easier testing of
> production mode). For *actual* production builds replace `nodemon` with a
> regular `node` command.
