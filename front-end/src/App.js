import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import NavBar from "./components/NavBar.js";

//Pages
import Home from "./pages/Home.js";
import Index from "./pages/Index.js";
import Show from "./pages/Show.js";
import New from "./pages/New.js";
import Edit from "./pages/Edit.js";
import Four0Four from "./pages/Four0Four.js";

// import { apiURL } from "./util/apiURL.js";
// const API = apiURL();

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Index />
          </Route>
          <Route path="/products/new">
            <New />
          </Route>
          <Route exact path="/products/:id">
            <Show />
          </Route>
          <Route path="/:id/edit">
            <Edit />
          </Route>
          <Route path="/*">
            <Four0Four />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
