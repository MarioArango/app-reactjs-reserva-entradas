import React from 'react'

import Badges from './pages/Badges'
import BadgeNew from './pages/BadgeNew'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/badges' component={Badges} />
                <Route exact path='/badge/new' component={BadgeNew} />
            </Switch>
        </BrowserRouter>
    )
}

export default App