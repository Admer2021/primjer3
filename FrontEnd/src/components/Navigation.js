import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation () {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <ul className="navbar-nav mr-auto" style={{display: 'flex', listStyleType: 'none'}}>
                    <li className="nav-link" style={{margin: '0 10px'}}>
                        <Link to='/'> Cars </Link>
                    </li>
                    <li className="nav-link" style={{margin: '0 10px'}}>
                        <Link to='/ModelPage'> Models </Link>
                    </li>
                    <li className="nav-link" style={{margin: '0 10px'}}>
                        <Link to='/Form'> Add </Link>
                    </li>
                </ul>
            </nav>
                <hr />
        </div>
    )
}