import React from 'react'
import { useLocalObservable } from 'mobx-react'
import { RouterStore } from 'mobx-react-router'

export const CarsContext = React.createContext();
const routingStore = new RouterStore();

export const CarsProvider = ({children}) => {
    const carsStore = useLocalObservable(() => ({
        cars: [],
        routing: routingStore
    }))
    return <CarsContext.Provider value={carsStore}>{children}</CarsContext.Provider>
}

