import { IonGrid, IonRadio, IonRow, IonCol, IonItem, IonLabel, IonInput, IonAlert, IonRadioGroup } from "@ionic/react"
import { useRef, useState } from "react"
import BmiResult from './BmiResult';
import BMIControls from "./BMIControls";
import InputControl from "./InputControl";
import BmrResult from "./BMRResult";

interface BMRCalculator { }

const BMRCalculator: React.FC<BMRCalculator> = () => {
    const [calculatedBMR, setCalculatedBMR] = useState<number>();
    const [statusBMI, setStatusBMI] = useState<string>();
    const weightInputRef = useRef<HTMLIonInputElement>(null);
    const heightInputRef = useRef<HTMLIonInputElement>(null);
    const age = useRef<HTMLIonInputElement>(null);
    const [error, setError] = useState<string>();
    const [calcUnits, setCalcUnits] = useState<'cmkg' | 'ftlbs'>('cmkg');
    const [selected, setSelected] = useState<string>('female');

    const calculateBMI = () => {
        const enteredWeight = weightInputRef.current!.value;
        const enteredHeight = heightInputRef.current!.value;
        const enteredAge = age.current!.value;
        const enteredGender = selected;


        if (!enteredWeight || !enteredHeight || !enteredAge || +enteredWeight <= 0 || +enteredHeight <= 0 || +enteredAge <= 0 ||
            typeof (enteredWeight) == 'number' || typeof (enteredHeight) == 'number' || typeof (enteredAge) == 'number'
        ) {
            setError('Please enter a valid (non-negative) input number');
            return;
        }

        let bmr = 0;
        // Change bmi based on calcUnits
        if (calcUnits === 'ftlbs') {
            if (selected === 'male') {
                bmr = 66 + (13.7 * +enteredWeight / 2.2) + (5 * +enteredHeight / 0.0328) - (6.8 * +enteredAge)
            } else {
                bmr = 665 + (9.6 * +enteredWeight / 2.2) + (1.8 * +enteredHeight / 0.0328) - (4.7 * +enteredAge)
            }
        }
        else {
            if (selected === 'male'){
                bmr = 66 + (13.7 * +enteredWeight) + (5 * +enteredHeight) - (6.8 * +enteredAge)
            }else{
                bmr = 66 + (9.6 * +enteredWeight) + (1.8 * +enteredHeight) - (4.7 * +enteredAge)
            }
        }

        setCalculatedBMR(bmr);
    }

    const resetCalculation = () => {
        weightInputRef.current!.value = '';
        heightInputRef.current!.value = '';

        setCalculatedBMR(undefined);
    }

    const clearError = () => {
        setError('');
    }

    const selectCalcUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') => {
        setCalcUnits(selectedValue)
    }

    return (
        <>
            <IonAlert
                isOpen={!!error}
                message={error}
                buttons={[
                    { text: 'Okay', handler: clearError }
                ]}
            />
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <InputControl resetCalculation={resetCalculation} selectedValue={calcUnits} onSelectValue={selectCalcUnitHandler} />
                        <IonItem>
                            <IonLabel position="floating"> Age</IonLabel>
                            <IonInput ref={age}></IonInput>
                        </IonItem>
                        <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel>Female</IonLabel>
                                        <IonRadio slot="start" value="female" />
                                    </IonItem>
                                </IonCol>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel>Male</IonLabel>
                                        <IonRadio slot="start" value="male" />
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                        </IonRadioGroup>


                        <IonItem>
                            <IonLabel position="floating">Tinggi Badan ({calcUnits === 'cmkg' ? 'cm' : 'feet'})</IonLabel>
                            <IonInput ref={heightInputRef}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Berat Badan ({calcUnits === 'cmkg' ? 'kg' : 'lbs'})</IonLabel>
                            <IonInput ref={weightInputRef}></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <BMIControls onCalculate={calculateBMI} onReset={resetCalculation} />
                <BmrResult resultBMR={calculatedBMR}/>
            </IonGrid>
        </>
    )
}

export default BMRCalculator;