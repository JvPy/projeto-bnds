import { Fab } from '@mui/material';
import { styled } from '@mui/system';

const Floater = styled(Fab)(() => ({
    margin: 0,
    top: 'auto',
    right: 20,
    left: 'auto',
    position: 'fixed',
    background: '#25D366',
    color: 'white'
}));

export default Floater