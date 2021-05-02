import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom';



import Tickets from './pages/Tickets/Tickets'
import Overview from './pages/Overview/index'
import Ideas from './pages/Ideas/Ideas'
import Contacts from './pages/Contacts/Contacts'


import Sidebar from './containers/Sidebar/Sidebar'
import Toolbar from './containers/Toolbar'

import './assets/styles/main.scss'
import Table from './containers/Table/Table';
// import Overview from './pages/Overview';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar/>
        
          {/* <Toolbar/> */}

        <div className="content">



          <Switch>
            <Route path='/tickets' component={Tickets}/>
            <Route path='/overview' component={Overview}/>
            <Route path='/ideas' component={Ideas}/>
            <Route path='/contacts' component={Contacts}/>

          </Switch>
        </div>
      
      </div>
    </Router>
    
  );
}

export default App;
