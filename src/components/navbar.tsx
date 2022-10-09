import { AppBar, Button, Drawer, IconButton, Link, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'

interface MyProps {
    handleScrol: (id: string) => void
}

const Navbar = ({handleScrol}:MyProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleClose = (id: string) =>  handleScrol(id)
    
    const menuOptions = ["O bnds", "Empreendedorismo", "Mei", "Formalizar"]
    
    return (
        <AppBar position="fixed" style={{background: '#284141'}}>
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
        </AppBar>
    )
}


export default Navbar;