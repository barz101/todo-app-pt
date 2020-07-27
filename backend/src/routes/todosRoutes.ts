import  { Router } from 'express';

import todosController from '../controllers/todosController';

class TodoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', todosController.list);
        this.router.get('/:id', todosController.getOne);
        this.router.post('/', todosController.create);
        this.router.put('/:id', todosController.update);
        this.router.delete('/:id', todosController.delete);
    }

}

export default new TodoRoutes().router;

