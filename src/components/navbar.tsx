import { styled } from '@mui/system';
import React from 'react'

const NavbarSection = styled('div')(() => ({
    background: 'darkgrey',
    color: 'white',
    maxHeight: '10vh',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    width: '100%',
    fontSize: 26,

}))

const Navbar = () => {
    return (
        <NavbarSection>
            BNDS
        </NavbarSection>
    )
}

export default Navbar;