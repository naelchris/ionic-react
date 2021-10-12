import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonRow,
    IonGrid,
    IonCol,
    IonAvatar,
    useIonActionSheet,


  } from '@ionic/react';
  
import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, homeOutline, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp,
    wine,
    pin,
    wifi,
    warning,
    walk,
    female,
    male


} from 'ionicons/icons';
import './swipper.css';
import { Component, ComponentProps, useContext , useEffect, useState} from 'react';
import GebetanContext, { Gebetan } from '../data/gebetan-context';
import ReactLoading from "react-loading";




interface swiperInterface{
    name: string;
    data: Gebetan[];
  }

const Swipper: React.FC<swiperInterface> = ({name, data}) => {

    const GebetanCtx = useContext(GebetanContext)

    //action sheet
    const [present, dismiss] = useIonActionSheet();


    const [done, setDone] = useState(false);  
    
    const isHome =  name === 'home'


    
    const loadingTimer = () => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
              .then((response) => response.json())
              .then((json) => {
                
                setDone(true);
              });
        }, 2000);
    }

    useEffect(() => {
        loadingTimer()
      }, []);

    return (

             
            <IonContent>

    {!done ? (
        <IonContent className="loading-container">
            <ReactLoading
            type={"bubbles"}
            color={"#000000"}
            height={100}
            width={100}
            className="loading-item"
            />
        </IonContent>
      ) : (
        
        data.map((gebetan,index) => { 
            return (

            
            <IonItemSliding key={index}>

                

                    <IonItem>
                        
                        <IonGrid>
                            <IonRow>
                                
                                <IonCol className="avatar-container" size-lg>
                                    <IonAvatar>
                                        <img src={gebetan.photo} alt="" />
                                    </IonAvatar>
                                </IonCol>

                                <IonCol>
    
                                    <IonRow className="Gebetan-Name">
                                        {gebetan.name}
                                    </IonRow>
                                    <IonRow className="Gebetan-desc">
                                        Aku sayang kamu!
                                    </IonRow>

                                    <IonRow>
                                        <IonIcon icon={gebetan.gender === 'female'? female : male}/>
                                        <IonLabel>{gebetan.gender}</IonLabel>
                                    </IonRow>
                            
                                </IonCol>
                            </IonRow>
                        </IonGrid>

                    </IonItem>


                { isHome ? (
                    <IonItemOptions side="end" >
                        <IonItemOption color="white" expandable>
                            <IonAvatar onClick={ () => {
                                GebetanCtx.UpdateTargetGebetan(gebetan)
                                setDone(false)
                                loadingTimer()
                                    
                                }}>
                                <img src={"data:image/png;base64,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"} alt="" />
                            </IonAvatar>
                        </IonItemOption>
                    </IonItemOptions>
                ): (
                    <IonItemOptions side="end" >
                        <IonItemOption color="white" expandable>
                        
                            <IonAvatar onClick={() => { 
                               present({
                                buttons: [
                                    { text: 'Yakin, hapus dari daftar.', handler: () => {
                                        GebetanCtx.DeleteTargetGebetan(gebetan)
                                        setDone(false)
                                        loadingTimer()
                                    }}, 
                                    {text:"Gak yakin, kembali." , handler: ()=>{}}
                                    
                                ],
                                header: 'Yakin gak gebet dia lagi ?'

                              })
                            }}>
                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-wQHcpACvDqSjOmRXqlRlTkzx7GzBzmYxqc6eRIsIOpjgp_CTLSSr_0NkI_1t5pcwRtk&usqp=CAU"} alt="" />
                            </IonAvatar>
                            
                        </IonItemOption>
                    </IonItemOptions>
                )}



                
            </IonItemSliding>
            )
        })

        
      )}
                


{/* 
                {GebetanCtx.gebetan.map((gebetan,index) => { 
                    return (
                    <IonItemSliding key={index}>

                        <IonItemOptions side="start">
                            <IonItemOption color="danger" expandable>
                                Delete
                            </IonItemOption>
                        </IonItemOptions>

                            <IonItem>
                                
                                <IonGrid>
                                    <IonRow>
                                        
                                        <IonCol className="avatar-container" size-lg>
                                            <IonAvatar>
                                                <img src={gebetan.photo} alt="" />
                                            </IonAvatar>
                                        </IonCol>

                                        <IonCol>
            
                                            <IonRow className="Gebetan-Name">
                                                {gebetan.name}
                                            </IonRow>
                                            <IonRow className="Gebetan-desc">
                                                Aku sayang kamu!
                                            </IonRow>

                                            <IonRow>
                                                <IonIcon icon={female}/>
                                                <IonLabel>{gebetan.gender}</IonLabel>
                                            </IonRow>
                                    
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>

                            </IonItem>


                        { isHome && (
                            <IonItemOptions side="end" >
                                <IonItemOption color="tertiary" expandable>
                                    <IonButton onClick={ () => {
                                        GebetanCtx.UpdateTargetGebetan(gebetan)
                                        
                                        
                                        }}>
                                        Love
                                    </IonButton>
                                </IonItemOption>
                            </IonItemOptions>
                        )}



                        
                    </IonItemSliding>
                    )
                })} */}
            </IonContent>

            

            
      

        
    )
}

export default Swipper
