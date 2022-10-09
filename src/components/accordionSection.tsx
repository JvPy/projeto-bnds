/* eslint-disable @typescript-eslint/no-unused-vars */
import reactStringReplace from 'react-string-replace';
import { Accordion, AccordionDetails, AccordionSummary, Button, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'
import vault from '../static/vault.svg'
import business from '../static/business.svg'
import form from '../static/form.svg'
import deal from '../static/deal.svg'
import quiz from '../static/quiz.svg'

const PageSection = styled('div')(() => ({
    padding: 40,
    minHeight: '60vh',
}));

const Title = styled(Typography)(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 26,
}))

const SubTitle = styled(Typography)(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 17,
    textAlign: 'center'
}))

const NextSection = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
}))


const getImage = (image:string) => {
    if(image === "business")
        return business

    if(image === "vault")
        return vault;

    if(image === "form")
        return form
    
    if(image === 'deal')
        return deal
    
    if(image === 'quiz')
        return quiz
}

const accordionTabs = [{
    title: 'O que é uma MEI e como funciona?',
    content: `MEI, significa Microempreendedor Individual, ou seja, um profissional autônomo. 
    <br /><br />Quando você se cadastra como um MEI, você passa a ter um CNPJ (Cadastro Nacional de Pessoa Jurídica), ou seja, facilidades com a abertura de conta bancária, no pedido de empréstimos e na emissão de notas fiscais, além de ter obrigações e direitos de uma pessoa jurídica.
    <br /><br />Com a MEI, você tem vários benefícios, você tem direito a aposentadoria por idade, auxílio doença (Benefício por incapacidade temporária), aposentadoria por invalidez, salário maternidade, pensão por morte, auxílio-reclusão. 
    <br /><br />Quem é MEI entrega apenas a declaração de imposto de renda de pessoa física, que é obrigatória caso o MEI tenha renda tributável superior a taxa de isenção de R $28.559,70, o que equivale a R $2.379.97 por mês.
    `,
    link: null
},
{
    title: 'Como me formalizar como Microempreendedor individual?',
    content: `Através do site www.gov.br - cadastrar Microempreendedor Individual (MEI), preencha o formulário de inscrição de MEI. Assinale as declarações e finalize.
    Não há custos, é gratuito. E sua despesa será apenas o pagamento mensal do Simples Nacional. Independentemente do valor das notas fiscais que você emitir no mês (e mesmo se não emitir), você vai pagar apenas o valor mensal correspondente a sua área de atuação.
    Lista de atividades da MEI _link_.<br /><br />
    Veja se a atividade escolhida por você se enquadra no Microempreendedor Individual.<br /><br />
    Aqui, após preencher todos os requisitos exigidos pelo BNDES, o microempreendedor consegue um limite de até R$20.000,00 para tirar seus planos do papel e colocar suas ideias em ação.
    Mas para isso, você precisa estar de acordo com essas exigências. Não ter restrições em seu nome, pagar suas contas em dia, e se houver um bem jurídico de natureza individual, exemplo: um carro, uma moto, uma casa, etc., e ou até um fiador ou avalista, você estará apto a receber seu financiamento. O BNDES ainda disponibiliza o Cartão BNDES MEI, que é um produto do Banco Nacional de Desenvolvimento Econômico e Social (BNDES), que serve para financiar os investimentos de empresas de qualquer categoria sediadas no Brasil, como a MEI, respeitando o limite máximo de faturamento anual de cada tipo de CNPJ.
    Antes de solicitar um empréstimo, é preciso ter claro o que o BNDES faz com a classificação dos seus clientes, de acordo com o tamanho da sua empresa. <br /><br />
    Porque escolher o BNDES?<br /><br />
    Crédito com a menor taxa de juros do Brasil, tendo mais tempo para quitar a dívida com uma carência de até 24 meses para começar a pagá-la. Além de todos os benefícios do Cartão BNDES.`,
    link: `https://jucep.pb.gov.br/servicos-jucep/livros-mercantis/arquivos-livros/mei-lista-de-atividades.pdf/view`
}]

const AccordionSection = ({children, title, subTitle, id, final, color, image, handleOpen}: any) => {
    const [expanded, setExpanded] = React.useState<string | false>('panel0');

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };
    return (
        <PageSection id={id} style={{backgroundColor: color}}>
            <SubTitle>{subTitle}</SubTitle>
            <Title>{title}</Title>
            {image && 
                <NextSection>
                    <img src={getImage(image)} alt='' style={{ maxWidth: '80%', maxHeight: '30vh', marginTop: '25px' }}/>
                </NextSection>
            }
            {accordionTabs.map((tab, index) => {
                const {content, link} = tab

                let formatedContent = link ? reactStringReplace(content, 'MEI _link_', (match, i) => (
                    <Link href={`${link}`}>MEI</Link>
                )) : content;

                formatedContent = reactStringReplace(formatedContent, '<br />', (match, i) => (
                    <br />
                ))
                return (
                    <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>{tab.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            {formatedContent}
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </PageSection>
    )
}

export default AccordionSection