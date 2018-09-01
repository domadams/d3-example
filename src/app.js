/** *****************************************************
 * Main Application
 * Exported function returns an instantiated Express
 * Application with middleware providing:
 * - Static File Routing
 * - Router - This provides a separate avenue for API / HTML response handlers
 ***************************************************** */
import express from 'express';
import path from 'path';

// we'll create our routes here

// get an instance of router
const router = express.Router();

router.get('/', function(req, res) {
  res.send('<p style="background:red">Hi</p>');
});

export default () => express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/', router);