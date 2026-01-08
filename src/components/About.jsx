import React from 'react';
import AboutBackground from '../assets/desing-fundo-about.png';
import AboutBanner from '../assets/desing-about.png';
import CalendarAbout from '../assets/calendar-about.png'

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt=""/>
      </div>
      
      <div className="about-section-image-container">
       <img src={AboutBanner} alt=""/>
      </div>

      <div className="about-section-text-container">
        <p className="primary-subheading">Tech OS System</p>
        <h3 className="primary-heading">
          Funcionalidades em Destaque
        </h3>
        
        <p className="primary-text">
          <h4 className="primary-h4">Painel Web Administrativo:</h4> Gerencie ordens de serviço em tempo real com Dashboards estratégicos, controle de laboratório para máquinas e laudos técnicos, além de uma agenda integrada para total organização das demandas da sua equipe.
        </p>
        
        <p className="primary-text">
           <h4 className="primary-h4">Aplicativo do Técnico:</h4> Mobilidade total com rotas via Waze e Google Maps, upload de fotos do atendimento diretamente para a nuvem e coleta de assinatura digital do cliente para encerramento imediato da OS em campo.
        </p>

        <div className="about-button-container">
          <button className="secondary-button">Ver Demonstração</button>
        </div>
      </div>
    </div>
  )
}

export default About