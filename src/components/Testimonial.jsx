import React from 'react'
import ProfilePhoto from '../assets/profilephoto.png'
const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Construído com tecnologia de ponta para alta performance:</h1>
        <p className="primary-text">
         Utilizamos Next.js para uma interface ágil, Node.js para um backend robusto e PostgreSQL com Prisma para garantir a integridade e segurança dos seus dados.
        </p>
      </div>

      <div className="testimonial-section-bottom">
          <img src={ProfilePhoto} alt="" />
      <p>"Como técnico de helpdesk nível 2, senti na pele a dificuldade de gerenciar OS e ativos sem as ferramentas certas. Desenvolvi o Tech OS para ser o sistema que eu sempre quis usar: ágil, focado em mobilidade e com controle total sobre o que realmente importa na nossa rotina."</p>

     
      <h2>Pablo Cruz</h2>
      </div>
    </div>
  )
}

export default Testimonial
