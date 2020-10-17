import "./App.css";
import { useState } from "react";
import React, { createContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home/Home";
import Review from "./components/Dashboard/Review/Review";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import OrderForm from "./components/Dashboard/OrderForm/OrderForm";
import CreateAdmin from "./components/Dashboard/CreateAdmin/CreateAdmin";
import AddService from "./components/Dashboard/AddService/AddService";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServiceByCard from "./components/Dashboard/ServiceByCard/ServiceByCard";
import ServiceTableData from "./components/Dashboard/ServiceTableData/ServiceTableData";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="np"><Dashboard></Dashboard></PrivateRoute>
          <PrivateRoute path="/dashboard/order"><OrderForm></OrderForm></PrivateRoute>
          <Route path="/dashboard/review"><Review></Review></Route>
          <Route path="/dashboard/serviceDataCard"><ServiceByCard></ServiceByCard></Route>
          <Route path="/dashboard/serviceTableData"><ServiceTableData></ServiceTableData></Route>
          <Route path="/dashboard/addService"><AddService></AddService></Route>
          <Route path="/dashboard/CreateAdmin"><CreateAdmin></CreateAdmin></Route>
          <Route path="/login"><Login></Login></Route>
          <Route path="/"><Home></Home></Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );

}
export default App;
