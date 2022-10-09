import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react'

interface MyProps {
    isOpen: boolean,
    handleClose: () => void,
    handleSend?: () => void,
}

const Modal = ({isOpen, handleClose, handleSend}: MyProps) => {
    return (
        <Dialog open={isOpen}>
            <DialogTitle id="responsive-dialog-title">
                Quiz !
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Veja o video abaixo e se prepare para o quiz!
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        // frameborder='0'
                        allow='autoplay; encrypted-media'
                        // allowfullscreen
                        title='video'
                    />
                </DialogContentText>
            </DialogContent>
            <DialogContent>
                <DialogContentText>
                    O que significa BNDES

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Banco Nacional" />
                            <FormControlLabel value="male" control={<Radio />} label="Banco Internacional" />
                            <FormControlLabel value="other" control={<Radio />} label="Banco Nacional de Desenvolvimento Econômico e Social" />
                        </RadioGroup>
                        </FormControl>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => handleClose()}>
                    Fechar
                </Button>
                <Button onClick={() => handleClose()} autoFocus>
                    Enviar
                </Button>
            </DialogActions>
        </Dialog>
    );
  };

export default Modal;