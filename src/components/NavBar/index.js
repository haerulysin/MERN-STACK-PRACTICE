import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import{
    AppBar,
    Toolbar,
    Button
} from '@material-ui/core';
class index extends Component {
    render() {
        return (
            <div>
                <AppBar position="relative">
                    <Toolbar>
                        <Link to="/home">
                            <Button variant="text" color="secondary">Home</Button>
                        </Link>
                        <Link to="/papa">
                            <Button variant="text" color="secondary">About</Button>
                        </Link>
                        <Link to="/contact" style={{ flexGrow: 1 }}> 
                            <Button variant="text" color="secondary" >Contact Us</Button>
                        </Link>

                        <Link to="/login">
                            <Button variant="contained" color="secondary">Login</Button>
                        </Link>

                    </Toolbar>
                </AppBar>
            <hr />
            </div>
        );
    }
}

export default index;