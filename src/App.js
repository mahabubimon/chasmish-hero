import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import BuyNow from "./pages/buyNow/BuyNow";
import Dashboard from "./pages/dashboard/dashboard/Dashboard";
import Glasses from "./pages/glasses/Glasses";
import Home from "./pages/home/home/Home";
import Login from "./pages/login/login/Login";
import PrivateRoute from "./pages/login/privateRoute/PrivateRoute";
import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
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
          <PrivateRoute path="/glass/:id">
            <BuyNow></BuyNow>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
