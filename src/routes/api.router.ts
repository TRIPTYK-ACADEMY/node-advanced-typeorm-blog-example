import { Router } from 'express';

const apiTodosRouter = Router();

//DEFINE my Routes for todos
apiTodosRouter.get('/api/v1/status', (req, res) => {
    res.statusCode =200;
    res.json({
        status : 'online'
    });
});


export {apiTodosRouter};