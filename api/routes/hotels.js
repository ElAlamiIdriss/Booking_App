import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, this is hotels endpoint');
});

export default router;
