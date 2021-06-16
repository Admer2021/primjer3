import React,{useState, useContext} from 'react'
import { CarsContext } from '../../Context/CarsContext';

export default function Search () {
    const [input, setInput] = useState('')
    const store = useContext(CarsContext);
    const { push } = store.routing;

    const handleSubmit = e => {
        e.preventDefault();
        push('/SearchResults',{input: input.toUpperCase()})
        setInput('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder = 'Type to search...'
                value = {input}
                onChange={e=> setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
        </form>
    )
}