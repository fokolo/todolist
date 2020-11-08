import { FormControl, RadioGroup, Radio } from "@material-ui/core";
import React, { useState } from "react";
import { CoinX } from "../common/SvgIcons";
import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonRow,
  IonTextarea,
} from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import styled from "styled-components";

interface Props {
  addTodo: AddTodo;
}

const StyledIonItem = styled(IonItem)`
  --padding-start: 5px;
  --min-height: 0;
`;

const StyledIonButton = styled(IonButton)`
  --padding-start: 0;
  --padding-end: 0;
`;

const StyledIonTextarea = styled(IonTextarea)`
  --min-height: 0;
  --padding-top: 0;
  --padding-bottom: 5px;
`;

const StyledRadio = styled(Radio)`
  && {
    padding: 0;
    margin-right: -3px;
    margin-left: -3px;
  }
`;

export const TodoListItemAdder: React.FC<Props> = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");
  const [todoCoinsText, setTodoCoinsText] = useState("1");

  const handleFromSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoCoins: number = +todoCoinsText;
    addTodo(todoText, todoCoins);
    setTodoText("");
    setTodoCoinsText("1");
  };

  return (
    <form onSubmit={handleFromSubmit}>
      <IonGrid>
        <IonRow class="ion-align-items-center">
          <IonCol style={{ flexGrow: 0 }}>
            <StyledIonButton fill="clear" type="submit">
              <IonIcon slot="icon-only" icon={addCircleOutline} />
            </StyledIonButton>
          </IonCol>

          <IonCol>
            <StyledIonItem>
              <StyledIonTextarea
                required
                maxlength={120}
                rows={1}
                value={todoText}
                spellcheck={true}
                placeholder="Todo text"
                onIonChange={(e) => setTodoText(e.detail.value!)}
              />
            </StyledIonItem>
          </IonCol>
          <FormControl component="fieldset">
            <RadioGroup
              defaultValue="1"
              row={true}
              style={{ flexWrap: "nowrap" }}
              onChange={(e) => setTodoCoinsText(e.target.value)}
              classes={{ root: "CoinRadio" }}
            >
              {[1, 2, 5].map((coin) => (
                <StyledRadio
                  key={`coinradio${coin}`}
                  value={`${coin}`}
                  icon={<CoinX coin={coin} />}
                  checkedIcon={<CoinX coin={coin} checked={true} />}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </IonRow>
      </IonGrid>
    </form>
  );
};
