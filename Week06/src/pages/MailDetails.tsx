import { IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonBackButton ,  IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption } from "@ionic/react";
import React from "react"
import { useParams } from "react-router";
import { MAIL_DATA } from "./Mail";

export const MailDetail: React.FC = () => {
    const mId = useParams<{mailID: string}>().mailID;
    const selectedMail = MAIL_DATA.find(m => m.id === mId)
    
    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>{selectedMail? selectedMail?.subject: "No mail found"}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>Mail ID : {mId}</h2>

                <IonItemSliding>
                    <IonItemOptions side="start">
                    <IonItemOption color="danger" expandable>
                        Delete
                    </IonItemOption>
                    </IonItemOptions>

                    <IonItem>
                    <IonLabel>Expandable Options</IonLabel>
                    </IonItem>

                    <IonItemOptions side="end">
                    <IonItemOption color="tertiary" expandable>
                        Archive
                    </IonItemOption>
                    </IonItemOptions>
                </IonItemSliding>

            </IonContent>
        </IonPage>
    )
}

