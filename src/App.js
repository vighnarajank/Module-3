import GoogleLog from './Component/GoogleLog';
import FBLogin from './Component/FBLogin';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
// import LinkedInLogin from './Component/LinkedInLogin';

function App() {
  return (
    
    <Router>
    <div className="App">
      <Link to='/google'>Google Login</Link><br/>
      <Link to='/facebook'>Facebook Login</Link><br/>
      {/* <Link to='/linkedin'>LinkedIn Login</Link> */}
      
        <Switch>
          <Route exact path="/google"  component={GoogleLog} />
          <Route exact path="/facebook"  component={FBLogin} />
          {/* <Route exact path="/linkedin"  component={LinkedInLogin} /> */}
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
