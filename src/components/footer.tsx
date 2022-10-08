import { styled } from '@mui/system';
import React from 'react'

const FooterSection = styled('div')(() => ({
    background: 'darkgrey',
    color: 'white',
    maxHeight: '10vh'
}))

const Footer = () => {
    return (
        <FooterSection>
            All rights reserved
        </FooterSection>
    )
}

export default Footer;