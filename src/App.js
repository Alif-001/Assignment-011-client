import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header.js";
import AuthProvider from "./contexts/AuthProvider.js";
import About from "./pages/About.js";
import AddNewOffers from "./pages/AddNewOffers";
import AdminPanel from "./pages/AdminPanel.js";
import Contact from "./pages/Contact.js";
import Courses from "./pages/Courses.js";
import Dashboard from "./pages/Dashboard.js";
import Details from "./pages/Details.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import PageNotFound from "./pages/PageNotFound.js";
import PrivateRoute from "./route/PrivateRoute.js";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header> </Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/admin">
              <AdminPanel />
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <PrivateRoute exact path="/courses">
              <Courses></Courses>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>

            <Route path="/courses/:id">
              <Details></Details>
            </Route>

            <PrivateRoute path="/addnewoffers">
              <AddNewOffers></AddNewOffers>
            </PrivateRoute>

            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
