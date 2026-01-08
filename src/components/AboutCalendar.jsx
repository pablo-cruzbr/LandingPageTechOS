import React from 'react';
import AboutBackground from '../assets/desing-fundo-about.png';
import AboutBanner from '../assets/desing-about.png';
import CalendarAbout from '../assets/calendar-about.png'

const AboutCalendar = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
      </div>
      <div className="about-section-text-container">   
       <p className="primary-text">
          <h4 className="primary-h4">Agenda Técnica Inteligente: Controle total sobre cada atendimento.</h4> Visualize sua demanda por dia, semana ou mês. Com o nosso calendário técnico integrado, você elimina conflitos de horários e garante que nenhum chamado fique sem resposta.
        </p>
      </div>

      <div className="about-section-image-container">
       <img src={CalendarAbout} alt=""/>
      </div>
    </div>
  )
}

export default AboutCalendar