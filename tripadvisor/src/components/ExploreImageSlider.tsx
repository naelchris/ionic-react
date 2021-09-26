import { IonButton } from '@ionic/react';
import './ExploreImageSlider.css'

interface ExploreLocationImages{
  title: string
  class: string
}
const ExploreLocationImages: React.FC<ExploreLocationImages> = (props) => {
  return (
    <div className={`explore-location-images explore-location-images-${props.class}`}>
      <div className="explore-location-images-title">
          <h1>{props.title}</h1>
          <p className="pricing">from $150/night</p>
          <IonButton size="small" color="light">Book</IonButton>
      </div>
    </div>
  )
}

interface ExploreImageSlider{
  images: Array<Images>
}
interface Images{
  title: string
  class: string
}
const ExploreImageSlider: React.FC<ExploreImageSlider> = (props) => {
  function iterateTitles() {
    let locationImages = [];
    for (let i = 0; i < props.images.length; i++) {
      locationImages.push(<ExploreLocationImages key={props.images[i].title} title={props.images[i].title} class={props.images[i].class}/>);
    }
    return locationImages;
  }
  return (
    <div className='explore-content-images-container'>
      {iterateTitles()}
  </div>
  );
};

export default ExploreImageSlider;
