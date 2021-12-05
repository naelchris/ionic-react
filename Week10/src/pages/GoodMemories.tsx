import { IonFab, IonFabButton, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton, IonButtons, IonIcon, IonLabel, IonContent, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader } from '@ionic/react';
import { add } from 'ionicons/icons';
import MemoryItem from '../components/MemoryComp'

import './style.css';

import axios, {AxiosResponse} from "axios";

import MemoriesContext from "../data/memorycontext";
import { useContext, useEffect, useState } from 'react';
import { url } from 'inspector';

interface MemoryData { id: string, image_path: string, title: string, type: string, base64url: string,lat: string, long: string}

const GoodMemories: React.FC = () => {
    const [data,setData] = useState<AxiosResponse>();
    const [memories,setMemories] = useState<Array<MemoryData>>([]);
    const urlGetData = "http://localhost/api/select_all_memories.php";
    const allGoodMemories = memories.filter(allBadMemories => allBadMemories.type == "good");
    useEffect(() => {
        axios.get(urlGetData).then((data) => {
          setData(data);
          console.log(data);
          setMemories(data?.data.memories);
        });
      }, []);

    return (
        <IonPage>
            <IonFab vertical="bottom" class="fabButton" horizontal="end" slot="fixed" >
                <IonFabButton routerLink={'/newMemory'}>
                    <IonIcon icon={add} />
                </IonFabButton>
            </IonFab>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Good Memories
                    </IonTitle>
                    <IonButton slot="end" class="headerButton" routerLink={'/newMemory'} >
                        <IonIcon icon={add} />
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    {allGoodMemories.length === 0 && (
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <h2>No good memories found</h2>
                            </IonCol>
                        </IonRow>
                    )}
                    {allGoodMemories.map(memory => (
                        <MemoryItem key={memory.id} id={memory.id} base64Url={memory.base64url} title={memory.title} lat={parseInt(memory.lat)} long={parseInt(memory.long)}/>
                    ))}
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default GoodMemories;