import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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

import BadMemories from './pages/BadMemories';
import GoodMemories from './pages/GoodMemories';

import { happyOutline, sadOutline, add } from 'ionicons/icons';
import NewMemory from './pages/NewMemory';
import Home from './pages/Home';
import MemoriesContextProvider from './data/MemoryContextProvider';
import { useContext, useEffect } from 'react';
import MemoriesContext from './data/memorycontext';

const App: React.FC = () => {
  const memoriesCtx = useContext(MemoriesContext);
  const {initContext} = memoriesCtx;
  useEffect(() => {
    initContext();
  }, [initContext]);
  return (
    <IonApp>
    <IonReactRouter>
      <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/goodMemories" component={GoodMemories}> 
              </Route>
              <Route exact path="/badMemories" component={BadMemories}>
              </Route>
              <Route exact path="/newMemory" component={NewMemory}>
              </Route>
              <Route exact path="/home" component={Home}>
              </Route>
              <Redirect exact from="/" to="/goodMemories" >
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="mail" href="/goodMemories">
                    <IonIcon icon={happyOutline}></IonIcon>
                    <IonLabel>Good Memories</IonLabel>
                </IonTabButton>
                <IonTabButton tab="meet" href="/badMemories">
                    <IonIcon icon={sadOutline}></IonIcon>
                    <IonLabel>Bad Memories</IonLabel>
                </IonTabButton>
            </IonTabBar>
      </IonTabs>
      {/* </MemoriesContextProvider> */}
    </IonReactRouter>
  </IonApp>
  )
};

export default App;
