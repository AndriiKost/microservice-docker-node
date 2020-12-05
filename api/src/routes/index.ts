import express from 'express';

const router = express.Router();

router.use('/cars', require('./car'));

module.exports = router;