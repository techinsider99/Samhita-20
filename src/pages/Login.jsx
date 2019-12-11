import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import LoginImage from '../assets/Login-01.png'
import Navbar from '../components/Navbar'
import AOS from 'aos'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        AOS.init({
            delay: 150,
            duration: 250
        })
    }

    handleEmail = email => {
        this.setState({email: email.target.value})
    }

    handlePassword = password => {
        this.setState({password: password.target.value})
    }

    handleLogin = () => {
        if(this.state.email && this.state.password) {
            this.props.history.push('/stay-tuned')
        }
        else {
            alert('Fill in all the fields')
        }
    }

    render() {
        const { email, password } = this.state
        return (
            <div>
                <Navbar name = 'account' />
                <section className = 'section login-outer-container'>
                    <div data-aos = 'fade-down' className = 'container login-inner-container'>
                        <div className = 'columns'>
                            <div className = 'column' style = {{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                <div className = 'login-picture'>
                                    <LazyLoadImage src = {LoginImage} alt ='Login' effect = 'blur' />
                                </div>
                            </div>
                            <div className = 'column' >
                            <section className = 'section'>
                                    <div className = 'container register-form-container'>
                                        <div className = 'login-form'>
                                            <div className = 'title is-3 is-lato has-text-link'>
                                                Login to continue
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control has-icons-right'>
                                                    <input type = 'text' placeholder = 'E-mail' className = 'input is-rounded' value = {email} onChange = {this.handleEmail}/>
                                                    <span className = 'icon is-right'>
                                                        <FontAwesomeIcon icon = {faEnvelope} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control has-icons-right'>
                                                    <input type = 'password' placeholder = 'Password' className = 'input is-rounded' value = {password} onChange = {this.handlePassword}/>
                                                    <span className = 'icon is-right'>
                                                        <FontAwesomeIcon icon = {faLock} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <button className = 'button is-rounded is-fullwidth is-link is-lato has-text-weight-semibold register-button' onClick = {this.handleLogin}>
                                                        Login
                                                    </button>
                                                </div>
                                            </div>
                                            <div className = 'box login-redirect-box'>
                                                <div className = 'field'>
                                                    <div className = 'control'>
                                                        <div className = 'subtitle is-6 has-text-centered is-lato has-text-weight-semibold' onClick = {() => this.props.history.push('/register')}>
                                                            Don't have an account? <a>Sign up</a>
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

export default withRouter(Login)
