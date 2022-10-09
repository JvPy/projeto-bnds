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
    handleSend?: () => void,
}

const QuizButton = styled(Button)(() => ({
    background: '#5EB245',
    color: '#284141',
    border: '1px solid #5EB245'
}))

const Modal = ({isOpen, handleClose, handleSend}: MyProps) => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };
      
    return (
        <Dialog open={isOpen}>
            <DialogTitle id="responsive-dialog-title">
                Quiz !
            </DialogTitle>
            {/* <DialogContent>
                <DialogContentText>
                    Veja o video abaixo e se prepare para o quiz!
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        // frameborder='0'
                        allow='autoplay; encrypted-media'
                        // allowfullscreen
                        title='video'
                    />
                </DialogContentText>
            </DialogContent> */}
            <DialogContent>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>O que significa BNDES</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Question 
                            option1='Banco Nacional' 
                            option2='Banco Internacional' 
                            option3='Banco Nacional de Desenvolvimento Econômico e Social' 
                            questionNumber={1}
                        />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Collapsible Group Item #2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Question 
                            option1='Banco Nacional' 
                            option2='Banco Internacional' 
                            option3='Banco Nacional de Desenvolvimento Econômico e Social' 
                            questionNumber={2}
                        />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>Collapsible Group Item #3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Question 
                            option1='Banco Nacional' 
                            option2='Banco Internacional' 
                            option3='Banco Nacional de Desenvolvimento Econômico e Social' 
                            questionNumber={3}
                        />
                    </AccordionDetails>
                </Accordion>
            </DialogContent>
            <DialogActions>
                <QuizButton autoFocus onClick={() => handleClose()}>
                    Fechar
                </QuizButton>
                <QuizButton onClick={() => handleClose()} autoFocus>
                    Enviar
                </QuizButton>
            </DialogActions>
        </Dialog>
    );
  };

export default Modal;