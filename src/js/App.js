import React from 'react';
import '../scss/App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About'
import TechStack from './TechStack';
import RecentProjects from './RecentProjects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="container">
        <Hero></Hero>
        <About></About>
        <TechStack></TechStack>
        <RecentProjects></RecentProjects>
        <Contact></Contact>
      </div>
      <Footer></Footer>
      
    </React.Fragment>
  );
}

export default App;
