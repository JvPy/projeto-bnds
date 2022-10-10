import React, { useEffect, useState } from 'react';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Section from './components/section';
import WhatsappFloater from './components/floaters/whatsappFloater';
import ShareFloater from './components/floaters/shareFloater';
import Modal from './components/modal';
import AccordionSection from './components/accordionSection';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    document.title = "Ensina Fácil"
  }, [])

  const handleClose = () => setIsOpen(false);
  
  const handleOpen = () => setIsOpen(true);
  

  const handleScrol = (id:string) => {
    const anchorComment = document.getElementById(id);
    if(anchorComment){
      anchorComment.scrollIntoView(true);
    }
  }


  
  return (
    <>
      <Navbar handleScrol={handleScrol}/>
      <div style={{paddingTop: 55}}/>
      <Modal isOpen={isOpen} handleClose={() => handleClose()}/>
      <Section id="0" subTitle="Ensina Fácil" title="Você conhece o BNDES?" color="#F1F1F1" image="vault"> 
        O BNDES é o Banco Nacional de Desenvolvimento Econômico e Social, uma empresa pública federal vinculada ao Ministério da Economia, sendo o principal instrumento do governo Federal, para financiamento a longo prazo e investimento nos diversos segmentos.
        <br /><br />
        Seus principais objetivos são: Apoiar programas, projetos, obras e serviços que se relacionam com o desenvolvimento econômico e social do País; e estimular a iniciativa privada, sem prejuízos de apoio a empreendimentos de interesse nacional a cargo do setor público.
        <br /><br />
        A Ensina Fácil, é um jeito fácil e pratico que vai tirar suas dúvidas, te orientar, te ensinar e te preparar os caminhos a serem percorridos, para que você alcance o sucesso no seu novo negócio.
        <br /><br />
        Pensando em você, que acredita que pode colaborar com o desenvolvimento econômico do nosso País, o BNDES te apresenta um jeito inovador e prático que facilitará sua nova jornada para a construção do seu negócio.
       </Section> 
      <Section id="1" title="E o que significa empreender?" color="#F5F5F5" image="business">
        Significa pôr em prática, executar, fazer e realizar. Pode ser começar uma empresa, um projeto no trabalho, uma ação no bairro, uma lojinha, etc. Empreender é começar de forma organizada o seu negócio, é fazer acontecer.
        <br /><br />
        Quando você tem uma ideia, organiza e coloca em prática, você é um empreendedor. O empreendedor é aquela pessoa que enxerga, promove e aproveita as novas oportunidades nos negócios se arriscando para colocar em prática seus sonhos, planos e ideias.
        <br /><br />
        Para obter um empréstimo no BNDES, é fundamental que o seu negócio ou a sua empresa procure gerar empregos, renda e inclusão social no país e estejam enquadradas nas áreas de atuação do banco.
      </Section>
      <Section id="2" title="Microempreendedor pessoa físico" color="#F1F1F1" image="deal">
        Se você é um empreendedor pessoa física que ainda não possui um CNPJ, você também consegue crédito no BNDES. O BNDES oferece empréstimos para pessoa física sempre que o capital seja destinado ao desenvolvimento de alguma atividade produtiva. Sim, se você quer iniciar o seu negócio ou alavancar e modernizar o que já tem, o BNDES está aqui para te ajudar.  Porém, não se esqueça, o BNDES é o Banco Nacional de Desenvolvimento Econômico, por isso, somente são financiados projetos com os seguintes objetivos:
        <br /><br />
        Modernização de empresas;<br />
        Expansão de negócios atuais (que já existem);<br />
        Realização de novos empreendimentos/Negócios.
        <br /><br /><br />
        Para obter um empréstimo no BNDES, é fundamental que o seu negócio ou a sua empresa procure gerar empregos, renda e inclusão social no país. E estejam enquadradas nas áreas de atuação do banco.
        <br /><br />
        Você pode fazer esta solicitação através do canal MPME de forma on-line. 
        <br /><br />
        Você deve ter em mente, o quanto de capital precisa, e qual será a sua atuação no mercado. 
        <br /><br />
        Simular seu empréstimo é fundamental, serve para analisar os pontos positivos e negativos de um empréstimo, valores, juros e compará-los com as propostas existentes no mercado. Isso é fundamental antes de assinar qualquer contrato.
        <br /><br />
        No Ensina Facil BNDES, você encontra parceiros que irão ajudar a colocar seu projeto em ação. (colocar o logo dos parceiros do BNDES).
      </Section>
      <AccordionSection id="4" title="Microempreendedor Individual-MEI" color="#F5F5F5" image="form" handleOpen={handleOpen} handleClose={handleClose} final />
      <Section id="4" title="Pronto pra responder o Quiz?" color="#F1F1F1" image="quiz" handleOpen={handleOpen} handleClose={handleClose} final />
      <WhatsappFloater />
      <ShareFloater />
      <Footer />
    </>
  )
}

export default App;
