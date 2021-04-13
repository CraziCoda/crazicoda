import React from 'react';
import style from '../styles/page.module.css';

class About extends React.Component{
    render(){
        return (
            <div className={style.page}>
              <div className={style.about}>
                <div className={style.details}>
                  <span className={style.name}>
                    Details
                  </span>
                  <span className={style.description}>
                    CrazeCode is a business dedicated to satisfying all software needs. <br/>
                    CrazeCode is currently a team of 1.<br/>
                    We appreciate any support 
                  </span>
                </div>
                <div className={style.details}>
                <span className={style.name}>
                    Networks
                  </span>
                  <span className={style.description}>
                   You can follow me on social platforms in the header above <br/>
                  </span>

                </div>
                {/* <div className={style.details}>
                  <span className={style.name}>
                    Networks
                  </span>
                  <span className={style.description}>
                   You can follow me on social platforms in the header above <br/>
                  </span>
                </div> */}
              </div>
            </div>
          );
    }
}

export default About;