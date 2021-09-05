import React from 'react';
import { IonSegment, IonLabel, IonSegmentButton} from "@ionic/react";

const InputController: React.FC<{selectedValue:  'cmkg'|'ftlbs'}> = props =>{
    return (
        <IonSegment>
            <IonSegment value="cmkg">
                <IonSegmentButton value="cmkg">
                    <IonLabel>cm/kg</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="ftlbs">
                    <IonLabel>ft/lbs</IonLabel>
                </IonSegmentButton>
            </IonSegment>
        </IonSegment>
    );
}

export default InputController;