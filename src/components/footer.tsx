import { Link } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'
import omie from '../static/omie.png'
import marketup from '../static/marketup.png'
import raiox from '../static/raiox.png'
import vhsys from '../static/vhsys.png'

const FooterSection = styled('div')(() => ({
    background: '#284141',
    color: 'white',
    minHeight: '40vh',
    justifyContent: 'center',
    display: 'flex',
    padding: 30,
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

const partners = [
{
    image: 'marketup',
    link: 'https://marketup.com/bndes/?source=49'
},
{
    image: 'omie',
    link: 'https://www.omie.com.br/parceiros/bndes/'
},
// {
//     image: 'raiox',
//     link: 'https://oferta.raiox.app/parceria-bndes'
// },
{
    image: 'vhsys',
    link: 'https://www.vhsys.com.br/bndes'
}]

const getImage = (image: string) => {
    if(image === "omie")
        return omie

    if(image === "marketup")
        return marketup;

    if(image === "raiox")
        return raiox

    if(image === 'vhsys')
        return vhsys
}

const Footer = () => {
    return (
        <FooterSection>
            <Column> 
                <Row>Parceiros</Row>        
                <Row> 
                    {partners.map(partner => {
                        return (
                            <Link href={partner.link}>
                                {partner.image && <img src={getImage(partner.image)} alt='' style={{width: "100%", height: '100%'}}/> }
                            </Link>
                        )
                    })}
                </Row>
            </Column>
            <FooterMessage>
                Hackathon BNDES 2022
            </FooterMessage>
        </FooterSection>
    )
}

export default Footer;