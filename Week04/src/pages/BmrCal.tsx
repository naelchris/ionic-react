import { IonPage } from '@ionic/react';
import Header from '../components/Header';
import BMRCalculator from '../components/BMRCalculator';
const BmrCal: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <BMRCalculator />
        </IonPage>
    );
}
export default BmrCal