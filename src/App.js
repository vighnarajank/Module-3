import GoogleLog from './Component/GoogleLog';
import FBLogin from './Component/FBLogin';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Link to='/google'>Google Login</Link><br/>
      <Link to='/facebook'>Facebook Login</Link>
      
        <Switch>
          <Route exact path="/google"  component={GoogleLog} />
          <Route path="/facebook"  component={FBLogin} />
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
