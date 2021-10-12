import { IonApp, IonRouterOutlet, IonIcon, IonLabel, IonMenu, IonHeader, IonContent,IonList, IonMenuToggle, IonItem,  IonTabBar,IonTabButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

//component
import Mail from './pages/Mail';
import { MailDetail } from './pages/MailDetails';
import { mailOutline, list } from 'ionicons/icons';
import { MailTabs } from './pages/MailTabs';

//ionic import
import { IonToolbar } from '@ionic/react';
import { IonButtons } from '@ionic/react';
import { IonMenuButton } from '@ionic/react';
import { IonTitle } from '@ionic/react';
import Meet from './pages/Meet';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>

          <IonMenu contentId="main">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Ionic Mail</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonMenuToggle>
                  <IonItem button routerLink="/tabs/mail">
                    <IonIcon slot="start" icon={list}/>
                    <IonLabel > All mail</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              </IonList>
            </IonContent>

          </IonMenu>

          <IonRouterOutlet id="main">
            <Route path="/tabs" component={MailTabs}/>
            <Route path="/mail/:mailId" component={MailDetail}/>
            <Route path="/meet" component={Meet}/>
            <Redirect exact from="/" to="/tabs"/>
          </IonRouterOutlet>


          
      </IonReactRouter>

            
    </IonApp>
  );
};

export default App;
