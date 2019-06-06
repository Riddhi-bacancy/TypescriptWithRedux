import {Reducer} from 'redux';
export interface IState {
    age : number,
    history : number[]
}
const initialState  = {
    age:20,
    history:[]
};

const myReducer:Reducer<any,any> = (state = initialState,action: any) => {
    const newState = { ...state };
    if(action.type === 'AGE_UP'){
            newState.history.push(newState.age += action.payload)
       
    }
    else if(action.type === 'AGE_DOWN'){
            newState.history.push(newState.age -= action.payload)
    }
    return newState;
}


export default myReducer;