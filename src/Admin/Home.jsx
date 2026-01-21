import React from 'react'
import Header from './Header';
import Navbar from './Navbar';
import Navigation from './Navigation';
import Services from './Services';
import Footer from './Footer';
import Doctors from './Doctors';
import About from './About';
import Contact from './Contact';

function Home() {
  return (
    <>
       <Header/>
       <Navbar/>
       <Navigation/>
       <Services/>
       <Doctors/>
       <About/>
       <Contact/>
       <Footer/>
    </>
  )
}
export default Home;