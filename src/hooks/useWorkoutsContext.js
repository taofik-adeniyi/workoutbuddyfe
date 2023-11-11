import { useContext } from 'react'
import { WorkoutsContext } from "../context/workout";


export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)
    if(!context){
        throw Error('useWorkoutsContext must be used inside of a WorkoutContextProvider')
    }
    return context
}