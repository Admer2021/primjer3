import React,{ useEffect, useState, useContext } from 'react'
import { useObserver } from 'mobx-react'
import { action, runInAction } from 'mobx'

import api from '../../api/cars'
import { CarsContext } from '../../Context/CarsContext'



export default function Car() { 


    const [isLoading, setisLoading] = useState(true); 
    const store = useContext(CarsContext);
    let availableCars = store.cars;
    const { push } = store.routing;

    const clickHander = e => {
        e.preventDefault();
        availableCars.sort((a, b) => {
            return 0.5 - Math.random()
        })
    }
    
    const handleClick = id => {
        push(`/car/${id}`)
    }

    const loadCars = action (async () => {
        try {
            const res = await api.get('/cars');
            const { data } = res;
            runInAction(() => store.cars = data);
        } catch (error) {
            console.log(error);
        } finally{
            setisLoading(false);
        }
    })


    useEffect(() => {
       loadCars()
    },[loadCars])

    return useObserver(() => (

        <div>
            <h3>Cars</h3>
            <button onClick={clickHander}>Sort</button>
            
            {
                isLoading ? <p>Loading....</p> : availableCars.map((car, index) => (
                    <ul key={index}>
                       <li key={index} onClick={() => handleClick(car.id)}>{car.maker} </li>
                    </ul>
                   

                )) 
            }
        </div>
    )
    )
}