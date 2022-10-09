import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import React, { useState } from 'react'

interface MyProps {
    handleScrol: (id: string) => void
}

const StyledAppBar = styled(AppBar)(() => ({
    background: '#284141'
}))

const Navbar = ({handleScrol}:MyProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleClose = (id: string) =>  handleScrol(id)
    
    const menuOptions = ["O BNDES", "Empreendedorismo", "Mei", "Formalizar"]
    
    return (
        <StyledAppBar position="fixed">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                >
                    <MenuIcon />
                    <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                        <List>
                            {
                                menuOptions.map((item, index) => (
                                    <ListItem key={item} button onClick={() => handleClose(index.toString())}>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Drawer>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    BNDES - Micro Credito
                </Typography>
                <Button color="inherit">Home</Button>
            </Toolbar>
        </StyledAppBar>
    )
}


export default Navbar;