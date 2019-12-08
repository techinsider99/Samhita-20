import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Logo from '../assets/Samhita_Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faChalkboardTeacher, faUser, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {

    componentDidMount() {
        if(this.props.name) {
            const title = this.props.name
            document.querySelector(`.${title}`).classList.add('bottom-border')
        }
    }

    componentWillUnmount() {
        if(this.props.name) {
            const title = this.props.name
            document.querySelector(`.${title}`).classList.remove('bottom-border')
        }
    }

    redirect = (url) => {
        this.props.history.push(url)
    }

    render() {
        return (
            <nav className = 'navbar is-fixed-top has-shadow'>
                <div className = 'navbar-brand'>
                    <div className = 'navbar-item'>
                        <img className = 'logo' src = {Logo} alt = "Samhita '20 Logo" style = {{cursor: 'pointer'}} onClick = {() => this.redirect('/')}/>
                    </div>
                </div>
                <div className = 'navbar-menu is-active'>
                    <div className = 'navbar-end' style = {{display: 'flex'}}>
                        <div className = 'navbar-item menu-item menu-item-first has-text-centered is-uppercase' onClick = {() => this.redirect('/stay-tuned')}>
                            <span className = 'navbar-icon'>
                                <FontAwesomeIcon icon = {faCalendarDay} size = 'sm'/>
                            </span>
                            events
                        </div>
                        <div className = 'navbar-item menu-item has-text-centered is-uppercase workshop' onClick = {() => this.redirect('/workshops')}>
                            <span className = 'navbar-icon'>
                                <FontAwesomeIcon icon = {faChalkboardTeacher} size = 'sm' />
                            </span>
                            workshops
                        </div>
                        <div className = 'navbar-item menu-item has-text-centered is-uppercase account' onClick = {() => this.redirect('/login')}>
                            <span className = 'navbar-icon'>
                                <FontAwesomeIcon icon = {faUser} size = 'sm' />
                            </span>
                            account
                        </div>
                        <div className = 'navbar-item menu-item menu-item-last has-text-centered is-uppercase contact' onClick = {() => this.redirect('/contact')}>
                            <span className = 'navbar-icon'>
                                <FontAwesomeIcon icon = {faMobileAlt} size = 'sm' />
                            </span>
                            contact
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)