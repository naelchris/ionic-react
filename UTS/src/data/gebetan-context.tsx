import React from "react"

export interface Gebetan{
    id :string,
    name : string,
    gender : string,
    photo : string
}
  
interface Context {
    gebetan: Gebetan[],
    targetGebetan: Gebetan[],
    DeleteGebetan: () => void,
    UpdateTargetGebetan: (value:Gebetan) => void,
    DeleteTargetGebetan: (value:Gebetan) => void
}
  
const GebetanContext = React.createContext<Context>({
    gebetan: [],
    targetGebetan: [],
    DeleteGebetan: () => {},
    UpdateTargetGebetan: () =>{},
    DeleteTargetGebetan: () => {}
})

export default GebetanContext
  