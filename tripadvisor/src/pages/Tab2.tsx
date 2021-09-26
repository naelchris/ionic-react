import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow , IonCol, IonCard,IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ExploreHeader from '../components/ExploreHeader';
import { FaSearch } from "react-icons/fa";


import './Tab2.css';

const Tab2: React.FC = () => {
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
          <IonCol size='12' className=''>
            <IonRow>
                
                <IonCol size='12' className='search-header-container-search'>
                    <div className="search-form-apeelu">
                        <FaSearch className='search-icons'/>
                        Search Me ?
                    </div>

                </IonCol>

            </IonRow>



            <IonRow>

              <IonCard>
                <div className="gambar-hehe">
                </div>
                <IonCardHeader>
                  <IonCardSubtitle>Destination</IonCardSubtitle>
                  <IonCardTitle>Madison, WI</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
                </IonCardContent>
              </IonCard>

            </IonRow>


            <IonRow>

              <IonCard>
                <div className="gambar-hehe">
                </div>
                <IonCardHeader>
                  <IonCardSubtitle>Destination</IonCardSubtitle>
                  <IonCardTitle>Madison, WI</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
                </IonCardContent>
              </IonCard>

            </IonRow>

            <IonRow>

              <IonCard>
                <div className="gambar-hehe">
                </div>
                <IonCardHeader>
                  <IonCardSubtitle>Destination</IonCardSubtitle>
                  <IonCardTitle>Madison, WI</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
                </IonCardContent>
              </IonCard>

            </IonRow>


            <IonRow>

              <IonCard>
                <div className="gambar-hehe">
                </div>
                <IonCardHeader>
                  <IonCardSubtitle>Destination</IonCardSubtitle>
                  <IonCardTitle>Madison, WI</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
                </IonCardContent>
              </IonCard>

            </IonRow>

          </IonCol>
        
          
        </IonRow>
        

      
        
        {/* <ExploreContainer name="Tab 1 page" /> */}
      
      </IonContent>
    </IonPage>



  );
};

export default Tab2;
