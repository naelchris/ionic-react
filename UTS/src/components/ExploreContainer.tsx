import './ExploreContainer.css';
import { IonAvatar } from '@ionic/react';


const ExploreContainer: React.FC = () => {
  return (
    <div className="container">
      <IonAvatar >
        <img src="" alt="" />
      </IonAvatar>
      <strong>Nathanael Christianto Amadea</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;
