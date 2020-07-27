import { GET, POST, PUT, DELETE } from '../services/httpService'

export default {
    query,
    getById,
    add,
    update,
    deleteTodo
}

function query() {
    return (GET('todos'));
}

function getById(todoId: string) {
    return GET(`todos/${todoId}`)
}
async function add(todo: object) {
    return POST(`todos`, todo);
}

function update(todo: Todo) {
    console.log('todo',todo);
    
    return PUT(`todos/${todo.id}`, todo);
}

function deleteTodo(todoId: string) {
    return DELETE(`todos/${todoId}`);
}