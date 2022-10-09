import { styled } from '@mui/system';
import React from 'react'

const NavbarSection = styled('div')(() => ({
    background: 'lightgrey',
    color: 'white',
    maxHeight: '10vh',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    width: '100%',
    fontSize: 26,
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid white',
    zIndex: 100
}))

const Separator = styled('span')(() => ({
    border: '0.5px solid white',
    width: '90%'
}))

const Navbar = () => {
    return (
        <NavbarSection>
            BNDES
            <Separator />
            Portal do microcredito
        </NavbarSection>
    )
}

export default Navbar;