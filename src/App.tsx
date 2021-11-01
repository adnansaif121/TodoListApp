import React, { useRef, useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonAlert,
} from "@ionic/react";

import Controls from "./components/Controls";
import Results from "./components/Results";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import db, { getDocs } from "./firebase";
import { onSnapshot, collection, setDoc, doc, addDoc, deleteDoc } from '@firebase/firestore';


const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState([] as any);
  useEffect(
    () => 
      onSnapshot(collection(db, "tasks"), (snapshot) => 
        setNewTodo(snapshot.docs.map((doc) =>({... doc.data(), id: doc.id})))
      ),
    []
  );
    console.log("This is from firebase", newTodo);
  const descriptionInputRef = useRef<HTMLIonInputElement>(null);
  const taskInputRef = useRef<HTMLIonInputElement>(null);

  const addTask = async () => {
    // const docRef = doc(db, "tasks", "task1");
    const collectionRef = collection(db, "tasks");
    const enteredtodo = {
      task: taskInputRef.current!.value!=undefined?taskInputRef.current!.value.toString(): '',
      description: descriptionInputRef.current!.value!=undefined?descriptionInputRef.current!.value.toString():'',
    };
    // await setDoc(docRef, enteredtodo);
    await addDoc(collectionRef, enteredtodo);
    if (enteredtodo == null || enteredtodo == undefined) {
      return;
    }
    // setTask(enteredtask.toString());
    // setDescription(enteredDiscription.toString());
  
    setNewTodo([...newTodo, enteredtodo]);
  };

  const resetInputs = () => {
    descriptionInputRef.current!.value = "";
    taskInputRef.current!.value = "";
  };

  const deleteChangeHandler = async (id : any) => {
    const docRef = doc(db, "tasks", id);
    await deleteDoc(docRef);
    // INITIAL_TODO = INITIAL_TODO.filter((item) => item.task !== deleteTask);
    // setNewTodo(INITIAL_TODO);
  };
  // const clearError = () => {
  //   setError("");
  // };

  return (
    <React.Fragment>
      <IonApp>
        <IonHeader>
          <IonToolbar color="dark">
            <IonTitle>ToDo List App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Task</IonLabel>
                  <IonInput required ref={taskInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Description</IonLabel>
                  <IonInput required ref={descriptionInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <Controls onAdd={addTask} onReset={resetInputs} />
            {newTodo.map((todo: any) => (
              <div key={todo.id}>
                <Results id={todo.id} task={todo.task} description={todo.description} onDelete={deleteChangeHandler}/>
              </div>
            ))}
            {/* {task && <Results task={task} description={description} />} */}
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
};

export default App;
