//process.env: holds all the environment variable

const env = process.env;

export const PORT = 8080;
export const HOST = env.host ?? "localhost";
export const SERVER_URL = `https://${HOST}:${PORT}`;

// This is after installing mongodb compass and copying the default uri of mongodb compass

export const MONGODB_URI =
  env.MONGODB_URI ?? "mongodb://localhost:27017";
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";

export default {
  PORT,
  HOST,
  SERVER_URL,
};
