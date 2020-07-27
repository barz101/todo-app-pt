interface Todo {
    id: number;
    createdAt: number;
    doneAt: any;
    email: string;
    phoneNumber: string;
    clientName: string;
}

type AddTodo = (newTodo: Todo) => void;
type DeleteTodo = (todoId: string) => void;
type EditTodo = (selectedTodo: Todo) => void;
type CloseModal = () => void;
