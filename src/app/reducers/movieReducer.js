import { ActionTypes } from "../actionType";

const initialState = {
    loading: false,
    populerFilms :[],
    genres :[]
}

export const movieReducer = (state=initialState,action)=>{
   switch (action.type){
    case ActionTypes.SET_MOVİES :
        return{
           ...state,
           populerFilms:action.payload,
        };
        case ActionTypes.GET_GENRES :
            return{
                ...state,
                genres:action.payload,

            }
        default:
            return state;
   }
};