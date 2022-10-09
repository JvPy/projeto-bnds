import React, { useState } from 'react';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Section from './components/section';
import WhatsappFloater from './components/floaters/whatsappFloater';
import ShareFloater from './components/floaters/shareFloater';
import Modal from './components/modal';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleOpen = () => {
    setIsOpen(true);
  }

  return (
    <>
      <Navbar />
      <div style={{paddingTop: 60}}/>
      <Modal isOpen={isOpen} handleClose={() => handleClose()}/>
      <Section title="Você conhece o BNDES???" color="lightgreen" handleOpen={handleOpen} handleClose={handleClose}> 
        O BNDES é o Banco Nacional de Desenvolvimento Econômico e Social, uma empresa pública federal vinculado ao Ministério da Economia, sendo o principal instrumento do governo Federal, para financiamento a longo prazo e investimento nos diversos segmentos. Seus principais objetivos são: Apoiar programas, projetos, obras e serviços que se relacionam com o desenvolvimento econômico e social do País; e estimular a iniciativa privada, sem prejuízos de apoio a empreendimentos de interesse nacional a cargo do setor público.
        <br /><br />
        Pensando em você, que acredita que pode colaborar com o desenvolvimento econômico do nosso País, o BNDES te apresenta um jeito inovador e prático que facilitará sua nova jornada para a construção do seu negócio. A Ensina Fácil.
        <br /><br />
        A Ensina Fácil, é um jeito fácil e pratico que vai tirar suas dúvidas, te orientar, te ensinar e te preparar os caminhos a serem percorridos, para que você alcance o sucesso no seu novo negócio.
        <br /><br />
        Aqui você vai entender sobre empreendedorismo e como abrir e ou alavancar o seu negócio. Te daremos base para saber se você está pronto para empreender
      </ Section> 
      <Section title="E o que significa empreender?" color="lightgray" image="loan.png">
        Significa pôr em pratica, executar, fazer, realizar. Pode ser começar uma empresa, um projeto no trabalho, uma ação no bairro, uma lojinha, etc. Empreender é começar de forma organizada o seu negócio, é fazer acontecer.
        <br /><br />
        Quando você tem uma ideia, se organiza e coloca em pratica, você é um empreendedor. O empreendedor é aquela pessoa que enxerga, promove e aproveita as novas oportunidades nos negócios se arriscando para colocar em prática seus sonhos, planos e ideias.
      </Section>
      <Section title="O que é uma MEI e como funciona?" color="lightblue">   
        MEI, significa Microempreendedor Individual, ou seja, um profissional autônomo. Quando você se cadastra como um MEI, você passa a ter um CNPJ (Cadastro Nacional de Pessoa Jurídica), ou seja, facilidades com a abertura de conta bancaria, no pedido de empréstimos e na emissão de notas fiscais, além de ter obrigações e direitos de uma pessoa jurídica.
        <br /><br />
        Com a MEI, você tem vários benefícios, você tem direito a aposentaria por idade, auxilio doença (Benefício por incapacidade temporária), aposentadoria por invalidez, salario maternidade, pensão por morte, auxilio-reclusão. 
        <br /><br />
        Quem é MEI entrega apenas a declaração de imposto de renda de pessoa física, que é obrigatória caso o MEI tenha renda tributável superior a taxa de isenção de R$ 28.559,70, o que equivale a R$ 2.379.97 por mês.
      </Section>
      <Section title="Como me formalizar como Microempreendedor individual? " color="lightgray"> 
        Através do site www.gov.br- cadastrar Microempreendedor Individual (MEI), preencha o formulário de inscrição de MEI. Assinale as declarações e finalize.
        <br /><br />
        Não há custos, é gratuito. E sua despesa mensal será apenas o pagamento mensal do Simples Nacional. Independentemente do valor das notas fiscais que você emitir no mês (e mesmo se não emitir), você vai pagar apenas o valor mensal correspondente a sua área de atuação.
      </Section>
      <WhatsappFloater />
      <ShareFloater />
      <Footer />
    </>
  )
}

export default App;
