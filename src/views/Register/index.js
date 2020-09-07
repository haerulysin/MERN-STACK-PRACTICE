import React, { Component } from 'react';
import { Formik} from 'formik';
import * as Yup from 'yup';
import FormRegister from './FormRegister';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {registerUser} from '../../helper/actions/authActions';
import {withRouter} from 'react-router-dom';


class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            registerErrors : ''
        }
    }

    static getDerivedStateFromProps(props, state){
        if(props.errors){
            return{
                registerErrors: props.errors.message
            };
        }

        return null;
    }

    componentWillMount(){
        
    }

    render() {
        const values = {fname:"",lname:"",email: "", password: "",password2:""};
        const validationSchema = Yup.object({
            email: Yup.string("Masukkan email").email("Masukkan email valid").required("Masukkan email"),
            password: Yup.string("").min(3, "Password minimal 3 karakter").required("Password harus di isi"),
            fname: Yup.string("").required("Masukkan nama depan"),
            lname: Yup.string("").required("Masukkan nama belakang"),
            password2: Yup.string("").required("Konfirmasi password").oneOf([Yup.ref("password")],"Password tidak cocok"),

        });

        const handleLoginSubmit = (values, actions) => {
            values['name'] = values['fname']+ " "+ values['lname']
            this.props.registerUser(values, this.props.history);

            this.setState({registerErrors:''})
        }

        return (
            <React.Fragment>
                <Formik
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit = {handleLoginSubmit}
                >
                    {props=>
                        <FormRegister
                            {...props}
                            registerErrors={this.state.registerErrors} />
                    }
                </Formik>
            </React.Fragment>
        );
    }
}

index.protoTypes = {
    registerUser : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateProps,
    {registerUser}
)(withRouter(index));