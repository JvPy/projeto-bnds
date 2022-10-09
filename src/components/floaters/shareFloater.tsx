import { Link } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import React from 'react'
import Floater from './Floater';
import { styled } from '@mui/system';

const StyledFloater = styled(Floater)(() => ({
    bottom: 20
}))

const ShareFloater = () => {
    const uri = "Gostaria de tirar duvidas sobre microcredito!"
    const encodedUri = encodeURI(uri);

    return (
        <Link href={`https://wa.me/5517991824123?${encodedUri}`}>
            <StyledFloater>
                <ShareIcon />
            </StyledFloater>
        </Link>
    )
}

export default ShareFloater