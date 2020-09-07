import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link as Links, Collapse} from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

//Reducers





function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Links color="inherit" href="https://material-ui.com/">
                Your Website
      </Links>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn(props) {
    
    
    const classes = useStyles();
    const {
        values: { email, password },
        errors,
        touched,
        handleChange,
        isValid,
        setFieldTouched,
        handleSubmit,
        
    } = props;

    const change = (name,e) =>{
        e.persist();
        handleChange(e);
        setFieldTouched(name,true,false);
    }
    

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Collapse in={props.authErrors?true:false}>
                        <Alert
                            severity="error"
                            
                        >{props.authErrors}</Alert>


                    </Collapse>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        helperText={touched.email ? errors.email:""}
                        value={email}
                        onChange = {change.bind(null,"email")}
                        error={(errors.email && touched.email)?true:false}
                        
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="password"
                        helperText = {touched.password?errors.password:""}
                        value = {password}
                        error={(errors.password && touched.password) || props.authErrors ? true : false}
                        onChange = {change.bind(null,'password')}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled = {!isValid}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Links href="#" variant="body2" component={Link} to="/forgotpassword">
                                Forgot password?
                            </Links>
                        </Grid>
                        <Grid item>
                            <Links variant="body2" component={Link} to="/register">
                                {"Don't have an account? Sign Up"}
                            </Links>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}