
import { IonFab, IonFabButton, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton, IonButtons, IonIcon, IonLabel, IonContent, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader } from '@ionic/react';
import { add } from 'ionicons/icons';
import MemoryItem from '../components/MemoryComp'

import './style.css';

import axios, {AxiosResponse} from "axios";

import MemoriesContext from "../data/memorycontext";
import { useContext, useEffect, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';

import {  getDocs, getFirestore } from 'firebase/firestore';
import { getStorage } from  'firebase/storage';

interface MemoryData { id: string, image_path: string, title: string, type: string, base64url: string,lat: string, long: string}

const BadMemories: React.FC = () => {

    const db = getFirestore();
    const storage = getStorage();


    const [data,setData] = useState<AxiosResponse>();
    const [memories,setMemories] = useState<Array<MemoryData>>([]);
    const urlGetData = "http://localhost/api/select_all_memories.php";
    const allBadMemories = memories.filter(allBadMemories => allBadMemories.type == "bad");
    useEffect(() => {
        // axios.get(urlGetData).then((data) => {
        //   setData(data);
        //   console.log(data);
        //   setMemories(data?.data.memories);
        // });


        const getData = async() => {
            const querySnapshot = await getDocs(collection(db, "memories"));
            console.log(querySnapshot)

            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().type}`)
                console.log(doc)

                if(doc.data().type === 'bad'){
                    let memory : MemoryData = {
                        id: doc.data().id,
                        title: doc.data().title,
                        type: doc.data().type,
                        image_path: "",
                        base64url: doc.data().imgUrl,
                        lat: String(doc.data().lat),
                        long: String(doc.data().lng)
                    }
                    setMemories([...memories, memory])
                    //setBadMemories((oldArray : any) => [...oldArray, memory])
                }
            })
        }

        getData();


      }, []);
    return (
        <IonPage>
            <IonFab vertical="bottom" class="fabButton" horizontal="end" slot="fixed">
                <IonFabButton routerLink={'/newMemory'}>
                    <IonIcon icon={add} />
                </IonFabButton>
            </IonFab>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Bad Memories
                    </IonTitle>
                    <IonButton slot="end" class="headerButton" routerLink={'/newMemory'}>
                        <IonIcon icon={add} />
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    {allBadMemories.length === 0 && (
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <h2>No bad memories found</h2>
                            </IonCol>
                        </IonRow>
                    )}
                    {allBadMemories.map(memory => (
                        <MemoryItem key={memory.id} id={memory.id} base64Url={memory.base64url} title={memory.title} lat={parseInt(memory.lat)} long={parseInt(memory.long)}/>
                    ))}
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default BadMemories;