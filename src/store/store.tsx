import React, {createContext} from "react";
import {IState} from "../sharedServices/stateService";

const initialState: IState = {
    episodes:[],
    favourites:[]
};

export const Store = createContext<IState>(initialState);

export const StoreProvider = (props: any) => {
    return <Store.Provider value={initialState}>{props.child}</Store.Provider>;
}