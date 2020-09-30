interface Todo {
    id: number;
    text: string;
    complete: boolean;
    cash: number;
  }

  type ToggleTodo = (todoId : number) => void;