import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import LoginImage from '../assets/Login-01.png'
import Navbar from '../components/Navbar'
import AOS from 'aos'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'
import { notification, Modal } from 'antd'


class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            isLoading: false
        }
    }

    componentDidMount() {
        AOS.init({
            delay: 150,
            duration: 250
        })
    }

    handleMouseDown = element => {
        document.getElementById(element).type = 'text'
    }

    handleMouseUp = element => {
        document.getElementById(element).type = 'password'
    }

    handleEmail = email => {
        this.setState({email: email.target.value})
    }

    handlePassword = password => {
        this.setState({password: password.target.value})
    }

    handleLogin = () => {
        if(this.state.email && this.state.password) {
            this.setState({isLoading: true}, () => {
                axios.post('https://samhita-backend.herokuapp.com/login', {
                mailid: this.state.email,
                pass: this.state.password
                })
                .then(res => {
                    console.log(res.data)
                    this.setState({ isLoading: false })
                    if(res.data.islogged === 'email_not') {
                        notification.warn({
                            message: 'Oops!',
                            description: 'It seems that you have not registered yet. Proceed to register',
                            placement: 'topRight',
                            duration: 3,
                            top: 90,
                            className: 'notification',
                            onClose: this.props.history.push('/register')
                        })
                    } else if(res.data.islogged === 'pass_wrong') {
                        notification.warn({
                            message: 'Oops!',
                            description: 'Wrong password. Try again',
                            placement: 'topRight',
                            duration: 3,
                            top: 90,
                            className: 'notification',
                        })
                    }
                })
                .catch(err => {
                    this.setState({ isLoading: false })
                    console.log(err.message)
                })
            })
        }
        else {
            notification.warn({
                message: 'Not yet!',
                description: 'Fill in all the fields',
                placement: 'topRight',
                duration: 3,
                top: 90,
                className: 'notification'
            })
        }
    }

    handleMobile = number => {
        this.mobile = number.target.value
    }

    handleForgetPassword = () => {
        document.querySelector('.forgot').classList.add('is-loading')
        if(this.mobile) {
            if(this.mobile.match(/^\d{10}$/)) {             
                axios.post('https://samhita-backend.herokuapp.com/forgotpassword', {
                    phonenumber: this.mobile
                })
                .then(res => {
                    console.log(res)
                    document.querySelector('.forgot').classList.remove('is-loading')
                    notification.success({
                        message: 'Message sent!',
                        description: 'Check your registered mobile number. Incase of message not received, contact Gowtham: +91 7598130276',
                        placement: 'topRight',
                        duration: 0,
                        top: 90,
                        className: 'notification',
                    })
                }).catch(err => {
                    document.querySelector('.forgot').classList.remove('is-loading')
                    console.log(err.message)
                })  
            }
            else {
                document.querySelector('.forgot').classList.remove('is-loading')
                notification.warn({
                    message: 'Oops!',
                    description: 'Enter a valid mobile number',
                    placement: 'topRight',
                    duration: 3,
                    top: 90,
                    className: 'notification',
                })
            }
        } else {
            document.querySelector('.forgot').classList.remove('is-loading')
            notification.warn({
                message: 'Oops!',
                description: 'Enter a mobile number',
                placement: 'topRight',
                duration: 3,
                top: 90,
                className: 'notification',
            })
        }
    }

    modal = () => Modal.info({
        centered: true,
        title: 'Enter your registered mobile number',
        content: (
          <div className = 'field has-addons' style = {{marginTop: '10px'}}>
            <div className = 'control'>
                <a className = 'button is-rounded is-static' style = {{paddingRight: '5px', paddingLeft: '6px', paddingTop: '8px'}}>+91</a>
            </div>
            <div className = 'control is-expanded'>
                <input type = 'text' placeholder = 'Mobile number' className = 'input is-rounded' style = {{paddingLeft: '5px', paddingRight: '5px'}} onChange = {this.handleMobile}/>
            </div>
            <div className = 'control'>
                <button className = 'button is-rounded is-success forgot' onClick = {this.handleForgetPassword}>Get message</button>                
            </div>
          </div>
        ),
        onOk() {},
        okText: 'Close',
        okType: 'default'
    })

    render() {
        const { email, password, isLoading } = this.state
        return (
            <div>
                <Navbar name = 'account' />
                <section className = 'section login-outer-container'>
                    <div data-aos = 'fade-down' className = 'container login-inner-container' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
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
                                                        <FontAwesomeIcon icon = {faEnvelope} color = 'gray' />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control' style = {{display: 'flex'}}>
                                                    <input id = 'password' type = 'password' placeholder = 'Password' className = 'input is-rounded' value = {password} onChange = {this.handlePassword} style = {{paddingRight: 35}}/>
                                                    <span onMouseDown = {() => {this.handleMouseDown('password')}} onMouseUp = {() => {this.handleMouseUp('password')}} onTouchStart = { () => {this.handleMouseDown('password')}} className = 'icon' style = {{cursor: 'pointer', position: 'absolute', right: 10, top: 8}}>
                                                        <FontAwesomeIcon className = 'login-password-icon' icon = {faEye} color = 'gray' />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    {
                                                        isLoading ?

                                                        <button className = 'button is-rounded is-fullwidth is-link is-lato has-text-weight-semibold register-button is-loading' disabled onClick = {this.handleLogin}>
                                                            Login
                                                        </button>

                                                        :

                                                        <button className = 'button is-rounded is-fullwidth is-link is-lato has-text-weight-semibold register-button' onClick = {this.handleLogin}>
                                                            Login
                                                        </button>
                                                    }
                                                </div>
                                                <div className = 'control'>
                                                    <label className = 'label is-lato has-text-link has-text-centered' onClick = {this.modal} style = {{position: 'relative', top: '35px', cursor: 'pointer'}}>Forgot password?</label>
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
