import React,{useEffect} from "react";
import styles from "../Contacts/contacts.module.css"
import "../menu/menu.css"
import Aos from "aos";
import "aos/dist/aos.css";
import GoogleMapReact from 'google-map-react';
import "../footer/footer.css"
import { UIMenu } from "../../Components/UIMenu";

const Contacts =()=>{

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
       <UIMenu/>

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