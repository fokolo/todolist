interface Todo {
  id: string;
  text: string;
  coins: number;
  completedAt: string;
  createdAt: string;
}

type SetTodoState = (todoId: string, toComplete: boolean) => void;
type UpdateTodos = (newTodos: Todo[]) => void;
type AddTodo = (text: string, coins: number) => void;
type SetTotalCoins = (totalCoins: number) => void;
