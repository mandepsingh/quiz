import React from 'react';
import Topnav from './Topnav.js';
import QuizInd from './QuizInd.js';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';


const App= () =>{
    
    return (
        <Router>
            <Switch>
                <Route exact path="/" component= {withRouter(Topnav)}/>
                <Route exact path="/quizLit" component={withRouter(QuizInd)} />
                <Route exact path="/quizLan" component={withRouter(QuizInd)} />
                
           </Switch>
       </Router>

    );
}

export default App;