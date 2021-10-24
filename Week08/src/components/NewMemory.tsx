import { IonCol, IonRow, IonButton, IonIcon, IonLabel, IonContent } from "@ionic/react"
import { camera } from "ionicons/icons"
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera"
import { useState } from "react"
import { Directory, Filesystem} from "@capacitor/filesystem"
import {base64FromPath} from "@ionic/react-hooks/filesystem"

const NewMemories: React.FC = () => {

    const [takenPhoto, setTakenPhoto] =useState<{
        path: string;
        preview: string;
    }>();


    const takePhotoHandler = async () => {
            const image = await Camera.getPhoto({
                resultType: CameraResultType.Uri,
                source: CameraSource.Camera,
                quality: 80,
                width: 500
            });
            console.log(image)

            if(!image || !image.path || !image.webPath ){
                return ;
            }

            setTakenPhoto({
                path: image.path,
                preview: image.webPath
            });
    }

    const addMemoryHandler = async () => {
        const fileName = new Date().getTime() +  '.jpeg';
        const base64 = await base64FromPath(takenPhoto!.preview)
        await Filesystem.writeFile({
            path: fileName,
            data: base64,
            directory: Directory.Data
        });
    }



    return (

        <IonContent className="ion-text-center">
            <IonRow>
                <IonCol>
                    <div className="image-preview">
                        {!takenPhoto &&  <h3>No Photo Chosen</h3>}
                        {takenPhoto && <img src={takenPhoto.preview} alt="preview"/>}
                    </div>
                    <IonButton fill="clear" onClick={takePhotoHandler}>
                        <IonIcon icon={camera} slot="start"></IonIcon>
                        <IonLabel>Take Photo</IonLabel>
                    </IonButton>
                </IonCol>
            </IonRow>

            <IonRow className="ion-margin-top">
                <IonCol className="ion-text-center">
                    <IonButton onClick={addMemoryHandler}>Add Memory</IonButton>
                </IonCol>
            </IonRow>
        </IonContent>
        
        
    )
}

export default NewMemories