import React from 'react'
import BannerHomeBackground from "../assets/desing-fundo-home.png";
import BannerHome from "../assets/desing-home.png"
const Home = () => {
  return (
   <div className="home-container">
    <div className="home-banner-container">
        <div className="home-bannerImage-container">
            <img src={BannerHomeBackground} alt="" />
        </div>

        <div className="home-text-section">
          <h1 className="primary-heading">
           O sistema definitivo para empresas de informática dominarem a operação..
          </h1>
          <p className="primary-text">
            Do Helpdesk ao campo. Gerencie Ordens de Serviço, controle patrimônios e ofereça mobilidade total para seus técnicos com o Tech OS.
          </p>
        </div>

        <div className="home-image-section">
            <img src={BannerHome} alt="" />
        </div>
    </div>
   </div>
  )
}

export default Home
