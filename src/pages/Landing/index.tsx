import React from 'react';
import logoImg from '../../assets/img/logo.svg'
import landingImg from '../../assets/img/landing.svg'
import studyIcon from '../../assets/img/icons/study.svg'
import giveClassesIcon from '../../assets/img/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/img/icons/purple-heart.svg'
import { Link } from 'react-router-dom';
import './styles.css'

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Logo Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="button-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing;