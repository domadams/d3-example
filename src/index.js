/*******************************************************
 * Server Entry Point
 * Load the server and set it to listen on the port
 * specified in config.
 ******************************************************/
import app from './app';

const server = app().listen(
  '1919',
  '0.0.0.0',
  () => console.log(`Katie's server started ${JSON.stringify(server.address())}`), // eslint-disable-line no-console
);