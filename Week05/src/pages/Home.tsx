import { IonContent, IonPage, IonButton, IonHeader, IonTitle, IonToolbar} from '@ionic/react';
import Header from '../components/Header';
import Calculator from '../components/Calculator';
import BMRCalculator from '../components/BMRCalculator';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
       <IonHeader>
            <IonToolbar>
                <IonTitle>BMI Calculator</IonTitle>
                
            </IonToolbar>
      </IonHeader>

      <IonContent>
        <h2>this home page</h2>
        <IonButton expand="block" routerLink="/bmi">BMI Calculator</IonButton>
        <IonButton expand="block" routerLink="/bmr">BMR Calculator</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
