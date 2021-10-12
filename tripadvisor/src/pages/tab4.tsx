import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar , IonRow, IonCol,IonButton,  IonCard,IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ExploreHeader from '../components/ExploreHeader';


const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>

        <IonToolbar>
          <IonTitle size="small" className="logo-trip">
          </IonTitle>
        </IonToolbar>
      
      </IonHeader>

      <IonContent fullscreen>
        
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        
        <IonRow className='explore-container'>

          <IonRow>

            <IonCard>
              <div className="gambar-love">
              </div>
              <IonCardHeader>
                <IonCardTitle>Traveling soon? Save your amazing ideas all in one place with Trips.</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
              <p>Save traveler-recommended places for your trip</p> <br/> 
              <p>View the things to do, restaurants and hotels you saved on a map</p><br/> 
              <p>Easily access all your saves while traveling, wherever you go     </p>     <br/>  

              <IonButton size="small" color="dark">Get Started</IonButton> <br></br>
              <IonButton size="small" color="light"><p>login now</p></IonButton>


              </IonCardContent>
            </IonCard>

            </IonRow>
        </IonRow>
        
        
        

      
        
        {/* <ExploreContainer name="Tab 1 page" /> */}
      
      </IonContent>
    </IonPage>

  );
};

export default Tab4;