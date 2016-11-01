export const SERVER_PORT = process.env.PORT || 8000;
export const WEBPACK_PORT = SERVER_PORT === 9000 ? 9001 : 9000;

export default {
  SERVER_PORT,
  WEBPACK_PORT
};
