import express from 'express';



const router = express.Router();

const test = (req, res) => {
    res.send('Test route working!');
};

router.get('/test', test);


export default router;