import './ExploreHeader.css';


import { IonCol,IonSearchbar , IonRow } from '@ionic/react';
import { FaSearch } from "react-icons/fa";

import { MdLocalHotel } from "react-icons/md";
import { GrTicket, GrChatOption } from "react-icons/gr";
import { GiKnifeFork } from "react-icons/gi";

interface ExploreHeaderButton{
    name: string
}
const ExploreHeaderButton: React.FC<ExploreHeaderButton> = (props) => {
    function setIcons(){
        if(props.name == 'Hotels'){
            return <MdLocalHotel className="explore-header-icons"/>
        }
        else if(props.name == 'Things to do'){
            return <GrTicket className="explore-header-icons"/>
        }
        else if(props.name == 'Restaurants'){
            return <GiKnifeFork className="explore-header-icons"/>
        }
        else{
            return <GrChatOption className="explore-header-icons"/>
        }
    }
    return (
        <div className="explore-header-button">
            {setIcons()}
            {props.name}
        </div>
    )
}

const ExploreHeader: React.FC = () => {
  return (
    <IonCol size='12' className='explore-header'>
        <div className="explore-header-button-container">
            <ExploreHeaderButton name={'Hotels'}/>
            <ExploreHeaderButton name={'Things to do'}/>
            <ExploreHeaderButton name={'Restaurants'}/>
            <ExploreHeaderButton name={'Forums'}/>
        </div>

        <IonRow>

            <IonCol size='12' className='search-header-container'>
                <div className="search-form">
                    <FaSearch className='search-icons'/>
                     Search Me ?
                </div>
            
            </IonCol>

        </IonRow>

    


    </IonCol>
    
  );
};

export default ExploreHeader;