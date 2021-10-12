import React, {useState} from "react";
import GebetanContext ,{Gebetan} from "./gebetan-context";


const GebetanContextProvider : React.FC = props => {
    const [gebetan, setGebetan] = useState<Gebetan[]>([
        {
            id:'g1',
            name:'jessica',
            gender:'female',
            photo:'https://i.redd.it/zcvjy7fs66z21.jpg',
        },
        {
            id:'g2',
            name:'Nayeon',
            gender:'female',
            photo:'https://pbs.twimg.com/media/EKN3H87UYAAGwCO.jpg',
        },
        {
            id:'g3',
            name:'Neyon',
            gender:'female',
            photo:'https://pbs.twimg.com/media/EKN3H87UYAAGwCO.jpg',
        },
        {
            id:'g4',
            name:'Meiyon',
            gender:'female',
            photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCPkTOTYFbnHQSTKqYhhtlM49CeC5ZH3KUw&usqp=CAU',
        },
        {
            id:'g5',
            name:'zuyon',
            gender:'female',
            photo:'https://i.pinimg.com/originals/bc/97/46/bc9746462d888e793d313724520db11b.jpg',
        }
    ])

    const [targetGebetan, setTargetGebetan] = useState<Gebetan[]>([

    ])

    const UpdateTargetGebetan = (value:Gebetan) => { // value:gebetann
        let GebetanList = gebetan
        let Target = targetGebetan

        //delete from gebetan
        for (let i = 0;i < GebetanList.length;i++){
            if (GebetanList[i] === value){
                GebetanList.splice(i,1)
            }
        }

        //insert to target gebetan
        Target = Target.concat(value)

        setTargetGebetan(Target)
        setGebetan(GebetanList)
    }
    const DeleteTargetGebetan = (value:Gebetan) => {
        let target = targetGebetan

        //delete from target gebetan
        for (let i = 0;i < target.length;i++){
            if (target[i] === value){
                target.splice(i,1)
            }
        }
        setTargetGebetan(target)
    }
    const DeleteGebetan = () => {}

    return (
        <GebetanContext.Provider value={{
            gebetan,
            targetGebetan,
            DeleteGebetan,
            UpdateTargetGebetan,
            DeleteTargetGebetan
        }}>

            {props.children}
        </GebetanContext.Provider>
    )
}

export default GebetanContextProvider