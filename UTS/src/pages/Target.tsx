import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar ,IonIcon, IonAvatar, IonButton} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Swipper from '../components/swipper';
import GebetanContext, { Gebetan } from '../data/gebetan-context';
import { Component, ComponentProps, useContext , useEffect, useState} from 'react';
import './Page.css';
import { profile } from 'console';
import { female, peopleCircleSharp } from 'ionicons/icons';
import { useIonRouter } from "@ionic/react";

const Target: React.FC = () => {

  const GebetanCtx = useContext(GebetanContext)
  const router = useIonRouter();

  const simpleNavigate = (value:string) => {
		
		router.push(value, "forward", "push");
	}
	
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
          <IonTitle>Target Gebetan</IonTitle>
          <IonAvatar slot="end" className="toolbar-pic" onClick={() => simpleNavigate("/profile")}>
            <img src="https://avatars.githubusercontent.com/u/26427310?v=4" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
{
    GebetanCtx.targetGebetan.length !== 0 ? (
        <Swipper name="target" data={GebetanCtx.targetGebetan}/>
    ): (
        <div className="container">
            <strong>Belum punya target gebetan. </strong>
            <p>
            <IonButton routerLink={"/home"}>
                Cari Gebetan
            </IonButton>
            </p>
            
        </div>
    )
}
        
       
      </IonContent>
    </IonPage>
  );
};

export default Target;
