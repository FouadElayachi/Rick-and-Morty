import {IState} from "../sharedServices/stateService";
import {IAction} from "../sharedServices/actionService";

export const reducer = (state:IState, action:IAction): IState => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {...state, episodes: action.payload};
        default:
            return state;
    }
}