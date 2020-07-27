import { Request, Response } from 'express';

import pool from '../database';

class TodosController {
    
    public async list(req: Request, res: Response): Promise<void> {
        const todos = await pool.query('SELECT * FROM todos');
        res.send(todos);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const todos = await pool.query('SELECT * FROM todos WHERE id = ?', [id]);
        if (todos.length > 0) {
            return res.json(todos[0]);
        }
        res.status(404).json({ text: "The todo doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO todos set ?', [req.body],);
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldTodo = req.body;
        await pool.query('UPDATE todos set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The todo was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM todos WHERE id = ?', [id]);
        res.json({ message: "The todo was deleted" });
    }
}

const todosController = new TodosController;
export default todosController;