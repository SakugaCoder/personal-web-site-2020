import React from 'react';
//import '../scss/App.css';
import i18n from './i18n.js';
import Header from './Header';
import Hero from './Hero';
import About from './About'
import TechStack from './TechStack';
import RecentProjects from './RecentProjects';
import Contact from './Contact';
import Footer from './Footer';
import LanguageSwitcher from './LanguageSwitcher.js';


function App() {

  const handleLanChange = (e) =>{
    let lang = e.target.value;
    console.log("Changing languague");
    console.log(lang);
    i18n.changeLanguage(lang)
  };
    

  return (
    <React.Fragment>
      <Header handleLanChange={handleLanChange}></Header>
      <div className="container">
        <Hero></Hero>
        <LanguageSwitcher handleLanChange={ handleLanChange } />
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
