/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'
import vault from '../static/vault.svg'
import business from '../static/business.svg'
import form from '../static/form.svg'
import deal from '../static/deal.svg'
import quiz from '../static/quiz.svg'

const PageSection = styled('div')(() => ({
    padding: 40,
    minHeight: '60vh',
}));

const Title = styled(Typography)(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 26,
}))

const SubTitle = styled(Typography)(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 17,
    textAlign: 'center'
}))

const Text = styled(Typography)(() => ({
    display: 'flex',
    justifyContent: 'center',
    fontSize: 18,
    marginTop: 25
}))

const NextSection = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
}))

const NextSectionButton = styled(Button)(() => ({
    fontSize: 16,
    border: '1px solid #5EB245',
    marginTop: 17,
    color: 'white',
    background: '#5EB245',
    '&:hover': {
        color:'#5EB245'
    }
}))

const getImage = (image:string) => {
    if(image === "business")
        return business

    if(image === "vault")
        return vault;

    if(image === "form")
        return form
    
    if(image === 'deal')
        return deal
    
    if(image === 'quiz')
        return quiz
}

const Section = ({children, title, subTitle, id, final, color, image, handleOpen}: any) => {
    return (
        <PageSection id={id} style={{backgroundColor: color}}>
            <SubTitle>{subTitle}</SubTitle>
            <Title>{title}</Title>
            {image && 
                <NextSection>
                    <img src={getImage(image)} alt='' style={{ maxWidth: '80%', maxHeight: '30vh', marginTop: '25px' }}/>
                </NextSection>
            }
            <Text>
                {children}
            </Text>
            {final && 
                <NextSection>
                    <NextSectionButton onClick={() => handleOpen()}>Responda o quiz!</NextSectionButton>
                </NextSection>
            }
        </PageSection>
    )
}

export default Section