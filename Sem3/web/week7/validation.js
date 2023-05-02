const express = require('express');
const { body } = require('express-validator');
const app = express();

app.use(express.json());

app.post(
  '/comment',
  body('email').isEmail().normalizeEmail(),
  body('text').not().isEmpty().trim().escape(),
 (req, res) => {
   // Handle the request somehow
   console.log(req.body)
   res.send("done")
 },

);

app.listen(3000);