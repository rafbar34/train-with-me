import React,{useEffect} from "react";
import styles from "../contacts/contacts.module.css"
import { NavLink } from "react-router-dom";
import "../menu/menu.css"
import Aos from "aos";
import "aos/dist/aos.css";
import GoogleMapReact from 'google-map-react';
import { borderRadius } from "@mui/system";
import "../footer/footer.css"
import logoWebiste from "../../images/logo.png"
let Contacts =()=>{
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);

  const defaultProps = {
    center: {
      lat: 50.06116809337096,
      lng: 19.93764554480354
    },
    zoom: 11
  };
   
    return(
        
        <div className={styles.container}>
        <section className="menu">
          <div className="menu-links">
          <span className=" about">
            {" "}
            <h2>
              <NavLink
                to="/"
                style={{ textDecoration: "none", opacity: "0.7", color: "white" }}
              >
                {" "}
                {<img src={logoWebiste}></img>}
              </NavLink>
            </h2>{" "}
          </span>
          <span className="headers form">
          {" "}
          <h2>
            {" "}
            <NavLink to="/form" style={{ textDecoration: "none", color: "white" }}>
              Calculator
            </NavLink>
          </h2>
        </span>
          <span className="headers techniques">
            {" "}
            <h2>
              {" "}
              <NavLink to="/techniques" style={{ textDecoration: "none", color: "white" }}>
                Techniques
              </NavLink>
            </h2>
          </span>
          <span className="headers facts">
            {" "}
            <h2>
              <NavLink
                to="/facts"
                style={{ textDecoration: "none", color: "white" }}
              >
                Facts
              </NavLink>
            </h2>
          </span>
          <span className="headers contacts">
            {" "}
            <h2>
              <NavLink to="/contacts" style={{ textDecoration: "none", color: "white" }}>
                {" "}
                Contacts
              </NavLink>
            </h2>
          </span></div>
          <section className="registersbtn">
            <div className="register">
              <div className="buttonslogin" >
              <button className="registerbtn">
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <b>Login</b>
                </NavLink>
              </button>
            
            <div className="register">
              <button className="registerbtn">
                <NavLink
                  to="/joinus"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <b>Join us</b>
                </NavLink>
              </button></div></div>
            </div>
          </section>
        </section>

      <section className={styles.layout}>
        
      <div
          className={styles.cards}
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
        >
          <span className={styles.cardText}>
            
          <h2>Contact with us</h2></span>
         <span className={styles.text}> <h4>
           
           
           <ol>email: rafbar34@gmail.com</ol> 
           <ol>phone-number: 500230111</ol> 
          
           </h4></span>
          <div className={styles.line}></div>
           <div className="map" style={{ height: '52%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      
      </GoogleMapReact>
    </div>
 
         
           
           
          
        </div>
        </section>
        <div className="space"></div>
   <footer className="footer">
    
       Train with me<br></br>
        Copyright © 2022 - All Rigths reserved
      </footer>
      
        </div>

        
      
    )
}
export default Contacts