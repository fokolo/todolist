interface Todo {
  id: number;
  text: string;
  complete: boolean;
  coins: number;
}

type ToggleTodo = (todoId: number) => void;
type AddTodo = (text: string,
  complete: boolean,
  coins: number
) => void;