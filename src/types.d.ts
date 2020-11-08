interface Todo {
  id: string;
  text: string;
  coins: number;
  completedAt: string;
  createdAt: string;
}

interface FirebaseConnection {
  user: firebase.User;
  firestore: firebase.firestore.Firestore;
  auth: firebase.auth.Auth;
}

type SetTodoState = (todoId: string, toComplete: boolean) => void;
type DeleteTodo = (todoId: string) => void;
type UpdateTodos = (newTodos: Todo[]) => void;
type AddTodo = (text: string, coins: number) => void;
type SetTotalCoins = (totalCoins: number) => void;
type OnItemPurchase = (itemID: string) => void;
type voidFunc = () => void;
type GetFirebaseConnection = () => FirebaseConnection;
