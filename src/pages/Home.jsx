import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AOS from 'aos'
import Scroll from 'react-scroll'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import SamhitaLogo from '../assets/Samhita-Main-Logo.png'
import SamhitaTicket from '../assets/Ticket.png'
class Home extends Component {

    constructor() {
        super()
        this.state = {
            hash: ''
        } 
    }

    componentDidMount() {
        const hash = this.createHash(20)
        this.setState({ hash: hash })
        const scroll = Scroll.animateScroll
        scroll.scrollToTop({
            duration: 100
        })
        AOS.init({
            delay: 150,
            duration: 300,
            once: true
        })
    }

    handleScroll = () => {
        const scroll = Scroll.animateScroll
        scroll.scrollToBottom({
            duration: 100
        })
    }

    createHash = length => {
        var result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const charactersLength = characters.length
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    }

    render() {
        const firstPart = this.state.hash.substr(0,5)
        const remainingPart = this.state.hash.substr(5)
        const encryptedId = `${firstPart}s1${remainingPart}`
        return (
            <React.Fragment>
                <Navbar name = 'home'/>
                <div className = 'outer-home-container'>
                    <div data-aos = 'fade-up' className = 'samhita-main-container'>
                        <div className = 'columns'>
                            <div className = 'column is-4'>
                                <div className = 'field'>
                                    <div className = 'control samhita-main-logo'>
                                        <LazyLoadImage
                                            alt = 'Samhita-logo'
                                            src = {SamhitaLogo}
                                            effect = 'blur'
                                        />
                                    </div>
                                </div>
                                <div className = 'field'>
                                    <div className = 'control' style = {{marginLeft: '30px'}}>
                                        <div className = 'title is-1 is-lato samhita-main-title'>Samhita '20</div>
                                    </div>
                                </div>
                            </div>
                            <div className = 'column samhita-summary'>
                                <div className = 'subtitle is-5 is-lato samhita-summary-main'>
                                    Samhita is a National Level Technical Symposium held at Madras Institute of Technology, Chennai. It is organized by the Information Technology Association (ITA). It provides students various opportunities to herald their technical prowess and quiz their aptitude on coding, designing and other ambidextrous domain concepts. Samhita '20 covets to bridge the gap between different industries and students by conducting technical workshops and competitions. This is an open platform where academics meets innovation. Get ready for a techno ride! Learning has never been so much fun before!
                                    <div className = 'title is-3 is-lato has-text-left date' style = {{marginTop: '25px'}}>
                                    <span className = 'icon' style = {{position: 'relative',marginRight: '15px', marginTop: '5px', top: '4px'}}>
                                        <FontAwesomeIcon icon = {faCalendarAlt} size = 'lg' color = '#FF0A13' />
                                    </span>
                                    January 31 - February 1
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = 'columns is-hidden-touch home-titles' style = {{marginTop: '50px'}}>
                        <div className = 'column is-narrow has-text-centered insight-box'>
                            <div className = 'badge-1' style = {{cursor: 'pointer'}} onClick = {() => this.props.history.push('/workshops')}>6</div>
                                <div style = {{cursor: 'pointer'}} onClick = {() => this.props.history.push('/workshops')} className = 'title is-2 home-title'>Workshops</div>
                            </div>
                            <div className = 'column is-narrow has-text-centered insight-box'>
                                <div className = 'badge-2' style = {{cursor: 'pointer'}} onClick = {() => this.props.history.push('/events')}>20+</div>
                                    <div style = {{cursor: 'pointer'}} onClick = {() => this.props.history.push('/events')} className = 'title is-2 home-title'>Events</div>
                                </div>
                                <div className = 'column is-narrow has-text-centered insight-box'>
                                    <div className = 'badge-3'>30+</div>
                                    <div className = 'title is-2 home-title'>Interns</div>
                                </div>
                            </div>
                            <button className = 'button is-hidden-touch is-lato is-rounded is-link get-started-button has-text-weight-semibold' onClick = {this.handleScroll}>Get started</button>
                        </div>
                    </div>
                    <section className = 'section ticket-outer-container'>
                    <div className = 'title is-hidden-tablet is-3 is-lato has-text-centered'>Get started!</div>
                        <div className = 'container'>
                            <div className = 'columns'>
                                <div className = 'column'>
                                    <img data-aos = 'fade-right' id = 'ticket-section' width = {800} src = {SamhitaTicket} alt= "Samhita '20 ticket" />
                                    <div data-aos = 'fade-right' className = 'field'>
                                        <div className = 'control'>
                                            <div className = 'subtitle is-5 is-lato benefits-title'>
                                                Ticket benefits include:
                                            <ol className = 'benefits-list'>
                                                <li>Chance to participate in all technical and non-technical events</li>
                                                <li>Attend Placement training workshop by <strong>GeeksforGeeks</strong></li>
                                                <li>Beat the queue and stay in front of the pack</li>
                                                <li>Chance to participate and win <strong>Samhita Ambassador contest</strong></li>
                                                <li>Chance to win gift coupons</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = 'column is-narrow' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <div className = 'field'>
                                    <div data-aos = 'fade-right' className = 'control is-hidden-mobile'>
                                        <div className = 'subtitle is-3 is-lato'>
                                            Book yours now!
                                        </div>
                                        <button className = 'button is-rounded is-lato has-text-weight-semibold is-danger' onClick = {() => this.props.history.push(`/checkout/${encryptedId}`)}>
                                            <span>Get ticket</span>
                                            <span className = 'icon'>
                                                <FontAwesomeIcon icon = {faArrowRight} color = 'white' />
                                            </span>
                                        </button>
                                    </div>
                                    <div className = 'control is-hidden-tablet'>
                                        <button className = 'button is-rounded is-lato has-text-weight-semibold is-danger' onClick = {() => this.props.history.push(`/checkout/${encryptedId}`)}>
                                            <span>Get ticket</span>
                                            <span className = 'icon'>
                                                <FontAwesomeIcon icon = {faArrowRight} color = 'white' />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default withRouter(Home)
