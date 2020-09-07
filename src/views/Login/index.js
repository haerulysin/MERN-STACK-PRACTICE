import React, { Component } from 'react';
import FormLogin from './FormLogin';
import {Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../helper/actions/authActions';




class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authErrors: "AAA",
            openErrorMessage : false,
        }

    }

    componentDidMount(){
        if(localStorage.jwtToken){
            this.props.history.push('/dashboard');
        }
    }

    static getDerivedStateFromProps(props,state){
        if(props.auth.isAuthenticated){
            props.history.push('/dashboard');
        }

        if(props.errors){
            return{
                authErrors: props.errors.message
            }
        }

        return null;
    }

    

    setErrorMessage(errorMessage){
        this.setState({ formErrors:errorMessage})
        console.log(this.state.formErrors);
    }

    handleSubmitForm(values){
        this.props.loginUser(values);
    }

    handleErrorMessage(open){
        this.setState({openErrorMessage:open})
    }

    render() {
        const values = {email: "", password: "" };
        const validationSchema = Yup.object({
            email : Yup.string("Masukkan email").email("Masukkan email valid").required("Masukkan email"),
            password : Yup.string("").min(3,"Password minimal 3 karakter").required("Password harus di isi"),
        });

        const handleLoginSubmit = (values, actions) => {
            this.handleSubmitForm(values);
        }
        
        return (
           <React.Fragment>
                <Formik
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit={handleLoginSubmit}
                    
                >
                    {props =>
                    <FormLogin
                        {...props}
                        authErrors={this.state.authErrors}

                    />}
                </Formik>
           </React.Fragment>
        );
    }
}

index.propTypes = {
    loginUser : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {loginUser}
)(index);