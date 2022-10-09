import { styled } from '@mui/system';
import React from 'react'

const FooterSection = styled('div')(() => ({
    background: '#284141',
    color: 'white',
    maxHeight: '10vh',
    justifyContent: 'center',
    display: 'flex',
    padding: 20,
    width: '98%',
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
    display: 'flex'
}))

const Footer = () => {
    return (
        <FooterSection>
            <Row> 
                <Column>           
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </Column>
                <Column>           
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