import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Glasses from "./components/pages/glasses/Glasses";
import Home from "./components/pages/home/home/Home";
import Login from "./components/pages/login/Login";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/glasses">
              <Glasses></Glasses>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
