interface Todo {
  id: string;
  uid: string;
  completed: string;
  created: string;
  text: string;
  complete: boolean;
  coins: number;
}

type ToggleTodo = (todoId: string) => void;
type UpdateTodos = (newTodos: Todo[]) => void;
type AddTodo = (text: string,
  complete: boolean,
  coins: number
) => void;