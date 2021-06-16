import React,{useContext} from 'react'
import {useParams} from 'react-router-dom'
import {useObserver} from 'mobx-react'

import { CarsContext } from '../../Context/CarsContext';

export default function SingleModel () {
    const {id} = useParams();
    const store = useContext(CarsContext);
    const { push } = store.routing;

    let foundItem = store.cars.filter(car => car.id == id);

    return useObserver(() => (
        <>
        <h3>Models</h3>
        {
            foundItem.slice().map(car => (
                <ul key={car.id}>
                    <li key={car.id}>
                        {car.maker} {car.name}
                        <span style={{marginLeft: '50px', color: 'blue'}} onClick={() => push('/EditForm', { id: id })}>
                            Edit
                        </span>
                    </li>
                </ul>
            ))
        }
        </>
    ))
}