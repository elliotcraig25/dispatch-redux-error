import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PageOne from './components/PageOne/PageOne'
import PageTwo from './components/PageTwo/PageTwo';
import PageThree from './components/PageThree/PageThree';

export default (
    <Switch>
        <Route path="/pagethree" component={PageThree}/>
        <Route path="/pagetwo/:id" component={PageTwo}/>
        <Route exact path="/" component={PageOne}/>
    </Switch>
    
)