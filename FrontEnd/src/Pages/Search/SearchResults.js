import { useContext, useEffect } from 'react';
import {useObserver} from 'mobx-react'

import api from '../../api/cars'
import { action, runInAction } from 'mobx'
import { CarsContext } from '../../Context/CarsContext';

export default function SearchResults () {
    const store = useContext(CarsContext);
    const { location, } = store.routing;
    const { input } = location.state;
    
    let foundItem = store.cars.filter(car => car.maker == input || car.name == input);
    
    //handle Search
    const handleSearch = action(async () => {
        try {
            const res = await api.get(`/cars?car.maker=${input}`)
            const { data } = res;
            runInAction(() => store.cars.push(data));
        } catch (error) {
            console.log(error)
        }
    })

    useEffect(() => {
        handleSearch()
    },[handleSearch])

    return useObserver(() => (
        <div>
            {foundItem.slice().map(car => (
                <ul key={car.id}>
                    <li key={car.id}>{car.maker} {car.name}</li>
                </ul>
                ))}

            {foundItem.length === 0 && <h3>Oops! Not Found</h3>}
        </div>
    )
    )
}