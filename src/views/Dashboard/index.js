import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../helper/actions/authActions';
import {
    Grid, Container, Typography, Button,

} from '@material-ui/core'; 
class index extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    
    componentDidMount(){
        if (!localStorage.jwtToken){
            this.props.history.push('/login');
        }
    }

    handleLogoutBtn(){
        this.props.logoutUser();
        this.props.history.push('/login')
    }

    render() {
        const {user} = this.props.auth;
        return (
            <Container>
                <Grid container>
                    <Grid item xs={12} style={{flexGrow:1}}>
                        <Typography variant="h2">Dashboard</Typography>
                    </Grid>
                    <Grid xs={11} item>
                        <Typography >{user.name}</Typography>                        
                    </Grid>
                    <Grid xs={1} item>
                        <Button variant="contained" onClick={this.handleLogoutBtn.bind(this)}>Logout</Button>
                    </Grid>

                    <Grid item xs={12}>
                        
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

index.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(
    mapStateToProps,
    {logoutUser}
)(index);