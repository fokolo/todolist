import {
  IonItem,
  IonLabel,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonIcon,
} from "@ionic/react";
import React, { useRef, useState } from "react";
import { CoinX } from "../common/SvgIcons";
import {
  trashOutline,
  checkmarkCircleOutline,
  arrowUndoCircleOutline,
} from "ionicons/icons";

interface Props {
  todo: Todo;
  setTodoState: SetTodoState;
  deleteTodo: DeleteTodo;
}

// doneTask: {
//   backgroundColor: theme.palette.grey[400],
//   "& #todoText": {
//     textDecoration: "line-through",
//   },
// },

export const TodoListItem: React.FC<Props> = ({
  todo,
  setTodoState,
  deleteTodo,
}) => {
  const [noWrap, setNoWrap] = useState(false);
  const isComplete = todo.completedAt ? true : false;
  const rootComponent = useRef();

  const onSwipeItem = (e: CustomEvent<any>) => {
    if (rootComponent && rootComponent.current) {
      rootComponent.current.close();
    }

    if (e.detail.side === "end") {
      deleteTodo(todo.id);
    } else if (e.detail.side === "start") {
      setTodoState(todo.id, !isComplete);
    }
  };

  return (
    <IonItemSliding ref={rootComponent}>
      <IonItemOptions side="end" onIonSwipe={onSwipeItem}>
        <IonItemOption color="danger" expandable>
          <IonIcon size="large" icon={trashOutline} />
        </IonItemOption>
      </IonItemOptions>

      <IonItemOptions side="start" onIonSwipe={onSwipeItem}>
        {isComplete ? (
          <IonItemOption color="warning" expandable>
            <IonIcon size="large" icon={arrowUndoCircleOutline} />
          </IonItemOption>
        ) : (
          <IonItemOption color="success" expandable>
            <IonIcon size="large" icon={checkmarkCircleOutline} />
          </IonItemOption>
        )}
      </IonItemOptions>

      <IonItem
        color={isComplete ? "light" : undefined}
        button
        onClick={() => {
          setNoWrap(!noWrap);
        }}
      >
        <IonLabel
          className={noWrap ? "ion-text-wrap" : ""}
          style={isComplete ? { textDecoration: "line-through" } : {}}
        >
          {todo.text}
        </IonLabel>
        <div style={{ marginLeft: "auto", padding: 4 }}>
          <CoinX coin={todo.coins} />
        </div>
      </IonItem>
    </IonItemSliding>
  );
};
