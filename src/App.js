import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import BuyNow from "./components/pages/buyNow/BuyNow";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Glasses from "./components/pages/glasses/Glasses";
import Home from "./components/pages/home/home/Home";
import Login from "./components/pages/login/Login";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
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
            <PrivateRoute path="/glasses">
              <Glasses></Glasses>
            </PrivateRoute>
            <PrivateRoute path="/glass/:id">
              <BuyNow></BuyNow>
            </PrivateRoute>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
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
