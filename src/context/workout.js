import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state,action) => {
    switch(action.type){
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((workout)=>workout._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const WorkoutsContextProvider = (props) => {

    const [state, dispatch]= useReducer(workoutsReducer, {
        workouts: null
    })
    
    // dispatch({type: 'CREATE_WORKOUTS',PAYLOAD: [{},{}]})

    return <WorkoutsContext.Provider value={{...state,dispatch}}>
        {props.children}
    </WorkoutsContext.Provider>
}