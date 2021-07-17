import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import HeaderComponent from './components/operations/HeaderComponent';
import FooterComponent from './components/operations/FooterComponent';
import ListMedicalComponent from './components/operations/ListMedicalComponent';
import SaveMedicineComponent from './components/operations/SaveMedicineComponent';
import ViewMedicalComponent from './components/operations/ViewMedicalComponent';
import Orders from './components/pages/Orders';


function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                    <Route exact path="/home" component={Home} />
                    <Route path = "/" exact component = {Home}></Route>
                    <Route path = "/store" component = {ListMedicalComponent}></Route>
                    <Route path = "/add-Pharmacy/:medicineId" component = {SaveMedicineComponent}></Route>
                    <Route path = "/view-Pharmacy/:medicineId" component = {ViewMedicalComponent}></Route>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/orders" component={Orders} />
                    <Route component={NotFound} />


                    {/* <Route component={ListMedicalComponent} /> */}

                         </Switch>
                </div>
              <FooterComponent/>
        </Router>
    </div>
    
  );
}

export default App;
