import express from 'express';

const router = express.Router();

router.use('/car', require('./car'));

module.exports = router;