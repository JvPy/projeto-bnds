import { 
    Accordion, 
    AccordionDetails, 
    AccordionSummary, 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle, 
    Typography 
} from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'
import Question from './question';

interface MyProps {
    isOpen: boolean,
    handleClose: () => void,
}

const QuizButton = styled(Button)(() => ({
    background: '#5EB245',
    color: 'white',
    border: '1px solid #5EB245',
    '&:hover': {
        color:'#5EB245'
    }
}))

const questions = [
{
    title: 'Você sabe qual o objetivo do BNDES?',
    options: [{
        value: "0a",
        text: "Banco Nacional de Estudos",
    },
    {
        value: "0b",
        text: "Banco das Nações Unidas",
    },
    {
        value: "0c",
        text: "Banco Nacional de Desenvolvimento Econômico e Social",
    }],
    correctValue: "1c"
},
{
    title: 'O que é empreendedorismo?',
    options: [{
        value: "1a",
        text: "Empreendedorismo é o processo de fechar uma empresa.",
    },
    {
        value: "1b",
        text: "Empreendedorismo é o processo de iniciativa de implementar novos negócios ou mudanças em empresas já existentes.",
    },
    {
        value: "1c",
        text: "Empreendedorismo é a forma de adquirir empréstimos.",
    }],
    correctValue: "2b"
},
{
    title: 'O que é necessário para adquirir empréstimo no BNDES?',
    options: [{
        value: "2a",
        text: "Para obter um empréstimo no BNDES, é fundamental que o seu negócio ou a sua empresa procure gerar empregos, renda e inclusão social no país e estejam enquadradas nas áreas de atuação do banco.",
    },
    {
        value: "2b",
        text: "É necessário apresentar atestado de capacidade técnica;",
    },
    {
        value: "2c",
        text: "Para obter um empréstimo do BNDES é necessário que apresente seu roteiro de férias.",
    }],
    correctValue: "3a"
},
{
    title: 'Quais as vantagens sendo MEI?',
    options: [{
        value: "3a",
        text: "Tem direito apenas ao FGTS.",
    },
    {
        value: "3b",
        text: "Tem direito a pensão alimentícia, auxilio energia elétrica e FGTS.",
    },
    {
        value: "3c",
        text: "Você tem vários benefícios se tornando MEI, tem direito a aposentaria por idade, Benefício por incapacidade temporária, aposentadoria por invalidez, salario maternidade, pensão por morte, auxilio-reclusão.",
    }],
    correctValue: "4c"
},
{
    title: 'Porque escolher o BNDES?',
    options: [{
        value: "4a",
        text: "Por que o Cartão BNDES me ausenta das anuidades.",
    },
    {
        value: "4b",
        text: "Crédito com a menor taxa de juros do Brasil tendo mais tempo para quitar a dívida quanto para começar a pagá-la. Além de todos os benefícios do Cartão BNDES.",
    },
    {
        value: "4c",
        text: "Nenhuma das alternativas anteriores.",
    }],
    correctValue: "5b"
}]

const Modal = ({isOpen, handleClose}: MyProps) => {
    const [expanded, setExpanded] = React.useState<string | false>('panel0');
    const [options, setOptions] = React.useState<string[]>([]);
    const [disabled, setDisabled] = React.useState(true)
    const [certificate, setCertificate] = React.useState(false)

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };

    const handleOption = (question: number, value: string) => {
        options[question] = value
        setOptions(options);
        if(options.length === 5) setDisabled(false)
    }

    const handleSend = () => {
        // BlockchainService.setCertificate({
        //     certificate: "bndes",
        //     kind: "microcredito",
        //     phone: "123456"
        // })
        // handleClose()
        setCertificate(true);
    }
      
    return (
        <Dialog open={isOpen}>
            <DialogTitle id="responsive-dialog-title">
                {certificate ? "Salve o numero do seu certificado!" : "Quiz !"}
            </DialogTitle>
            
            <DialogContent>
                {certificate && <div> e61f5a12e0823b128cab8a2bfe1bfbe4 </div>}
                {!certificate &&
                    questions.map((question, index) => {
                        return (
                            <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography>{question.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Question 
                                        options={question.options}
                                        handleOption={handleOption}
                                    />
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </DialogContent>
            <DialogActions>
                <QuizButton autoFocus onClick={() => handleClose()}>
                    Fechar
                </QuizButton>
                <QuizButton onClick={() => handleSend()} autoFocus disabled={disabled && !certificate}>
                    Enviar
                </QuizButton>
            </DialogActions>
        </Dialog>
    );
  };

export default Modal;