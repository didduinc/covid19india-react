import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as Icon from 'react-feather';

import './App.scss';

import Home from './components/home';
import Navbar from './components/navbar';
import Links from './components/links';
import FAQ from './components/faq';
import Banner from './components/banner';
import PatientDB from './components/patientdb';
import DeepDive from './components/deepdive';
import Resources from './components/resources';
/* import PatientDB from './components/patientdb';*/

const history = require('history').createBrowserHistory;

function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
    },
    {
      pageLink: '/demographics',
      view: PatientDB,
      displayName: 'Demographics',
      animationDelayForNavbar: 0.3,
    },
    {
      pageLink: '/deepdive',
      view: DeepDive,
      displayName: 'Deep Dive',
      animationDelayForNavbar: 0.4,
    },
    {
      pageLink: '/links',
      view: Links,
      displayName: 'Helpful Links',
      animationDelayForNavbar: 0.4,
    },
    {
      pageLink: '/faq',
      view: FAQ,
      displayName: 'About',
      animationDelayForNavbar: 0.5,
    },
    {
      pageLink: '/essentials',
      view: Resources,
      displayName: 'Essentials',
      animationDelayForNavbar: 0.7,
    },
  ];

  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              <Navbar pages={pages} />
              <Banner />
              <Route exact path="/" render={() => <Redirect to="/" />} />
              <Switch location={location}>
                {pages.map((page, i) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={i}
                    />
                  );
                })}
                <Redirect to="/" />
              </Switch>
            </div>
          )}
        />
      </Router>

      <footer className="fadeInUp" style={{animationDelay: '2s'}}>
        

        <h5>We stand with everyone fighting on the frontlines</h5>
        <div className="link">
          <a
            href="https://virusofchina.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            VirusofChina
          </a>
        </div>
       
        <a
          className="button excel"
          href="https://bit.ly/patientdb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.Database />
          <span>Crowdsourced Patient Database&nbsp;</span>
        </a>
       
       
      </footer>
    </div>
  );
}

export default App;
