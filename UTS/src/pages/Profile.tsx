import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonButton, IonAvatar, IonIcon} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Swipper from '../components/swipper';
import GebetanContext, { Gebetan } from '../data/gebetan-context';
import { Component, ComponentProps, useContext , useEffect, useState} from 'react';
import './Profile.css';
import { peopleCircleSharp } from 'ionicons/icons';
import { useIonRouter } from "@ionic/react";

const Profile: React.FC = () => {

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
          <IonTitle>Profile</IonTitle>
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

        <div className="container">
            <div className="pic-container">
                <img className="pic-item" src="https://avatars.githubusercontent.com/u/26427310?v=4" alt="" />
            </div>
            <br></br>
            <br/>
            <strong>Nathanael Christianto Amadea</strong>
            <p>
            <strong>00000028452</strong>
            </p>
            
        </div>   
       
      </IonContent>
    </IonPage>
  );
};

export default Profile;
