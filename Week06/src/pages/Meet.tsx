import { IonHeader, IonPage, IonContent, IonCard,IonCardContent, IonButton ,  IonToolbar, IonTitle, IonButtons, IonMenuButton} from "@ionic/react";
import React from "react";

export const FRIENDS_DATA = [
    {id: 'f1', subject:"Nael Chris"},
    {id: 'f2', subject:"Noel Chris"},
    {id: 'f3', subject:"Nathan Chris"}
]

const Meet: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Ionic Meet</IonTitle>
                    </IonToolbar>
            </IonHeader>
            <IonContent>
                {
                    FRIENDS_DATA.map(friend => (
                        <IonCard key={friend.id}>
                            <IonCardContent className="ion-text-center">
                                <h2>{friend.subject}</h2>
                                <IonButton routerLink={`/mail/${friend.id}`}>
                                    View Mail
                                </IonButton>
                            </IonCardContent>
                        </IonCard>
                    ))
                }
            </IonContent>
        </IonPage>
    )
}

export default Meet