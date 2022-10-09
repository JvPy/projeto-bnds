import { Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled } from '@mui/system';
import React from 'react'
import Floater from './Floater';

const StyledFloater = styled(Floater)(() => ({
    bottom: 90
}))

const WhatsappFloater = () => {
    const uri = "Gostaria de tirar duvidas sobre microcredito!"
    const encodedUri = encodeURI(uri);

    return (
        <Link href={`https://wa.me/5511945652383?${encodedUri}`}>
            <StyledFloater>
                <WhatsAppIcon />
            </StyledFloater>
        </Link>
    )
}

export default WhatsappFloater