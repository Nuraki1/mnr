//process.env: holds all the environment variable

const env = process.env;


export const PORT = 8080;
export const HOST = env.host ?? "localhost";
export const SERVER_URL = `https://${HOST}:${PORT}`

export default {
    PORT, HOST,SERVER_URL
}