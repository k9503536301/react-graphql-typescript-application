// import { Reducer } from 'redux';
import { IAppState, appActions } from '../types';

const initialState: IAppState = {
    location: '',
    isEmptyLocation: true,
    error: false
};

export const reducer = (state:IAppState = initialState, action:appActions) =>{
        switch (action.type) {
            case 'ADD_LOCATION':
                return {
                    location: action.payload,
                    isEmptyLocation: false,
                    error: false
                };

            default:
                return state;
        }
};