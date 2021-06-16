import React, { useContext } from 'react'
import './App.css'
import { Route, Switch, Router} from 'react-router-dom'
import { syncHistoryWithStore } from 'mobx-react-router'
import { createBrowserHistory } from 'history'

import { CarsContext } from './Context/CarsContext'
import CarPage from './Pages/Car/Car'
import ModelPage from './Pages/Model/ModelPage'
import SingleModel from './Pages/Model/SingleModel'
import Navigation from './components/Navigation'
import Search from './Pages/Search/Search'
import SearchResults from './Pages/Search/SearchResults'
import Form from './components/Form'
import EditForm from './components/EditForm'

export default function App () {
    const store = useContext(CarsContext);
    const browserHistory = createBrowserHistory();
    const history = syncHistoryWithStore(browserHistory, store.routing);
    return(
        <Router history={history}>
            <Navigation/>
            <Search/>
            <Switch>
                <Route path = '/' exact component={CarPage}/>
                <Route path = '/car/:id' exact component={SingleModel}/>
                <Route path = '/ModelPage' exact component={ModelPage}/>
                <Route path = '/SearchResults' exact component={SearchResults}/>
                <Route path = '/Form' exact component={Form}/>
                <Route path = '/EditForm' exact component={EditForm}/>
            </Switch>
        </Router>
    )
}