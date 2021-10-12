import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import React from 'react';

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
import Home from './pages/Home';
import GebetanContextProvider from './data/gebetanContextProvider';
import Target from './pages/Target';
import ExploreContainer from './components/ExploreContainer';
import Profile from './pages/Profile';


const App: React.FC = () => {


  return (
    
    <IonApp >
      <GebetanContextProvider>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/" exact={true}>
                <Redirect exact from="/" to="/home" />
              </Route>

              <Route path="/home" exact={true}>
                <Home />
              </Route>
              <Route path="/target" exact={true}>
                <Target />
              </Route>

              <Route path="/profile" exact={true}>
                <Profile />
              </Route>
            </IonRouterOutlet>

          </IonSplitPane>
        </IonReactRouter>
      </GebetanContextProvider>

      
    </IonApp>
  );
};

export default App;
