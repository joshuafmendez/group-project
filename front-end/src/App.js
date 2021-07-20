import { ReactRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import NavBar from './components/NavBar.js';

//Pages
import Four0Four from './pages/Four0Four.js';
import Home from './pages/Home.js';
import Index from './pages/Index.js';
import Show from './pages/Show.js';

import { apiURL } from "./util/apiURL.js";
const API = apiURL();

function App() {
  

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact to="/">
          <Home />
        </Route>
        <Route exact to="/products">
          <Index />
        </Route>
        <Route exact to="/:id">
          <Show />
        </Route>
        <Route to="/:id/edit">
          <Edit />
        </Route>
        <Route to="/*">
          <Four0Four />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
