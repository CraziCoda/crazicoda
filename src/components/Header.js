import React from 'react';
import style from '../styles/component.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
     //BrowserRouter as Router,
     NavLink
   } from "react-router-dom";

import {  faFacebookF, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
class Header extends React.Component{
     render(){
          return(
          <div className={style.header}>
               <div className={style.name}>
                    CrazeCode
               </div>
               <div className={style.links}>
                  
                         <ul>
                              <li>
                                   <NavLink className={style.linkText} activeClassName={style.activeLinkText} to="/home">Home</NavLink>
                              </li>
                              <li>
                                   <NavLink className={style.linkText} activeClassName={style.activeLinkText} to="/about">About</NavLink>
                              </li>
                              <li>
                                   <NavLink className={style.linkText} activeClassName={style.activeLinkText} to="/services">Services</NavLink>
                              </li>
                             
                         </ul>
                 
               </div>
               <div className={style.social}>
                    <a href="https://www.facebook.com/jeffsarpong014"><FontAwesomeIcon icon={faFacebookF} size="1x" /></a>
               
                    <a href="https://www.instagram.com/crazicoda/"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>

                    <a href="https://github.com/CraziCoda"><FontAwesomeIcon icon={faGithub} size="lg" /></a>

                    <a href="https://twitter.com/KonaduJeff"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
               </div>
          </div>
    )
     }
}

export default Header;