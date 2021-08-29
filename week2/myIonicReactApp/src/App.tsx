import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonHeader, IonRouterOutlet,IonCol, IonToolbar, IonTitle, IonGrid, IonItem, IonLabel, IonRow, IonInput, IonButton, IonIcon, IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

import { calculatorOutline, refreshOutline} from 'ionicons/icons'; 

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import {useRef, useState} from "react"
import { type } from 'os';

const App: React.FC = () => {
   

  const [ calculatedBMI, setCalculatedBMI ] = useState<number>();
  const [typeBMI, setTypeBmi] = useState<string>();

  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  
  const calculateBMI = () => {
    const enterWeight = weightInputRef.current!.value;
    const enterHeight = heightInputRef.current!.value;

    if(!enterWeight || !enterHeight) return ["undefiend", 0] ;
    
    const bmi = +enterWeight / ((+enterHeight/100)* (+enterWeight/100));

    if(bmi < 8.5){
      return ["Kurus", bmi];
    }
    if(bmi < 24.9){
        return ["Normal",bmi]
    }
    if(bmi < 29.9){
        return ["Gemuk", bmi]
    }
    if(bmi >= 30){
        return ["Obesitas", bmi]
    }
    return ["undefiend", 0]
   
  }

  
  const setBmi = () => {
      const [type, bmi] = calculateBMI()

      setCalculatedBMI(+bmi)
      setTypeBmi(type.toString())
      
  }


  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
    setCalculatedBMI(0)
    setTypeBmi("")
  }

  
  
  return(
  <IonApp>
    {/* <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter> */}


    <IonHeader>
      <IonToolbar>
        <IonTitle>BMI Calculator</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonGrid>
        <IonRow>
          <IonCol>
            <IonItem>
              
              <IonLabel position="floating">
                Tinggi Badan (cm)
              </IonLabel>

              <IonInput ref={heightInputRef}></IonInput>

            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              
              <IonLabel position="floating">
                Berat Badan (kg)
              </IonLabel>

              <IonInput ref={weightInputRef} ></IonInput>

            </IonItem>
          </IonCol>
        </IonRow>

        {/* tomobol hitung */}

        <IonRow>
          <IonCol className="ion-text-left">
            <IonButton onClick={setBmi}>
              <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
              Calculate
            </IonButton>
          </IonCol>
        
          <IonCol className="ion-test-right">
            <IonButton onClick={resetInputs}>
              <IonIcon slot="start" icon={refreshOutline}></IonIcon>
              Reset
            </IonButton>
          </IonCol>
        </IonRow>

        {/* card */}

        <IonRow>
          <IonCol>
            <IonCard className="ion-text-center">
              {calculatedBMI != 0 && (
                <IonCardHeader>
                  {calculatedBMI}
                </IonCardHeader>
              )}
              

              <IonCardContent>
                <h1>{typeBMI}</h1>
              </IonCardContent> 
            </IonCard>
          </IonCol>
        </IonRow>
    </IonGrid>

  </IonApp>
);

}

export default App;
