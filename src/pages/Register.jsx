import React, { Component } from 'react'
import  { withRouter } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Navbar from '../components/Navbar'
import RegisterImage from '../assets/Register-1.png'
import AOS from 'aos'

class Register extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            mobile: '',
            college: '',
            password: '',
            confirmPassword: ''
        }
    }

    componentDidMount() {
        AOS.init({
            delay: 150,
            duration: 250
        })
    }

    handleName = name => {
        this.setState({name: name.target.value})
    }
    handleEmail = email => {
        this.setState({email: email.target.value})
    }
    handleMobile = mobile => {
        this.setState({mobile: mobile.target.value})
    }
    handleCollege = college => {
        this.setState({college: college.target.value})
    }
    handlePassword = password => {
        this.setState({password: password.target.value})
    }
    handleConfirmPassword = confirmPassword => {
        this.setState({confirmPassword: confirmPassword.target.value})
    }

    handleRegister = () => {
        const { name, email, mobile, college, password, confirmPassword } = this.state
        if(name && email && mobile && college && password && confirmPassword) {
            this.props.history.push('/stay-tuned')
        } else {
            return
        }
    }

    render() {
        const { name, email, mobile, college, password, confirmPassword } = this.state
        return (
            <div>
                <Navbar name = 'account' />
                <section className = 'section register-outer-container'>
                    <div data-aos = 'fade-down' className = 'container register-inner-container'>
                        <div className = 'columns'>
                            <div className = 'column' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <div className = 'register-picture'>
                                    <LazyLoadImage src = {RegisterImage} alt = 'Register' effect = 'blur' />
                                </div>
                            </div>
                            <div className = 'column'>
                                <section className = 'section'>
                                    <div className = 'container register-form-container'>
                                        <div className = 'register-form'>
                                            <div className = 'title is-3 is-lato has-text-danger'>
                                                Sign up
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <label className = 'label is-size-5 is-lato'>
                                                        Name
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <input type = 'text' className = 'input is-rounded' value = {name} onChange = {this.handleName} />
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <label className = 'label is-size-5 is-lato'>
                                                        Email
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <input type = 'text' className = 'input is-rounded'  value = {email} onChange = {this.handleEmail} />
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <label className = 'label is-size-5 is-lato'>
                                                        Mobile
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <input type = 'text' className = 'input is-rounded' value = {mobile} onChange = {this.handleMobile}/>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <label className = 'label is-size-5 is-lato'>
                                                        College
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <input type = 'text' className = 'input is-rounded' value = {college} onChange = {this.handleCollege}/>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <label className = 'label is-size-5 is-lato'>
                                                        Password
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <input type = 'password' className = 'input is-rounded' value = {password} onChange = {this.handlePassword}/>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <label className = 'label is-size-5 is-lato'>
                                                        Confirm password
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <input type = 'password' className = 'input is-rounded' value = {confirmPassword} onChange = {this.handleConfirmPassword}/>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <button className = 'button is-rounded is-fullwidth is-danger is-lato has-text-weight-semibold register-button' onClick = {this.handleRegister}>
                                                        Register
                                                    </button>
                                                </div>
                                            </div>
                                            <div className = 'box login-redirect-box'>
                                                <div className = 'field'>
                                                    <div className = 'control'>
                                                        <div className = 'subtitle is-6 has-text-centered is-lato has-text-weight-semibold' onClick = {() => this.props.history.push('/login')}>
                                                            Have an account? <a>Login</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(Register)
