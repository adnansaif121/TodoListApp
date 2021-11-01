import React from "react";
import { IonRow, IonCol, IonButton } from "@ionic/react";

const Controls: React.FC<{ 
    onAdd: () => void; 
    onReset: () => void 
}> = (props) => {
    return (
      <IonRow>
        <IonCol className="ion-text-left">
          <IonButton onClick={props.onAdd}>Add Task</IonButton>
        </IonCol>
        <IonCol className="ion-text-right">
          <IonButton onClick={props.onReset}>Reset</IonButton>
        </IonCol>
      </IonRow>
    );
  };

export default Controls;
