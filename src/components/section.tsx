/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'
import loan from '../static/loan.png'

const PageSection = styled('div')(() => ({
    paddingBottom: '10px',
    paddingTop: '10px',
    minHeight: '60vh',
}));

const Title = styled(Typography)(() => ({
    display: 'flex',
    justifyContent: 'center',
    fontSize: 40,
    textAlign: 'center'
}))

const Text = styled(Typography)(() => ({
    display: 'flex',
    justifyContent: 'center',
    fontSize: 24,
    padding: 20
}))

const NextSection = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
}))

const NextSectionButton = styled(Button)(() => ({
    fontSize: 32,
    border: '1px solid blue'
}))

const Section = ({children, title, id, nextSection, color, image, handleOpen}: any) => {
    return (
        <PageSection id={id} style={{backgroundColor: color}}>
            <Title>{title}</Title>
            {image && <img src={loan} alt='' style={{ width: '100%', height: '30vh' }}/>}
            <Text>
                {children}
            </Text>
            <NextSection>
                <NextSectionButton onClick={() => handleOpen()}>Veja o video e responda o quiz!</NextSectionButton>
            </NextSection>
        </PageSection>
    )
}

export default Section