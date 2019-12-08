import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ContactImage from '../assets/Contact.png'
import Navbar from '../components/Navbar'
import AOS from 'aos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {

    componentDidMount() {
        AOS.init({
            delay: 150,
            duration: 250
        })
    }

    render() {
        return (
            <div>
                <Navbar name = 'contact'/>
                <section className = 'section contact-outer-container'>
                    <div data-aos = 'fade-down' className = 'container contact-main-container'>
                        <div className = 'columns'>
                            <div className = 'column' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <LazyLoadImage src = {ContactImage} alt = 'Contact us' effect = 'blur' />
                            </div>
                            <div className = 'column' style = {{backgroundColor: 'white',	boxShadow: '0px 0px 10px -2px rgba(0,0,0,0.75)'}}>
                                <section className = 'section'>
                                    <div className = 'container'>
                                        <div className = 'title is-3 is-lato has-text-link'>Contact us</div>
                                        <div className = 'field is-grouped'>
                                            <div className = 'control'>
                                                <label className = 'label is-lato is-size-5'>
                                                    Address
                                                </label>
                                            </div>
                                            <div className = 'subtitle is-lato is-6' style = {{marginTop: '5px'}}>
                                                Madras Institute of Technology, Chromepet, Chennai, Tamil Nadu 600044<br/>
                                            </div>
                                        </div>
                                        <iframe className = 'map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3690307536344!2d80.13758551433395!3d12.94822181889539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fac595c29ff%3A0xb76082ae18b51418!2sMadras%20Institute%20Of%20Technology%2C%20Anna%20University!5e0!3m2!1sen!2sin!4v1575779215663!5m2!1sen!2sin" width="500" height="300" frameborder="0" style={{border: '2px solid #276CDA', borderRadius: 10,marginBottom: '10px'}} allowfullscreen=""></iframe>
                                        <div className = 'field is-grouped'>
                                            <div className = 'control' >
                                                <label className = 'label is-lato is-size-5'>
                                                    Mobile
                                                </label>
                                            </div>
                                            <div className = 'subtitle is-lato is-6' style = {{ marginTop: '5px', marginLeft: '10px'}}>
                                                <ul>
                                                    <li style = {{marginBottom: '10px'}}>
                                                        Aakash Jacobs M (<strong>Chairman</strong>)<br/>
                                                        <span className = 'icon' style = {{marginLeft: '-6px'}}>
                                                            <FontAwesomeIcon icon = {faMobileAlt} />
                                                        </span>
                                                        <a href = 'tel: +917397234527'>+91 7397234527</a>
                                                    </li>
                                                    <li style = {{marginBottom: '10px'}}>
                                                        Gowtham M (<strong>Workshop coordinator</strong>)<br/>
                                                        <span className = 'icon' style = {{marginLeft: '-6px'}}>
                                                            <FontAwesomeIcon icon = {faMobileAlt} />
                                                        </span>
                                                        <a href = 'tel: +917397234527'>+91 7598130276</a>
                                                    </li>
                                                    <li style = {{marginBottom: '10px'}}>
                                                        Nachiappan AR (<strong>Event coordinator</strong>)<br/>
                                                        <span className = 'icon' style = {{marginLeft: '-6px'}}>
                                                            <FontAwesomeIcon icon = {faMobileAlt} />
                                                        </span>
                                                        <a href = 'tel: +917397234527'>+91 9790271224</a>
                                                    </li>
                                                    <li>
                                                        Sridharan AK (<strong>Accomodation coordinator</strong>)<br/>
                                                        <span className = 'icon' style = {{marginLeft: '-6px'}}>
                                                            <FontAwesomeIcon icon = {faMobileAlt} />
                                                        </span>
                                                        <a href = 'tel: +917397234527'>+91 8939195177</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className = 'field is-grouped'>
                                            <div className = 'control'>
                                                <label className = 'label is-lato is-size-5'>
                                                    Email
                                                </label>
                                            </div>
                                            <div className = 'subtitle has-text-right is-lato is-6' style = {{marginTop: '6px', marginLeft: '25px'}}>
                                                <a href = 'mailto: chairmainita@mitindia.edu'>
                                                    chairmanita@mitindia.edu
                                                </a>
                                            </div>
                                        </div>
                                        <div className = 'field is-grouped'>
                                            <div className = 'control'>
                                                <label className = 'label is-lato is-size-5'>
                                                    Website
                                                </label>
                                            </div>
                                            <div className = 'subtitle is-lato is-6 has-text-right' style = {{marginTop: '6px'}}>
                                                <a href = 'https://www.it.mitindia.edu/ita/' target = '_blank' rel="noopener noreferrer">
                                                    it.mitindia.edu
                                                </a>
                                            </div>
                                        </div>
                                        <div className = 'field'>
                                            <div className = 'control'>
                                                <label className = 'label is-lato is-size-5'>
                                                    Follow us on
                                                </label>
                                            </div>
                                        </div>
                                        <div className = 'field is-grouped' style = {{flexWrap: 'wrap'}}>
                                            <a href = 'https://www.facebook.com/samhitamit/' target = '_blank' rel = 'noopener noreferrer' className = 'control has-text-centered'>
                                                <FontAwesomeIcon icon = {faFacebook} size = 'lg' color = '#3B579D' /><br/>
                                            </a>
                                            <a href = 'https://twitter.com/ITA_MIT_INDIA' target = '_blank' rel = 'noopener noreferrer' className = 'control has-text-centered'>
                                                <FontAwesomeIcon icon = {faTwitter} size = 'lg' color = '#55ACEF' /><br/>
                                            </a>
                                            <a href = 'https://instagram.com/samhita_mit' target = '_blank' rel = 'noopener noreferrer' className = 'control has-text-centered'>
                                                <FontAwesomeIcon icon = {faInstagram} size = 'lg' color = '#A7005F' /><br/>
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                <nav className = 'navbar is-fixed-bottom'>
                    <div className = 'navbar-brand'>
                        <div className = 'navbar-item'>
                            <div className = 'field'>
                                <div className = 'control credit-title'>
                                    <div className = 'subtitle is-6 is-lato'>Site designed by <a href = 'mailto: rtssaran@gmail.com' target = '_blank' rel="noopener noreferrer">Saran RTS</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Contact)
