import React, {createContext, useReducer} from "react";
import {IState} from "../sharedServices/stateService";
import {reducer} from "../reducers/reducer";

const initialState: IState = {
    episodes:[],
    favourites:[]
};

export const Store = createContext<IState | any>(initialState);

export const StoreProvider = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>;
}