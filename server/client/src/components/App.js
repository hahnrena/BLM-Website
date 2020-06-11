import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing/Landing';
import Header from './Header/Header';
import LegalCounsel from './LegalCounsel/LegalCounsel'; 
import AltActions from './AltActions/AltActions';
import SocialMedia from './SocialMedia/SocialMedia';
import Allyship from './Allyship/Allyship';

import './App.css'

class App extends Component {
    render(){
        return (
            <BrowserRouter>
            <div>
                <Header />
                <Route exact={true} path="/" component={Landing} />
                <Route exact={true} path="/social-media" component={SocialMedia} />
                <Route exact={true} path="/alt-actions" component={AltActions} />
                <Route exact={true} path="/legal-counsel" component={LegalCounsel} />
                <Route exact={true} path="/allyship" component={Allyship} />
                
            </div>
            </BrowserRouter>
            );
    }
}

export default App;
