import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CarpetCleaning from './pages/CarpetCleaning';
import GutterCleaning from './pages/GutterCleaning';
import HighPressureWashing from './pages/HighPressureWashing';
import WindowCleaning from './pages/WindowCleaning';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
                <Route path="/carpet-cleaning" component={CarpetCleaning} />
                <Route path="/gutter-cleaning" component={GutterCleaning} />
                <Route path="/high-pressure-washing" component={HighPressureWashing} />
                <Route path="/window-cleaning" component={WindowCleaning} />
            </Switch>
        </Router>
    );
};

export default Routes;
