import React, {useState, useContext} from 'react'
import { CarsContext } from '../Context/CarsContext';
import { action, runInAction } from 'mobx'
import api from '../api/cars'

export default function Form () {
    const store = useContext(CarsContext);
    const { location, push } = store.routing;
    const { id } = location.state;

    const selected = store.cars.filter(car => car.id == id).slice().map(car => car);
    
    const [maker, setMaker] = useState(selected[0].maker);
    const [name, setName] = useState(selected[0].name);

    const handleSubmit = action ( async (e) => {
        e.preventDefault();
        const car = {
            id: +Math.random().toFixed(2),
            maker: maker.toUpperCase(),
            name: name.toUpperCase()
        }
        try {
            const res = await api.put(`/cars/${id}`, car)
            const { data } = res;
            runInAction(() => store.cars = data);
        } catch (error) {
            console.log(error);
        } finally{
            push('/')
        }
    })

    return(
        <div>
            <h3>Edit Details</h3>
            <form onSubmit={handleSubmit}>
                <div style={{display: 'flex'}}>
                    <p>Maker</p>
                    <input
                        placeholder = 'Enter the name of Maker'
                        value = {maker}
                        onChange={e => setMaker(e.target.value)}
                    />
                </div>
                <div style={{display: 'flex',margin:'10px 0 '}}>
                <p>Name </p>
                <input
                    placeholder = 'Enter the model name'
                    value = {name}
                    onChange={e => setName(e.target.value)}
                />
                </div>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}