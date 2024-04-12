import logo from './logo.svg';
// import Akash from './Akash1.jpeg';
import angular from './angular.png';
import cv from './Akash_CV.pdf';
import node from './node.png';
import mysql from './mysql.png';
import postgresql from './postgresql.png';
import ionic
 from './ionic.png';
import laravel from './laravel.png';
// import Akash from './AG_SAAAG.png';
import Akash from './akash.png';


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
    setStack2(false);
    setStack3(false);
    setStack4(false);
    setStack5(false);


  };

  const handleStacksClick = () => {
    setAboutSelected(false);
    setStacksSelected(true);
    setContactSelected(false);
    setStack1(true);
    setStack2(false);
    setStack3(false);
    setStack4(false);
    setStack5(false);
  };

  const handleContactClick = () => {
    setAboutSelected(false);
    setStacksSelected(false);
    setContactSelected(true);
    setStack2(false);
    setStack3(false);
    setStack4(false);
    setStack5(false);
  };
  const handleDownloadCvClick = () => {
    setStack2(false);
    setStack3(false);
    setStack4(false);
    setStack5(false);
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
        <p className="lexed_family_descr">I build pixel-perfect, accessible products for web development</p>
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
        <div className="quote">❝100% professional❞</div>
        </header>
      </>}

      {aboutSelected && <>
 
       <header className="App-header1">
       <h3 className=" lexend_family role">Full Stack Developer</h3>
      <div className=" about-card lexend_family description ">
      An enthusiastic software developer finds fulfillment in crafting intricate solutions, orchestrating a graceful dance of logic and syntax to innovate and surpass expectations.
      </div>

      <div className="timeline">
  <div className="timeline-item left ">
    <div className="timeline-item-content  ileft">
      <span className="date">2022-Present</span>
      <h4 className="title">Jr Software Engineer</h4>
      <p className="description" style={{textAlign:"center"}}>QR Solutions pvt ltd</p>
    </div>
  </div>
  <div className="timeline-item right ">
    <div className="timeline-item-content iright ">
      <span className="date">Course</span>
      <h4 className="title">6 Month-Full Stack Development</h4>
      <p className="description"style={{textAlign:"center"}}>Java,Angular,React,Hibernate,JDBC,Spring Boot,MySQL</p>
    </div>
    
  </div>
  <div className="timeline-item left ">
    <div className="timeline-item-content ileft">
      <span className="date">Key Skills</span>
      <h4 className="title">Proficient</h4>
      <p className="description" style={{whiteSpace:"nowrap"}} >

        Frontend:
     Angular, React,Js, Html,CSS,Bootstrap,SCSS</p>
      <p className="description">Backend:
    Node,Laravel</p>
    <p className="description">Database:MySQL,PostgreSQL</p>
    <p className="description">
        
        Language:
      Java</p>
      <p className="description">
        
        Version Control:
      GitHub,BitBucket</p>
    <h4 className="title">Intermediate</h4>
      <p className="description">Spring Boot,Ionics,React Native,JDBC,Hibernate</p>
    </div>
  </div>
  <div className="timeline-item right ">
    <div className="timeline-item-content iright">
      <span className="date">Education</span>
      <h4 className="title"style={{textAlign:"center"}}>B.E-Mechanical Engineering</h4>
      <p className="description"style={{textAlign:"center"}}>Nehru Institute of Engineering and Technology-Coimbatore</p>
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
      {stack1 && <> 
        <div style={{overflow:"scroll",overflowX:"hidden",height:"50vh"}}>
<div className="about-card lexend_family delay0_5 mb ">
   <p style={{display:""}}>  <div style={{fontWeight:900,textAlign:"center",color:"black"}}> AppRetail</div> It is a software solution made for auto dealerships to simplify lead management. It does this by:</p>

<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Centralizing Leads:</div> All leads from different sources like walk-ins, website inquiries, or phone calls are organized and tracked in one place.</p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Easy Interface:</div> It offers a user-friendly interface for quick and efficient lead entry, ensuring no inquiries are missed.</p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Automation: </div>Certain tasks like sending responses, scheduling follow-ups, and assigning leads to sales reps are automated.</p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Customization:</div> It can be tailored to each dealership's unique needs, with customizable fields and workflows.</p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Reporting and Analytics:</div> Provides insights into lead generation effectiveness, sales performance, and areas for improvement.</p>   </div></div></>}
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
<div style={{overflow:"scroll",overflowX:"hidden",height:"50vh"}}>
      <p style={{display:""}}>  <div style={{fontWeight:900, textAlign:"center",color:"black"}}> WARRANTY APP</div> This project aims to create an advanced Warranty Management Audit System tailored for KIA vehicles. </p>

<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Warranty Management:</div>
It streamlines the process from claim submission to approval and reimbursement, ensuring a smooth experience for customers and service centers.
 </p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Parts Tracking:</div>
Tracks vehicle parts to ensure genuine KIA parts are used for repairs, maintaining quality. </p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Recall Management: </div>
Efficiently manages safety recalls or service campaigns, ensuring timely communication and compliance with regulations.</p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Customization:</div> 
It can be tailored to each dealership's unique needs, with customizable fields and workflows.
</p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Reporting and Analytics:</div>
 Provides insights into lead generation effectiveness, sales performance, and areas for improvement.
 </p>   
 
 <p style={{display:""}}>  <div style={{fontWeight:900 ,textAlign:"center",color:"black"}}> OTA Hive Project</div> This project update status and history, transferring this data to an external server, and overseeing the progress and results while isolating OTA and software errors. </p>

<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Warranty Management:</div>
It streamlines the process from claim submission to approval and reimbursement, ensuring a smooth experience for customers and service centers.
 </p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Parts Tracking:</div>
Tracks vehicle parts to ensure genuine KIA parts are used for repairs, maintaining quality. </p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Recall Management: </div>
Efficiently manages safety recalls or service campaigns, ensuring timely communication and compliance with regulations.</p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Customization:</div> 
It can be tailored to each dealership's unique needs, with customizable fields and workflows.
</p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Reporting and Analytics:</div>
 Provides insights into lead generation effectiveness, sales performance, and areas for improvement.
 </p>  </div> </div></>}

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
      <div style={{overflow:"scroll",overflowX:"hidden",height:"50vh"}}>

      <p style={{display:""}}>  <div style={{fontWeight:900, textAlign:"center",color:"black"}}> 2kTribes.com</div>  </p>

      A platform committed to ethical and sustainable practices, offering T-shirts made
 from eco-friendly materials and produced under fair labor conditions. Targets environmentally
 conscious consumers seeking stylish, responsibly sourced apparel
 
 <p style={{display:""}}>  <div style={{fontWeight:900, textAlign:"center",color:"black"}}> SAGAA</div> Sagaa is a dynamic project simplifying retail management with its focus on billing and forecast management. </p>
 <p style={{display:""}}>  <div style={{fontWeight:900,color:"black" }}> Efficient Billing:</div> Sagaa ensures quick transaction processing and seamless invoicing, enhancing the checkout experience for customers.</p>

 <p style={{display:""}}>  <div style={{fontWeight:900,color:"black"}}> Accurate Forecasting:</div> Leveraging advanced analytics, Sagaa helps retailers predict demand accurately, minimizing stock issues and maximizing profitability.</p>

 <p style={{display:""}}>  <div style={{fontWeight:900,color:"black" }}> Robust Inventory Control:</div> Sagaa offers comprehensive inventory management, enabling effective tracking, replenishment, and waste reduction.</p>

 <p style={{display:""}}>  <div style={{fontWeight:900, color:"black"}}> Customer Engagement:</div> With advanced CRM features, Sagaa facilitates personalized marketing campaigns and loyalty programs, driving customer engagement.</p>

 <p style={{display:""}}>  <div style={{fontWeight:900,color:"black" }}> Insightful Analytics:</div> Sagaa provides valuable insights into sales performance and customer behavior, aiding data-driven decision-making.</p>

 <p style={{display:""}}>  <div style={{fontWeight:900,color:"black"}}> User-Friendly Interface:</div> Designed for ease of use, Sagaa’s intuitive interface enhances productivity for both staff and management.</p>

Security: Sagaa prioritizes data security, ensuring the protection of sensitive information and compliance with industry regulations.
 
   </div>    </div></>}
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
      {stack4 && <> 
        <div style={{overflow:"scroll",overflowX:"hidden",height:"50vh"}}>
<div className="about-card lexend_family delay0_5 mb">
      <p style={{display:""}}>  <div style={{fontWeight:900, textAlign:"center",color:"black"}}> OK Kodai</div>  </p>
      <p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>User-Centric Interface</div>Ok Kodai prioritizes user experience with an intuitive interface, facilitating easy navigation across travel, e-commerce, and hotel booking services.</p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Travel Booking:</div> 
Users can effortlessly browse and book flights, trains, buses, and other transportation options, accessing a wide array of routes and schedules.</p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>E-commerce Platform:  </div>
Ok Kodai offers a diverse range of products across categories like electronics, fashion, groceries, and accessories, ensuring a convenient shopping experience.</p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Hotel Reservations: </div> 
Users can find and reserve accommodations such as hotels, resorts, and guesthouses, with detailed information and pricing options available.</p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>User Management:  </div>
Personalized user profiles empower users to manage bookings, view order history, and receive updates, enhancing engagement and satisfaction.</p>
<p style={{display:""}}><div style={{fontWeight:900,color:"black"}}>Admin Dashboard:  </div>
Administrators benefit from a comprehensive dashboard for managing user accounts, bookings, inventory, and transactions, enabling efficient oversight and optimization.</p>
  </div>  </div></>}

      </div>
    
      
      </header></>} 
      {contactSelected && <>  <header className="App-header1">
        <div className="text_align_left">
      <p className="about-card lexend_family delay0_5">
      Email: <a href="mailto:akashsaaag@gmail.com" style={{color:"#551a8b"}}>akashsaaag@gmail.com</a>
 
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
