import React from "react";
import { IonApp, IonRouterOutlet, IonSplitPane, IonTabs, IonTabBar,IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route } from "react-router";
import { Redirect } from "react-router";

import Mail from "./Mail";
import { MailDetail } from "./MailDetails";
import { mailOutline } from "ionicons/icons";
import Meet from "./Meet";

export const MailTabs: React.FC = () => {
    return (
        <IonTabs>
             <IonRouterOutlet id="main">

                <Redirect exact from="/tabs" to="/tabs/mail"/>
                <Route path="/tabs" component={Mail} />
                <Route path="/mail/:mailID" component={MailDetail}/>
                <Route path="/meet" component={Meet}/>
                

            </IonRouterOutlet>

            <IonTabBar slot="bottom">

                <IonTabButton tab="mail" href="/mail">
                    <IonIcon icon={mailOutline} />
                    <IonLabel > Mail</IonLabel>
                </IonTabButton>

                <IonTabButton tab="meet" href="/meet">
                    <IonIcon icon={mailOutline} />
                    <IonLabel > Meet</IonLabel>
                </IonTabButton>

            </IonTabBar>

        </IonTabs>
    )
}