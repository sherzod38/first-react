import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom';

import Tickets from './pages/Tickets/Tickets'
import Overview from './pages/Overview'
import Ideas from './pages/ideas'


import Sidebar from './containers/Sidebar/Sidebar'

import './assets/styles/main.scss'
import Table from './containers/Table/Table';
// import Overview from './pages/Overview';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar/>
        

        <div className="content">

          {/* <Table/> */}


          <Switch>
            <Route path='/tickets' component={Tickets}/>
            <Route path='/overwiev' component={Overview}/>
            <Route path='/ideas' component={Ideas}/>
          </Switch>
        </div>
      
      </div>
    </Router>
    
  );
}

export default App;
