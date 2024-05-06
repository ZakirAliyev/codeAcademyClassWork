import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static"
                    className={"navbar"}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        React App
                    </Typography>
                    <Button color="inherit">
                        <Link to={'/'}>
                            <span style={{color: 'white'}}>HOME</span>
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link to={'/employees'}>
                            <span style={{color: 'white'}}>EMPLOYEES</span>
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link to={'/employees'}>
                            <span style={{color: 'white'}}>FAVORITES</span>
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;