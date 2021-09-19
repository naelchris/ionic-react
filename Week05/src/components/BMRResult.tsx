import { IonRow, IonCol, IonCard, IonCardContent, IonGrid } from "@ionic/react"

interface BmiResult{
    resultBMR: number | undefined
    // sedentary: number | undefined
    // exercise1: number | undefined
    // exercise2: number | undefined
    // dailyExercise: number | undefined
    // intenseExercise: number | undefined
}

const BmrResult: React.FC<BmiResult> = (props) => {
    if(props.resultBMR == undefined){
        return null
    }else{
        return(
            <IonRow>
                <IonCol>
                    <IonCard>
                        <IonCardContent className="ion-text-center">
                            <h2>BMR = {props.resultBMR} calories/day</h2>
                            <h2>daily calories need based on activity level</h2>
                            <IonGrid>
                                <IonRow>
                                    <IonCol>
                                        <h2>ActivityLevel</h2>
                                    </IonCol>
                                    <IonCol>
                                        <h2>Calories</h2>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
        )
    }
}

export default BmrResult