import { IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";
import React from "react";
import {LoadScript,GoogleMap,Marker} from '@react-google-maps/api';
import { Directory, Filesystem } from "@capacitor/filesystem";

const MemoryItem: React.FC<{ id: string, base64Url: string, title: string, lat:number, long:number }> = props => {
    const containerStyle = {
        width: '100%',
        height: '300px'
    }
    return (
        <IonRow key={props.id}>
                <IonCard>
                    <img src={props.base64Url} alt={props.title} />
                    <LoadScript googleMapsApiKey='AIzaSyDM_VDLKyk0DEifuqJWgTHow4Ij7PxEOys'>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={{ lat: props.lat, lng: props.long }}
                            zoom={14}>
                            <Marker position={{ lat: props.lat, lng: props.long }} />
                        </GoogleMap>
                    </LoadScript>
                    <IonCardHeader>
                        <IonCardTitle>{props.title}</IonCardTitle>
                    </IonCardHeader>
                </IonCard>
        </IonRow>
    );
}

export default MemoryItem;