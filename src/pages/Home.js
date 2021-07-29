import React from "react";
import style from "../styles/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

class Home extends React.Component {
  render() {
    return (
      <div className={style.page}>
        <div className={style.intro}>
          <span className={style.name}>Jeff Sarpong</span>
          <span className={style.description}>
            I am a professional Software and Web Developer
            <br />
            from Ghana, Kumasi
          </span>

          <div className={style.social}>
            <span className={style.description}>Follow me on: </span>
            <br></br>
            <a href="https://www.facebook.com/jeffsarpong014">
              <FontAwesomeIcon icon={faFacebookF} size="1x" />
            </a>

            <a href="https://www.instagram.com/crazicoda/">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>

            <a href="https://github.com/CraziCoda">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>

            <a href="https://twitter.com/KonaduJeff">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
