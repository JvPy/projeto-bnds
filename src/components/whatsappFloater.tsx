import { Fab } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'

const Floater = styled(Fab)(() => ({
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
}));

const WhatsappFloater = () => {
    return (
        <Floater>
            A
        </Floater>
    )
}

export default WhatsappFloater