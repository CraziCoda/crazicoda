import React from 'react';
import style from '../styles/page.module.css';

class Services extends React.Component{
  render(){
    return (
      <div className={style.page}>
        <div className={style.intro}>
            <span className={style.name}>
                Services
            </span>
            <span className={style.description}>
                FrontEnd: HTML, CSS, ReactJs, JavaScript<br/>
                BackEnd: NodeJs, ExpressJs<br/>
                Scripts: Python, JavaScript<br/>
                Databases: MongoDB, CouchDB and other nosql Database
            </span>
        </div>
      </div>
    );
  }
}

export default Services;
