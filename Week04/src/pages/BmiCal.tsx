import { IonPage } from '@ionic/react';
import Header from '../components/Header';
import Calculator from '../components/Calculator';

const BmiCal: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <Calculator />
        </IonPage>
    );
}
export default BmiCal