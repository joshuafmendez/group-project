import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Components
import NavBar from "./components/NavBar.js";
import ShoppingCart from "./components/ShoppingCart.js";

//Pages
import Home from "./pages/Home.js";
import Index from "./pages/Index.js";
import Show from "./pages/Show.js";
import New from "./pages/New.js";
import Edit from "./pages/Edit.js";
import Four0Four from "./pages/Four0Four.js";
import RegisterPage from "./pages/RegisterPage.js";

import { apiURL } from "./util/apiURL.js";
import axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard.js";
const API = apiURL();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  useEffect(() => {
    const isAuth = async () => {
      const token = localStorage.token;
      try {
        const { data } = await axios.post(`${API}/users/is-verified`, {
          token: token,
        });
        data === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
      } catch (error) {
        console.error(error.message);
      }
    };

    isAuth();
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
              !isAuthenticated ? (
                <Home {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/dashboard" />
              )
            }
          />
          <Route
            exact
            path="/register"
            render={(props) =>
              !isAuthenticated ? (
                <RegisterPage {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/dashboard" />
              )
            }
          />
          <Route
            exact
            path="/dashboard"
            render={(props) =>
              isAuthenticated ? (
                <Dashboard {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route exact path="/Register">
            <RegisterPage />
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
          <Route path="/products/:id/edit">
            <Edit />
          </Route>
          <Route path="/*">
            <Four0Four />
          </Route>
          <ShoppingCart />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
