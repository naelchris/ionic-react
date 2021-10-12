import { IonButtons,IonButton, IonContent, IonHeader, IonMenuButton, IonAvatar, NavContext, IonPage, IonTitle, IonToolbar,IonIcon } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Swipper from '../components/swipper';
import GebetanContext, { Gebetan } from '../data/gebetan-context';
import { Component, ComponentProps, useContext , useCallback, useEffect, useState} from 'react';
import './Page.css';
import { peopleCircleOutline, peopleCircleSharp } from 'ionicons/icons';
import { useIonRouter } from "@ionic/react";


const Home: React.FC = () => {

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
          <IonTitle><strong>Gebet Me</strong></IonTitle>
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

        
        <Swipper name="home" data={GebetanCtx.gebetan}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
