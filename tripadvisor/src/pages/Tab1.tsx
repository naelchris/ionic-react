import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonRow, IonCol,  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import ExploreHeader from '../components/ExploreHeader';
import { url } from 'inspector';
import ExploreImageSlider from '../components/ExploreImageSlider';

const Tab1: React.FC = () => {

  const imagesTop = [
    {
      title: 'Indonesia',
      class: 'Bali'
    },
    {
      title: 'Europa',
      class: 'Munic'
    },
    {
      title: 'London',
      class: 'london'
    },
    {
      title: 'berlin',
      class: 'zuric'
    }
  ]
  const imagesBottom = [
    {
      title: 'Antalya',
      class: 'antalya'
    },
    {
      title: 'Barcelona',
      class: 'barcelona'
    },
    {
      title: 'Bath',
      class: 'bath'
    },
    {
      title: 'Brighton',
      class: 'brighton'
    }
  ]

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
          <ExploreHeader/>
          <IonCol size='12' className='explore-content'>
              <h2 className='explore-content-title'>Cool Plus stays</h2>
              <h6 className='explore-content-subtitle'>Where Tripadvisor Plus members are staying and saving</h6>
              <ExploreImageSlider images={imagesTop} />

              <div className="bca-black">
                <h2 className='explore-content-title'>Never stays Never</h2>
                <h6 className='explore-content-subtitle'>Where Tripadvisor staying and saving</h6>
                <ExploreImageSlider images={imagesBottom} />
              </div>
        
              
          </IonCol>
        </IonRow>
        

      
        
        {/* <ExploreContainer name="Tab 1 page" /> */}
      
      </IonContent>
    </IonPage>



  );
};

export default Tab1;
