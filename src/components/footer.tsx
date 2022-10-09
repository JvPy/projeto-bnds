import { styled } from '@mui/system';
import React from 'react'

const FooterSection = styled('div')(() => ({
    background: 'darkgrey',
    color: 'white',
    maxHeight: '10vh',
    justifyContent: 'center',
    display: 'flex',
    padding: 20
}))

const Footer = () => {
    return (
        <FooterSection>
            Hackathon BNDES 2022
        </FooterSection>
    )
}

export default Footer;