
import { IonFab, IonFabButton, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton, IonButtons, IonIcon, IonLabel, IonContent, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader } from '@ionic/react';
import { add } from 'ionicons/icons';
import MemoryItem from '../components/MemoryComp'

import './style.css';

import MemoriesContext from "../data/memorycontext";
import { useContext } from 'react';

const BadMemories: React.FC = () => {
    const memoriesCtx = useContext(MemoriesContext);
    const badMemories = memoriesCtx.memories.filter(memory => memory.type == 'bad');
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
                    {badMemories.length === 0 && (
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <h2>No bad memories found</h2>
                            </IonCol>
                        </IonRow>
                    )}
                    {badMemories.map(memory => (
                        <MemoryItem key={memory.id} id={memory.id} base64Url={memory.base64Url} title={memory.title}/>
                    ))}
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default BadMemories;