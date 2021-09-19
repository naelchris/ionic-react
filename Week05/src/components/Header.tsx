import { IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';

interface Header { }

const Header: React.FC<Header> = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>BMI Calculator</IonTitle>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="home" />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header;