import React from 'react'
import GestãodeUnidades from '../assets/gestaodeunidades.png';
import ControledeLaboratório from '../assets/controledelaboratorio.png';
import SegurançaCorporativa from '../assets/segurancacorporativa.png';
import RotasInteligentes from '../assets/rotasinteligentes.png';
import DocumentacaoDigital from '../assets/documentacaodigital.png';
import AssinaturaDigital from '../assets/assinaturadigital.png'

const work = () => {
  const workInfoData = [
    {
     image: GestãodeUnidades,
     title: "Gestão de Unidades",
     text: "Cadastro detalhado de empresas, instituições públicas e escolas com CNPJ e endereços vinculados."
    },

    {
     image: ControledeLaboratório ,
     title: "Controle de Laboratório ",
     text: " Gerencie máquinas pendentes, estabilizadores e laudos técnicos com histórico completo."
    },

     {
     image: SegurançaCorporativa ,
     title: "Segurança Corporativa",
     text: "Autenticação JWT e níveis de acesso personalizados para cada tipo de usuário."
    },

      {
     image: RotasInteligentes ,
     title: "Rotas Inteligentes",
     text: "Integração nativa com Waze e Google Maps para chegar mais rápido ao cliente."
    },

      {
     image:  DocumentacaoDigital  ,
     title: " Documentação Digital ",
     text: "Envio de fotos do serviço diretamente para a nuvem via Cloudinary (Armazenamento em Nuvem)."
    },

     {
     image:  AssinaturaDigital ,
     title: " Assinatura Digital ",
     text: "Colha a assinatura do cliente na tela do celular e finalize a OS na hora."
    },
  ]
  return (
    <div className="work-section-wrapper">
    <div className="work-section-top">
        <h1 className="primary-heading">Funcionalidades em Destaque</h1>
        <div className="work-section-bottom">
            {workInfoData.map((data) => (
                <div className="work-section-info" key={data.title}>
                    <div className="info-boxes-img-container">
                        <img src={data.image}  alt=""/>
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
   </div>
  )
}

export default work
