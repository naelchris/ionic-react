import { IonHeader, IonPage, IonContent, IonCard,IonCardContent, IonButton ,  IonToolbar, IonTitle, IonButtons, IonMenuButton} from "@ionic/react";
import React from "react";

export const MAIL_DATA = [
    {id: 'm1', subject:"Magang MBKM sudah dimulai"},
    {id: 'm2', subject:"Bimbingan Skripsi"},
    {id: 'm3', subject:""}
]

const Mail: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Ionic Mail</IonTitle>
                    </IonToolbar>
            </IonHeader>
            <IonContent>
                {
                    MAIL_DATA.map(mail => (
                        <IonCard key={mail.id}>
                            <IonCardContent className="ion-text-center">
                                <h2>{mail.subject}</h2>
                                <IonButton routerLink={`/mail/${mail.id}`}>
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

export default Mail