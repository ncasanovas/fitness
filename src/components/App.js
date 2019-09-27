import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Exercises from '../pages/Exercises';
import ExercisesNew from '../pages/ExercisesNew';
import NotFound from '../pages/NotFound';


const App = () => (
    <BrowserRouter> 
        <Switch>
            <Route exact path="/exercises" component={Exercises}/>
            <Route exact path="/exercises/New" component={ExercisesNew}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App;