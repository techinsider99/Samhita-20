import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AOS from 'aos'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faRupeeSign, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import MLImage from '../assets/ML.png'
import GoogleDevImage from '../assets/GoogleDev.png'
import AndroidImage from '../assets/AppDevelopment-01.png'
import FlutterImage from '../assets/Flutter.png'
import HackingImage from '../assets/Hacking-01.png'
import ZohoImage from '../assets/Zoho.png'
import PythonImage from '../assets/Python.png'
import RenaultImage from '../assets/Renault.png'
import AIImage from '../assets/AI.png'
import FbImage from '../assets/Facebook.png'

class Workshops extends Component {

    componentDidMount() {
        AOS.init({
            delay: 150,
            duration: 250,
            once: true
        })    
        document.querySelector('.buy-ticket-button').addEventListener('mouseover', () => {
            document.querySelector('.buy-ticket-icon').classList.remove('icon-is-hidden')
        })
        document.querySelector('.buy-ticket-button').addEventListener('mouseout', () => {
            document.querySelector('.buy-ticket-icon').classList.add('icon-is-hidden')
        })
        document.querySelector('.buy-ticket-button-2').addEventListener('mouseover', () => {
            document.querySelector('.buy-ticket-icon-2').classList.remove('icon-is-hidden')
        })
        document.querySelector('.buy-ticket-button-2').addEventListener('mouseout', () => {
            document.querySelector('.buy-ticket-icon-2').classList.add('icon-is-hidden')
        })
        document.querySelector('.buy-ticket-button-3').addEventListener('mouseover', () => {
            document.querySelector('.buy-ticket-icon-3').classList.remove('icon-is-hidden')
        })
        document.querySelector('.buy-ticket-button-3').addEventListener('mouseout', () => {
            document.querySelector('.buy-ticket-icon-3').classList.add('icon-is-hidden')
        })
        document.querySelector('.buy-ticket-button-4').addEventListener('mouseover', () => {
            document.querySelector('.buy-ticket-icon-4').classList.remove('icon-is-hidden')
        })
        document.querySelector('.buy-ticket-button-4').addEventListener('mouseout', () => {
            document.querySelector('.buy-ticket-icon-4').classList.add('icon-is-hidden')
        })
        document.querySelector('.buy-ticket-button-5').addEventListener('mouseover', () => {
            document.querySelector('.buy-ticket-icon-5').classList.remove('icon-is-hidden')
        })
        document.querySelector('.buy-ticket-button-5').addEventListener('mouseout', () => {
            document.querySelector('.buy-ticket-icon-5').classList.add('icon-is-hidden')
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar name = 'workshop' />
                <section className = 'section workshops-main-container' style = {{overflowX: 'hidden'}}>
                <div data-aos = 'fade-left' className = 'container workshop-container-first'>
                        <div className = 'columns workshop-columns'>
                            <div className = 'column workshop-content-alt'>
                                <div className = 'field upper-alt'>
                                    <div className = 'control'>
                                        <div className = 'title is-2 is-lato workshop-title-alt'>
                                            Machine Learning
                                        </div>
                                    </div>
                                    <div className = 'control' style = {{margin: '20px 0px 0px 0px'}}>
                                        <span className = 'subtitle is-6 is-lato'>by</span>
                                        <span className = 'organiser-logo-2' style = {{margin: '0px 10px'}}>
                                            <LazyLoadImage src = {GoogleDevImage} alt = 'Google developers logo' width ={170} height = {60} effect = 'blur' />
                                        </span>
                                    </div>
                                </div>
                                <div className = 'field'>
                                    <div className = 'control'>
                                        <div className = 'subtitle is-6 is-lato workshop-summary-alt'>
                                            It's time for Machines to think! The field of computer science is changing the world which is similar to the effects of Physics towards the end of the 19th century. Come to learn what really is machine learning and how to make the software think like a human or beyond!  It's their time to learn now!
                                        </div>
                                    </div>
                                </div>
                                <section className = 'section'>
                                    <div className = 'container'>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-1'>
                                                <FontAwesomeIcon icon = {faCalendarAlt} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    February 1
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-2' style = {{marginLeft: '-5px'}} >
                                                <FontAwesomeIcon icon = {faClock} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    9:30 AM - 4 PM
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-3' style = {{marginLeft: '5px'}} >
                                                <FontAwesomeIcon icon = {faRupeeSign} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    849 per head
                                                </div>
                                            </div>
                                        </div>
                                        <div className = 'field is-grouped'>
                                            <div className = 'control has-icons-right'>
                                                <button className = 'button is-lato is-rounded is-link has-text-weight-semibold buy-ticket-button' onClick = {() => this.props.history.push('/stay-tuned')}>
                                                    Buy ticket
                                                </button>
                                                <span className = 'icon is-right buy-ticket-icon icon-is-hidden'>
                                                    <FontAwesomeIcon icon = {faShoppingCart} size = 'sm' color = 'white' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className = 'column is-half' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <LazyLoadImage src = {MLImage} alt = 'Machine Learning workshop' effect = 'blur' />
                            </div>
                        </div>
                    </div>
                    <div data-aos = 'fade-right' className = 'container workshop-container'>
                        <div className = 'columns'>
                            <div className = 'column is-half' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <LazyLoadImage src = {AndroidImage} alt = 'Android app development' effect = 'blur'/>
                            </div>
                            <div className = 'column workshop-content'>
                                <div className = 'field upper'>
                                    <div className = 'control'>
                                        <div className = 'title is-2 is-lato workshop-title'>
                                            Android App Development
                                        </div>
                                    </div>
                                    <div className = 'control is-pulled-right' style = {{margin: '20px 0px 0px 0px'}}>
                                        <span className = 'subtitle is-6 is-lato'>by</span>
                                        <span className = 'organiser-logo' style = {{marginLeft: '15px'}}>
                                            <LazyLoadImage src = {FlutterImage} alt = 'Android App Development logo' width = {60} height = {60} effect = 'blur' />
                                        </span>
                                        <span className = 'subtitle is-4 is-lato workshop-subtitle'>Flutter Developers from Google</span>
                                    </div>
                                </div>
                                <div className = 'field'>
                                    <div className = 'control'>
                                        <div className = 'subtitle is-6 is-lato workshop-summary'>
                                            Which phone do you use? An Android! Which phone do I use? Android again! Android has invariably become a part of our daily life replacing good old but antiquated electronic devices. Come to Samhita '20 and learn how to create your own Android app and see how it works on your very own device from the very best! A developer is now the X-factor indeed!
                                        </div>
                                    </div>
                                </div>
                                <section className = 'section'>
                                    <div className = 'container'>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-1'>
                                                <FontAwesomeIcon icon = {faCalendarAlt} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    January 31
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-2' style = {{marginLeft: '-5px'}} >
                                                <FontAwesomeIcon icon = {faClock} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    9:30 AM - 4 PM
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-3' style = {{marginLeft: '5px'}} >
                                                <FontAwesomeIcon icon = {faRupeeSign} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    749 per head
                                                </div>
                                            </div>
                                        </div>
                                        <div className = 'field is-grouped'>
                                            <div className = 'control has-icons-right'>
                                                <button className = 'button is-rounded is-link has-text-weight-semibold is-lato buy-ticket-button-2' onClick = {() => this.props.history.push('/stay-tuned')}>
                                                    Buy ticket
                                                </button>
                                                <span className = 'icon is-right buy-ticket-icon-2 icon-is-hidden'>
                                                    <FontAwesomeIcon icon = {faShoppingCart} size = 'sm' color = 'white' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div data-aos = 'fade-left' className = 'container workshop-container'>
                        <div className = 'columns workshop-columns'>
                            <div className = 'column workshop-content-alt'>
                                <div className = 'field upper-alt'>
                                    <div className = 'control'>
                                        <div className = 'title is-2 is-lato workshop-title-alt'>
                                            Ethical Hacking
                                        </div>
                                    </div>
                                    <div className = 'control' style = {{margin: '20px 0px 0px 0px'}}>
                                        <span className = 'subtitle is-6 is-lato'>by</span>
                                        <span className = 'organiser-logo-2' style = {{margin: '0px 5px'}}>
                                            <LazyLoadImage src = {ZohoImage} alt = 'Zoho logo' width = {100} height = {60} effect = 'blur' /> 
                                        </span>
                                    </div>
                                </div>
                                <div className = 'field' style = {{marginTop: '-20px'}}>
                                    <div className = 'control'>
                                        <div className = 'subtitle is-6 is-lato workshop-summary-alt'>
                                            In an open world like the Internet, the space for privacy and security is getting smaller every day. Samhita '20 invites you all the budding hackers out there to get the space you deserve through this workshop. Gear up! With great power comes great responsibility. Hackers are also solution makers, aren't they?
                                        </div>
                                    </div>
                                </div>
                                <section className = 'section'>
                                    <div className = 'container'>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-1'>
                                                <FontAwesomeIcon icon = {faCalendarAlt} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    January 31
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-2' style = {{marginLeft: '-5px'}} >
                                                <FontAwesomeIcon icon = {faClock} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    9:30 AM - 4 PM
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-3' style = {{marginLeft: '5px'}} >
                                                <FontAwesomeIcon icon = {faRupeeSign} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    799 per head
                                                </div>
                                            </div>
                                        </div>
                                        <div className = 'field is-grouped'>
                                            <div className = 'control has-icons-right'>
                                                <button className = 'button is-rounded is-link is-lato has-text-weight-semibold buy-ticket-button-3' onClick = {() => this.props.history.push('/stay-tuned')}>
                                                    Buy ticket
                                                </button>
                                                <span className = 'icon is-right buy-ticket-icon-3 icon-is-hidden'>
                                                    <FontAwesomeIcon icon = {faShoppingCart} size = 'sm' color = 'white' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className = 'column is-half' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <LazyLoadImage src = {HackingImage} alt = 'Ethical hacking' effect = 'blur' />
                            </div>
                        </div>
                    </div>
                    <div data-aos = 'fade-right' className = 'container workshop-container'>
                        <div className = 'columns'>
                            <div className = 'column is-half' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <LazyLoadImage src = {PythonImage} alt = 'Python workshop' effect = 'blur' />
                                <img src = {PythonImage} alt = 'workshop' />
                            </div>
                            <div className = 'column workshop-content'>
                                <div className = 'field upper'>
                                    <div className = 'control'>
                                        <div className = 'title is-2 is-lato workshop-title'>
                                            Python Programming
                                        </div>
                                    </div>
                                    <div className = 'control is-pulled-right' style = {{margin: '20px 0px 0px 0px'}}>
                                        <span className = 'subtitle is-6 is-lato'>by</span>
                                        <span className = 'organiser-logo-2' style = {{marginLeft: '15px'}}>
                                            <LazyLoadImage src = {RenaultImage} alt = 'Renault-logo' width = {120} height = {80} effect = 'blur' />
                                        </span>
                                    </div>
                                </div>
                                <div className = 'field' style = {{marginTop: '-30px'}}>
                                    <div className = 'control'>
                                        <div className = 'subtitle is-6 is-lato workshop-summary'>
                                            Ever wondered how easy coding and data science applications are! If you want to code things easy as a breeze, you are in the right place! Coz Python is remarkably easy to learn! Keep up your pace up with fun in Python! Save your dates, Samhita '20 is coming with the power packed Python workshop! Accuracy has never been this greater with much fewer lines of code!
                                        </div>
                                    </div>
                                </div>
                                <section className = 'section'>
                                    <div className = 'container'>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-1'>
                                                <FontAwesomeIcon icon = {faCalendarAlt} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    January 31
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-2' style = {{marginLeft: '-5px'}} >
                                                <FontAwesomeIcon icon = {faClock} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    9:30 AM - 4 PM
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-3' style = {{marginLeft: '5px'}} >
                                                <FontAwesomeIcon icon = {faRupeeSign} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    749 per head
                                                </div>
                                            </div>
                                        </div>
                                        <div className = 'field is-grouped'>
                                            <div className = 'control has-icons-right'>
                                                <button className = 'button is-lato is-rounded is-link has-text-weight-semibold buy-ticket-button-4' onClick = {() => this.props.history.push('/stay-tuned')}>
                                                    Buy ticket
                                                </button>
                                                <span className = 'icon is-right buy-ticket-icon-4 icon-is-hidden'>
                                                    <FontAwesomeIcon icon = {faShoppingCart} size = 'sm' color = 'white' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div data-aos = 'fade-left' className = 'container workshop-container'>
                        <div className = 'columns workshop-columns'>
                            <div className = 'column workshop-content-alt'>
                                <div className = 'field upper-alt'>
                                    <div className = 'control'>
                                        <div className = 'title is-2 is-lato workshop-title-alt'>
                                            Artificial Intelligence
                                        </div>
                                    </div>
                                    <div className = 'control' style = {{margin: '20px 0px 0px 0px'}}>
                                        <span className = 'subtitle is-6 is-lato'>by</span>
                                        <span className = 'organiser-logo-2' style = {{margin: '0px 10px 7px 10px'}}>
                                            <LazyLoadImage src = {FbImage} alt = 'Facebook logo' width = {50} height = {60} effect = 'blur'/>
                                        </span>
                                        <span className = 'subtitle is-4 is-lato workshop-subtitle'>Facebook Developers</span>
                                    </div>
                                </div>
                                <div className = 'field'>
                                    <div className = 'control'>
                                        <div className = 'subtitle is-6 is-lato workshop-summary-alt'>
                                            The age of ultras has begun! The simulation of human intelligence is now exhibited by machines leading to a completely new venture in the 21st century! Pack up your bags, come and learn the Intelligent way by learning the traits associated with these machines at Samhita '20! The future has arrived!
                                        </div>
                                    </div>
                                </div>
                                <section className = 'section'>
                                    <div className = 'container'>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-1'>
                                                <FontAwesomeIcon icon = {faCalendarAlt} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    February 1
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-2' style = {{marginLeft: '-5px'}} >
                                                <FontAwesomeIcon icon = {faClock} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    9:30 AM - 4 PM
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-3' style = {{marginLeft: '5px'}} >
                                                <FontAwesomeIcon icon = {faRupeeSign} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    849 per head
                                                </div>
                                            </div>
                                        </div>
                                        <div className = 'field is-grouped'>
                                            <div className = 'control has-icons-right'>
                                                <button className = 'button is-rounded is-link is-lato has-text-weight-semibold buy-ticket-button-5' onClick = {() => this.props.history.push('/stay-tuned')}>
                                                    Buy ticket
                                                </button>
                                                <span className = 'icon is-right buy-ticket-icon-5 icon-is-hidden'>
                                                    <FontAwesomeIcon icon = {faShoppingCart} size = 'sm' color = 'white' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className = 'column is-half' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <LazyLoadImage src = {AIImage} alt = 'Artificial Intelligence workshop' effect = 'blur' />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default withRouter(Workshops)
