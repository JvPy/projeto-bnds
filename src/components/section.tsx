
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'

const PageSection = styled('div')(() => ({
    paddingBottom: '10px',
    paddingTop: '10px',
    minHeight: '80vh',
}));

const Title = styled(Typography)(() => ({
    display: 'flex',
    justifyContent: 'center',
    fontSize: 60
}))

const Text = styled(Typography)(() => ({
    display: 'flex',
    justifyContent: 'center',
    fontSize: 26
}))

const NextSection = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
}))

const NextSectionButton = styled(Button)(() => ({
    fontSize: 32,
    border: '1px solid blue'
}))

const Section = ({children, title, id, nextSection}: any) => {
    return (
        <PageSection id={id}>
            <Title>{title}</Title>
            <Text>
                {children}
            </Text>
            <NextSection>
                <NextSectionButton>Next Section</NextSectionButton>
            </NextSection>
        </PageSection>
    )
}

export default Section