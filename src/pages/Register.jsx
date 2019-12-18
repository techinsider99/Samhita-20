import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos'
import Scroll from 'react-scroll'
import Navbar from '../components/Navbar'
import { notification } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import RegisterImage from '../assets/Register.png'
import UniqLogo from '../assets/UniqLogo.jpg'

class Register extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            mobile: '',
            college: '',
            department: '',
            year: '',
            password: '',
            confirmPassword: '',
            isLoading: false
        }
    }

    componentDidMount() {
        const scroll = Scroll.animateScroll
        scroll.scrollToTop({
            duration: 100
        })
        AOS.init({
            delay: 150,
            duration: 250,
            once: true
        })
        const isLogged = localStorage.getItem('loggedIn')
        if(isLogged === 'true') {
            this.props.history.replace('/account')
        } else {
            return
        }
    }

    handleMouseDown = element => {
        document.getElementById(element).type = 'text'
    }

    handleMouseUp = element => {
        document.getElementById(element).type = 'password'
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

    handleDepartment = department => {
        this.setState({department: department.target.value})
    }

    handleYear = year => {
        this.setState({year: year.target.value})
    }

    handlePassword = password => {
        this.setState({password: password.target.value})
    }

    handleConfirmPassword = confirmPassword => {
        this.setState({confirmPassword: confirmPassword.target.value})
    }

    handleKeyPress = e => {
        if(e.keyCode === 13) {
            this.handleRegister()
        }
    }

    handleRegister = () => {
        const { name, email, mobile, college, department, year, password, confirmPassword } = this.state
        if(name && email && mobile && college && department && year && password && confirmPassword) {
            if( password === confirmPassword ) {
                this.setState({ isLoading: true }, () => {
                    axios.post('https://samhita-backend.herokuapp.com/register', {
                        name: name,
                        mailid: email,
                        contactnum: mobile,
                        pass: password,
                        collegename: college,
                        dept: department,
                        year: parseInt(year) 
                    }).then(res => {
                        this.setState({ 
                            name: '',
                            email: '',
                            mobile: '',
                            college: '',
                            department: '',
                            year: '',
                            password: '',
                            confirmPassword: '',
                            isLoading: false 
                        })
                        if(res.data.status === 'success') {
                            setTimeout(() => this.props.history.replace('/login'), 3000)
                            notification.success({
                                message: 'Yay!',
                                description: 'Registration is successful!',
                                placement: 'topRight',
                                duration: 3,
                                top: 90,
                                style : {
                                    color: 'rgb(0, 110, 0)'
                                },
                                className: 'notification',
                                onClose: this.props.history.replace('/login')                                
                            })
                        } else if(res.data.status === 'failure') {
                            setTimeout(() => this.props.history.replace('/login'), 3000)
                            notification.info({
                                message: 'Attention!',
                                description: 'It seems that you have already registered. Please login',
                                placement: 'topRight',
                                duration: 3,
                                top: 90,
                                className: 'notification',
                                onClose: this.props.history.replace('/login')                                
                            })
                        }
                    }).catch(err => {
                        this.setState({ isLoading: false })
                        console.log(err.message)
                        notification.error({
                            message: 'Oops!',
                            description: 'An error occurred. Try again',
                            placement: 'topRight',
                            duration: 3,
                            top: 90,
                            style : {
                                color: 'rgb(207, 0, 0)'
                            },
                            className: 'notification'
                        })
                    })
                })
            }
            else {
                notification.warn({
                    message: 'Not yet!',
                    description: 'Passwords mismatch. Please check and try again',
                    placement: 'topRight',
                    duration: 3,
                    top: 90,
                    className: 'notification'
                })
            }
        } else {
            notification.warn({
                message: 'Oops!',
                description: 'Please fill in all the fields',
                placement: 'topRight',
                duration: 3,
                top: 90,
                className: 'notification'
            })
        }
    }

    render() {
        const options = [
            { 'id': 1, 'year': 1 },
            { 'id': 2, 'year': 2},
            { 'id': 3, 'year': 3},
            { 'id': 4, 'year': 4}
        ]
        const { name, email, mobile, college, department, password, confirmPassword, isLoading } = this.state
        return (
            <div>
                <Navbar name = 'account' />
                <section className = 'section register-outer-container'>
                    <div data-aos = 'fade-down' className = 'container register-inner-container'>
                        <div className = 'columns'>
                            <div className = 'column' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <div className = 'register-picture has-text-centered'>
                                    <LazyLoadImage src = {RegisterImage} alt = 'Register' effect = 'blur' />
                                    <LazyLoadImage src = {UniqLogo} alt = 'Uniq Technologies' effect = 'blur' />
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
                                            <div className = 'field has-addons'>
                                                <p className = 'control'>
                                                    <a className = 'button is-static' style = {{borderRadius: '20px 0px 0px 20px', paddingRight: '5px'}}>+91</a>
                                                </p>
                                                <div className = 'control is-expanded'>
                                                    <input type = 'text' className = 'input is-rounded mobile-input' value = {mobile} onChange = {this.handleMobile}/>
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
                                                        Department
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <input type = 'text' className = 'input is-rounded' value = {department} onChange = {this.handleDepartment}/>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <label className = 'label is-size-5 is-lato'>
                                                        Year
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                   <div className = 'select is-rounded is-fullwidth'>
                                                        <select onChange={this.handleYear}>
                                                            <option style = {{paddingTop: '10px'}} disabled selected hidden>Select</option>
                                                            {options.map((value)=>{
                                                                return(
                                                                    <option key={value.id}>{value.year}</option>
                                                                )
                                                            })}
                                                        </select>
                                                   </div>
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
                                                <div className = 'control' style = {{display: 'flex'}}>
                                                    <input id = 'password' type = 'password' className = 'input is-rounded' value = {password} onChange = {this.handlePassword} style = {{paddingRight: 35}}/>
                                                    <span onMouseDown = {() => {this.handleMouseDown('password')}} onMouseUp = {() => {this.handleMouseUp('password')}} onTouchStart = {() => {this.handleMouseDown('password')}} className = 'icon' style = {{cursor: 'pointer', position: 'absolute', right: 10, top: 8}}>
                                                        <FontAwesomeIcon icon = {faEye} />
                                                    </span>
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
                                                <div className = 'control' style = {{display: 'flex'}}>
                                                    <input id = 'confirm-password' type = 'password' className = 'input is-rounded' value = {confirmPassword} onKeyDown = {this.handleKeyPress} onChange = {this.handleConfirmPassword} style = {{paddingRight: 35}}/>
                                                    <span onMouseDown = {() => {this.handleMouseDown('confirm-password')}} onMouseUp = {() => {this.handleMouseUp('confirm-password')}} onTouchStart = { () => {this.handleMouseDown('confirm-password')}} className = 'icon' style = {{cursor: 'pointer', position: 'absolute', right: 10, top: 8}}>
                                                        <FontAwesomeIcon icon = {faEye} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    {
                                                        isLoading ? 

                                                        <button className = 'button is-rounded is-fullwidth is-danger is-lato has-text-weight-semibold register-button is-loading' disabled>
                                                            Register
                                                        </button>

                                                        :
                                                        
                                                        <button className = 'button is-rounded is-fullwidth is-danger is-lato has-text-weight-semibold register-button' onClick = {this.handleRegister}>
                                                            Register
                                                        </button>

                                                    }
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
