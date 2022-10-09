import { Link } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'

const FooterSection = styled('div')(() => ({
    background: '#284141',
    color: 'white',
    maxHeight: '40vh',
    justifyContent: 'center',
    display: 'flex',
    padding: 20,
    flexDirection: 'column'
}))

const Column = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
}))

const Row = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
}))

const FooterMessage = styled('div')(() => ({
    justifyContent: 'center',
    display: 'flex',
    paddingTop: 25
}))

const FooterLink = styled(Link)(() => ({
    color: '#5EB245',
    textDecoration: 'none',
    cursor: 'pointer'
}))

const Footer = () => {
    return (
        <FooterSection>
            <Row> 
                <Column>           
                    <span>Mais informacoes</span>
                    <FooterLink>Parceiro 1</FooterLink>
                    <FooterLink>Parceiro 2</FooterLink>
                    <FooterLink>Parceiro 3</FooterLink>
                    <FooterLink>Parceiro 4</FooterLink>
                </Column>
                <Column> 
                    <span>Parceiros</span>        
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </Column>
            </Row>
            <FooterMessage>
                Hackathon BNDES 2022
            </FooterMessage>
        </FooterSection>
    )
}

export default Footer;