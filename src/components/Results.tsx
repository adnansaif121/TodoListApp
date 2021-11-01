import React from "react";
import { 
    IonRow,
    IonCol,
    IonCardContent,
    IonCard,
    IonButton,
    IonCardHeader,
} from '@ionic/react';


const BmiResults: React.FC<{id: string, task: string ; description: string; onDelete: Function }> = (props) => {
   const deleteHandler = () => {
     props.onDelete(props.id);
   }

    return (
        <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent >
                <IonCardHeader color="light">{props.task}</IonCardHeader>
                  <IonCardContent>{props.description}</IonCardContent>
                  {/* <h2>{props.task}</h2> */}
                  {/* <h3></h3> */}
                  <IonButton color="success" onClick={deleteHandler}>Done</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
    );
}

export default BmiResults;