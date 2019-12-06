
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// import AboutMe from './aboutme';
// import Contact from './contact';
// import LandingPage from './landingpage';
import ContentSection from './content.js';
import Frontpage from './front.js';
import Footer from './footer.js';
import Music from './music.js';


const Main = () => (
    <Switch>
      <Route exact path="/" component= {Frontpage} />
      <Route  path="/video" component= {ContentSection} />
      <Route  path="/social" component= {Footer} />
      <Route  path="/music" component= {Music} />

      {/* <Route  path="/contact" component= {Contact} />
      <Route  path="/projects" component= {Projects} />
      <Route  path="/resume" component= {Resume} /> */}
    </Switch>
)
export default Main;
