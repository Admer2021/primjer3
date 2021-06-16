import React,{useContext} from 'react';
import {useObserver} from 'mobx-react'
import { CarsContext } from '../../Context/CarsContext';

export default function ModelPage () {
    let store = useContext(CarsContext);
    let allCars = store.cars;
    
    const clickHander = e => {
        e.preventDefault();
        allCars.sort((a,b)=> {
            return 0.5 - Math.random()
        })
    }

    return useObserver(() => (
        <div>
            <h3>Models</h3>
            <button onClick={clickHander}>Sort</button>
            {
                allCars.slice().map((car, index) => (
                    <ul key={index}>
                        <li key={index}>{car.maker} {car.name}</li>
                    </ul>
                ))
            }
        </div>
    )
    )
}