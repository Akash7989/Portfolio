import logo from './logo.svg';
import Akash from './Akash1.jpeg';
import angular from './angular.png';
import cv from './Akash_CV.pdf';
import node from './node.png';
import mysql from './mysql.png';
import postgresql from './postgresql.png';
import ionic
 from './ionic.png';
import laravel from './laravel.png';

import './App.css';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

function App() {
  const [aboutSelected, setAboutSelected] = useState(false);
  const [stacksSelected, setStacksSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [stack1, setStack1]=useState(false);
  const [stack2, setStack2]=useState(false);
  const [stack3, setStack3]=useState(false);
  const [stack4, setStack4]=useState(false);
  const [stack5, setStack5]=useState(false);
  const [stack6, setStack6]=useState(false);


  const handleAboutClick = () => {
    setAboutSelected(true);
    setStacksSelected(false);
    setContactSelected(false);
  };

  const handleStacksClick = () => {
    setAboutSelected(false);
    setStacksSelected(true);
    setContactSelected(false);
    setStack1(true);
  };

  const handleContactClick = () => {
    setAboutSelected(false);
    setStacksSelected(false);
    setContactSelected(true);
  };
  const handleDownloadCvClick = () => {
    
 const fileUrl = cv;

 const downloadLink = document.createElement('a');

 downloadLink.href = fileUrl;
 downloadLink.download = 'Akash_CV.pdf';

 document.body.appendChild(downloadLink);
 downloadLink.click();
 document.body.removeChild(downloadLink);
  };
  const handleStack1=()=>{
    setStack1(true);
    setStack2(false);
    setStack3(false);
    setStack4(false);
    setStack5(false);
    setStack6(false);


  }
  const handleStack2=()=>{
    setStack2(true);
    setStack1(false);
    setStack3(false);
    setStack4(false);
    setStack5(false);
    setStack6(false);

  }
  const handleStack3=()=>{
    setStack1(false);
    setStack2(false);
    setStack3(true);
    setStack4(false);
    setStack5(false);
    setStack6(false);

  }
  const handleStack4=()=>{
    setStack1(false);
    setStack2(false);
    setStack3(false); 
    setStack4(true);
    setStack5(false);
    setStack6(false);

  }
  const handleStack5=()=>{
    setStack1(false);
    setStack2(false);
    setStack3(false); 
    setStack4(false);
    setStack5(true);
    setStack6(false);

  }
  const handleStack6=()=>{
    setStack1(false);
    setStack2(false);
    setStack3(false); 
    setStack4(false);
    setStack5(false);
    setStack6(true);

  }
  return (
    <div className="App" style={{overflowX:"hidden"}}>
        <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet" />
      </Helmet>
      <header className="App-header">
        <h1 className="lexend_family header_name">Akash G</h1>
        <h3 className=" lexend_family role">Full Stack Developer</h3>
        <p className="lexend_family description">I build pixel-perfect, accessible products for web development</p>
        <button className="curoser_pointer" onClick={handleAboutClick}>
          About
          <span></span><span></span><span></span><span></span>
        </button>
        <button className="curoser_pointer" onClick={handleStacksClick}>
          Stacks
          <span></span><span></span><span></span><span></span>
        </button>   <button className="curoser_pointer" onClick={handleContactClick}>
          Contact
          <span></span><span></span><span></span><span></span>
        </button>  
         <button className="curoser_pointer" onClick={handleDownloadCvClick}>

          Download CV
          <span></span><span></span><span></span><span></span>
        </button>   </header>
      {!aboutSelected && !stacksSelected && !contactSelected && <>  
        <header className="App-header1">    
        <img src={Akash} className="App-logo" alt="logo" />
        <div className="quote">❝100% professional sirae❞</div>
        </header>
      </>}

      {aboutSelected && <>
 
       <header className="App-header1">
       <h3 className=" lexend_family role">Full Stack Developer</h3>
      <div className="about-card lexend_family">
      An enthusiastic software developer finds fulfillment in crafting intricate solutions, orchestrating a graceful dance of logic and syntax to innovate and surpass expectations.
      </div>

      <div className="timeline">
  <div className="timeline-item left ">
    <div className="timeline-item-content  ileft">
      <span className="date">Year 1</span>
      <h4 className="title">Event 1</h4>
      <p className="description">Description of event 1</p>
    </div>
  </div>
  <div className="timeline-item right ">
    <div className="timeline-item-content iright ">
      <span className="date">Year 2</span>
      <h4 className="title">Event 2</h4>
      <p className="description">Description of event 2</p>
    </div>
    
  </div>
  <div className="timeline-item left ">
    <div className="timeline-item-content ileft">
      <span className="date">Year 3</span>
      <h4 className="title">Event 1</h4>
      <p className="description">Description of event 1</p>
    </div>
  </div>
  <div className="timeline-item right ">
    <div className="timeline-item-content iright">
      <span className="date">Year 4</span>
      <h4 className="title">Event 2</h4>
      <p className="description">Description of event 2</p>
    </div>
    
  </div> 
  
 
</div>
      </header>
      </>}


      
      {stacksSelected && <>  <header className="App-header1">
        <div className="text_align_left ">
      <div className=" flex mb stack pointer" onClick={handleStack1}>
      <div className="about-card lexend_family delay0_5">
         React   <img src={logo}  className="icon-logo"></img>
      </div>
      <div className="about-card lexend_family delay0_5">
        + Angular   <img src={angular} className="icon-logo"></img>
      </div>
      <div className="about-card lexend_family delay0_5">
       + Laravel   <img src={laravel}  className="icon-logo"></img>
      </div><div className="about-card lexend_family delay0_5">
        + PostgreSQL   <img src={postgresql}  className="icon-logo"></img>
      </div>
     
    
      </div>
      {stack1 && <> <div className="about-card lexend_family delay0_5 mb ">
      AppRetail is a complete lead management solution for auto dealerships that
streamlines operations, cuts down on data collecting time, tracks the sales process, offers customer
insights, allows for seamless communication, and boosts productivity. A user-friendly interface and
easy connectivity are provided by appRetail.io. AppRetail is a useful tool for automotive firms
thanks to its integrated capabilities for sales, marketing automation, after-sales support, and service

    </div></>}
      <div className=" flex mb stack pointer" onClick={handleStack2}>
      <div className="about-card lexend_family delay0_5">
         React   <img src={logo}  className="icon-logo"></img>
      </div>
     
      <div className="about-card lexend_family delay0_5">
       + Node Js/Ts   <img src={node}  className="icon-logo"></img>
      </div><div className="about-card lexend_family delay0_5">
        + MySQL   <img src={mysql}  className="icon-logo"></img>
      </div>
     
    
      </div>
      {stack2 && <> <div className="about-card lexend_family delay0_5 mb">
      The project's goal is to create a thorough Warranty Management Audit System for KIA cars.
This system will make it possible to manage warranty claims, track down vehicle parts, find significant
and minor problems, and handle recall campaigns in an efficient manner    

  </div></>}
      <div className=" flex mb stack pointer" onClick={handleStack3}>
      <div className="about-card lexend_family delay0_9" >
         React   <img src={logo}  className="icon-logo"></img>
      </div>
     
     
      <div className="about-card lexend_family delay11">
       + Laravel  <img src={laravel}  className="icon-logo"></img>
      </div><div className="about-card lexend_family delay11">
        + MySQL   <img src={mysql}  className="icon-logo"></img>
      </div>
     
    
      </div>
      {stack3 && <> <div className="about-card lexend_family delay0_5 mb">
      A platform committed to ethical and sustainable practices, offering T-shirts made
 from eco-friendly materials and produced under fair labor conditions. Targets environmentally
 conscious consumers seeking stylish, responsibly sourced apparel      </div></>}
<div className=" flex mb stack pointer" onClick={handleStack4}>
      <div className="about-card lexend_family delay0_9" >
         Ioincs   <img src={ionic}  className="icon-logo"></img>
      </div>
     
     
      <div className="about-card lexend_family delay11">
       + Laravel  <img src={laravel}  className="icon-logo"></img>
      </div><div className="about-card lexend_family delay11">
        + MySQL   <img src={mysql}  className="icon-logo"></img>
      </div>
     
    
      </div>
      {stack4 && <> <div className="about-card lexend_family delay0_5 mb">
      AppRetail is a complete lead management solution for auto dealerships that
streamlines operations, cuts down on data collecting time, tracks the sales process, offers customer
insights, allows for seamless communication, and boosts productivity. A user-friendly interface and
easy connectivity are provided by appRetail.io. AppRetail is a useful tool for automotive firms
thanks to its integrated capabilities for sales, marketing automation, after-sales support, and service
     </div></>}
<div className=" flex mb stack pointer" onClick={handleStack5}>
      <div className="about-card lexend_family delay0_9" >
         React   <img src={logo}  className="icon-logo"></img>
      </div>
     
     
      <div className="about-card lexend_family delay11">
       + Laravel  <img src={laravel}  className="icon-logo"></img>
      </div><div className="about-card lexend_family delay11">
        + MySQL   <img src={mysql}  className="icon-logo"></img>
      </div>
     
    
      </div>
      {stack5 && <> <div className="about-card lexend_family delay0_5 mb">
      AppRetail is a complete lead management solution for auto dealerships that
streamlines operations, cuts down on data collecting time, tracks the sales process, offers customer
insights, allows for seamless communication, and boosts productivity. A user-friendly interface and
easy connectivity are provided by appRetail.io. AppRetail is a useful tool for automotive firms
thanks to its integrated capabilities for sales, marketing automation, after-sales support, and service
      </div></>} <div className=" flex mb stack pointer" onClick={handleStack6}>
      <div className="about-card lexend_family delay0_9" >
         React   <img src={logo}  className="icon-logo"></img>
      </div>
     
     
      <div className="about-card lexend_family delay11">
       + Laravel  <img src={laravel}  className="icon-logo"></img>
      </div><div className="about-card lexend_family delay11">
        + MySQL   <img src={mysql}  className="icon-logo"></img>
      </div>
     
    
      </div>
      {stack6 && <> <div className="about-card lexend_family delay0_5 mb">
      AppRetail is a complete lead management solution for auto dealerships that
streamlines operations, cuts down on data collecting time, tracks the sales process, offers customer
insights, allows for seamless communication, and boosts productivity. A user-friendly interface and
easy connectivity are provided by appRetail.io. AppRetail is a useful tool for automotive firms
thanks to its integrated capabilities for sales, marketing automation, after-sales support, and service
      </div></>}
      
      </div>
    
      
      </header></>} 
      {contactSelected && <>  <header className="App-header1">
        <div className="text_align_left">
      <p className="about-card lexend_family delay0_5">
        Email:akashsaaag@gmail.com
      </p>
      <p className="about-card lexend_family delay0_7">
        Mobile:91 9360753418, 91 8870878967
      </p>
      <p className="about-card lexend_family delay0_9">
        Click to:<a href="https://api.whatsapp.com/send?phone=919360753418" target='_blank'>Whatsapp Chat</a>
      </p>
      <p className="about-card lexend_family delay11">
        Linked in:<a href="https://www.linkedin.com/in/akash-g-835475248/" target='_blank'>My Profile</a>
      </p></div>
      </header></>}

    </div>
  );
}

export default App;
