import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('My Student ID is 21952506. Welcome to Express');
});

export default router;
