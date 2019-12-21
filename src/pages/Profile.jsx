import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Avatar, Spin, Icon, Skeleton, Modal, notification } from 'antd'
import AOS from 'aos'
import axios from 'axios'
import Scroll from 'react-scroll'
import Navbar from '../components/Navbar'
import ProfilePicture from '../assets/Profile.png'
import PaidImage from '../assets/Paid.png'
import NotPaidImage from '../assets/NotPaid.png'

class Profile extends Component {

    constructor() {
        super()
        this.state = {
            userId: '',
            name: '',
            data: '',
            isLoading: false,
            hash: '',
            workshop: []
        }
    }

    componentWillMount() {
        const isLogged = localStorage.getItem('loggedIn')
        if(isLogged === 'true') {
            const userId = localStorage.getItem('id')
            this.setState({userId: userId})
        } else {
            this.props.history.replace('/login')
        }
    }  

    componentDidMount() {
        const hash = this.createHash(20)
        this.setState({ hash: hash })
        AOS.init({
            delay: 150,
            duration: 250,
            once: true
        })
        const scroll = Scroll.animateScroll
        scroll.scrollToTop({
            duration: 100
        })
        this.setState({ isLoading: true }, () => {
            axios.post('https://samhita-backend.herokuapp.com/details', {
                userid: this.state.userId
            }).then(res => {
                console.log(res.data)
                this.setState({ 
                    name: res.data.name,
                    data: res.data,
                    isLoading: false,
                    workshop: res.data.workshopstatus.workshop
                })
            }).catch(err => {
                console.log(err.message)
                notification.error({
                    message: 'Oops!',
                    description: 'Unable to login. Please try again',
                    placement: 'topRight',
                    duration: 3,
                    top: 90,
                    className: 'notification'
                })
                this.handleLogout()
            })
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

    handleLogout = () => {
        localStorage.setItem('loggedIn','false')
        localStorage.removeItem('id')
        this.props.history.replace('/login')
    }
    
    render() {
        const firstPart = this.state.hash.substr(0,5)
        const remainingPart = this.state.hash.substr(5)
        const encryptedId = `${firstPart}s1${remainingPart}`
        const loadingIcon = <Icon type="loading" style={{ fontSize: 26 }} spin />
        const { name, isLoading, data: user, workshop } = this.state
        const boughtTicket = user.status
        let firstName = name.split(' ')
        firstName = firstName[0]
        const logoutModal = () => {
            Modal.confirm({
                centered: true,
                title: 'Do you wish to log out?',
                okText: 'Log Out',
                onOk: () => {this.handleLogout()},
                onCancel(){}
            })
        }
        return (
            <React.Fragment>
                <Navbar name =  'account'/>
                <section className = 'section profile-outer-container'>
                    <div data-aos = 'fade-up' className = 'container profile-main-container'>  
                        <div className = 'columns'>
                            <div className = 'column'>
                                <div className = 'field'>
                                    <div className = 'control'>
                                        {
                                            isLoading ?

                                            <Avatar size = {145} style = {{backgroundColor: '#FF0A13', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}}>
                                                <Spin indicator = {loadingIcon} style = {{color: 'white'}} />
                                            </Avatar>

                                            :

                                            <div className = 'avatar has-text-centered' style = {{display: 'flex', flexDirection: 'column', width: 145, height: 145, borderRadius: '50%', backgroundColor: 'red', alignItems: 'center', wordWrap: 'break-word', padding: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}}>
                                                <img src = {ProfilePicture} alt = 'Profile' style = {{position: 'relative', zIndex:0, transform: 'scale(1.2)', top: '5px'}}/>
                                                <span className = 'is-uppercase is-lato' style = {{position: 'relative', zIndex: 1, bottom: 55, fontWeight: 700, fontSize: '14px', color: 'white', marginLeft: 'auto', marginRight: 'auto', wordWrap: 'break-word'}}>
                                                    Hi {firstName}
                                                </span>
                                            </div>

                                        }
                                    </div>
                                    <div className = 'title is-3 is-lato' style = {{margin: '2rem 0px'}}>
                                        Samhita ID: {this.state.userId}
                                    </div>
                                    {
                                        isLoading ?

                                        <button className = 'button is-rounded is-lato has-text-weight-semibold' disabled style ={{border: '1px solid gray'}} onClick = {logoutModal}>
                                            Log Out
                                        </button>

                                        :

                                        <button className = 'button is-rounded is-lato has-text-weight-semibold logout-button' style ={{border: '1px solid gray'}} onClick = {logoutModal}>
                                            Log Out
                                        </button>
                                    }
                                </div> 
                            </div>
                            <div className = 'column ticket-status-container'>
                                {
                                    isLoading ? 

                                    <Skeleton paragraph = {{rows: 8}}/>

                                    :

                                    user.status === 1 ?

                                    <div className = 'has-text-centered'>
                                        <LazyLoadImage className = 'bought-ticket-image' src = {PaidImage} effect = 'blur' alt = 'Bought ticket' />
                                        <div className = 'title is-3 is-lato has-text-centered' style = {{color: '#2E9D00'}}>
                                            You have bought your Samhita '20 ticket!
                                        </div>
                                        <div className = 'title is-5 is-lato has-text-centered'>
                                            (You are now eligible to attend all technical and non-technical events along with <span style = {{color: '#2E9D00'}} >Placement Training workshop by GeeksforGeeks</span>)
                                        </div>
                                    </div>
                                    
                                    :

                                    <div className = 'has-text-centered'>
                                        <LazyLoadImage className = 'bought-ticket-image' src = {NotPaidImage} effect = 'blur' alt = 'Not bought ticket' />
                                        <div className = 'subtitle is-4 is-lato has-text-left '>
                                            You have not purchased your Samhita '20 ticket yet. Buy now to get access to all technical and non-technical events, and participate in the <strong>Placement Training Workshop</strong> by <strong>GeeksforGeeks</strong>.
                                        </div>
                                        <button className = 'button is-lato has-text-weight-semibold is-medium is-rounded is-danger' onClick = {() => this.props.history.push(`/checkout/${encryptedId}`)}>
                                            Get ticket
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>                        
                    </div>
                </section>
                <section className = 'section'>
                    {
                        isLoading ?

                        <div data-aos = 'fade-up' className = 'container user-details-container' style = {{height: '347px', display: 'flex', flexDirection:'row', alignItems: 'center', justifyItems: 'center'}}>
                            <Skeleton paragraph = {{rows: 6}} />
                        </div>

                        :

                        <div data-aos = 'fade-up' className = 'container user-details-container'>
                            <div className = 'title is-4 is-lato'>Your details</div>
                            <table className = 'table is-lato is-fullwidth is-hoverable'>
                                <tbody style = {{fontSize: '15pt'}}>
                                    <tr>
                                        <th>Name</th>
                                        <td>{user.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>{user.mailid}</td>
                                    </tr>
                                    <tr>
                                        <th>Mobile number</th>
                                        <td>{user.phone}</td>
                                    </tr>
                                    <tr>
                                        <th>College</th>
                                        <td>{user.college}</td>
                                    </tr>
                                    <tr>
                                        <th>Department</th>
                                        <td>{user.dept}</td>
                                    </tr>
                                    <tr>
                                        <th>Year</th>
                                        <td>{user.year}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    }
                    {
                        isLoading ? 

                        <div data-aos = 'fade-up' className = 'container user-details-container' style = {{marginBottom: '1rem'}}>
                            <Skeleton paragraph = {{rows: 6}} />
                        </div>

                        :

                        boughtTicket === 1 ?

                        <div style = {{marginTop: '3rem'}}>
                            <div data-aos = 'fade-up' className = 'container user-details-container' style = {{marginBottom: '1rem'}}>
                                <div className = 'title is-lato is-4'>Your Workshops</div>
                                <div className = 'subtitle is-5 is-lato has-text-centered is-hidden-tablet' style = {{marginTop: '1rem'}}>Swipe left/right inside table to see more entries</div>
                                <div className = 'table-container'>
                                    <table className = 'table is-lato is-fullwidth is-hoverable' style = {{fontSize: '15pt'}}>
                                        <thead>
                                            <th style = {{color: '#2E9D00'}}>
                                                Workshop
                                            </th>
                                            <th style = {{color: '#2E9D00'}}>
                                                Number of tickets
                                            </th>
                                            <th style = {{color: '#2E9D00'}}>
                                                Location
                                            </th>
                                            <th style = {{color: '#2E9D00'}}>
                                                Date and time
                                            </th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Placement Training Workshop by GeeksforGeeks
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    Rajam Hall, OAT or Hangar - I
                                                </td>
                                                <td>
                                                    January 31, 9:30 AM - 4 PM
                                                </td>
                                            </tr>
                                            {
                                                workshop.map(workshop => {
                                                    return(
                                                        <tr>
                                                            <td>
                                                                {workshop.name}
                                                            </td>
                                                            <td>
                                                                {workshop.numberoftickets}
                                                            </td>
                                                            <td>
                                                                {workshop.date}, 9:30 AM - 4:00 PM
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        :

                        workshop.length !== 0 ?            

                        <div style = {{marginTop: '3rem'}}>
                            <div data-aos = 'fade-up' className = 'container user-details-container' style = {{marginBottom: '1rem'}}>
                                <div className = 'title is-lato is-4' style = {{marginBottom: '1.5rem'}}>Your Workshops</div>
                                <div className = 'subtitle is-5 is-lato has-text-centered is-hidden-tablet' style = {{marginTop: '1rem'}}>Swipe left/right inside table to see more entries</div>
                                <table className = 'table is-lato is-fullwidth is-hoverable' style = {{fontSize: '15pt'}}>
                                    <thead>
                                        <th style = {{color: '#2E9D00'}}>
                                            Workshop
                                        </th>
                                        <th style = {{color: '#2E9D00'}}>
                                            Number of tickets
                                        </th>
                                        <th style = {{color: '#2E9D00'}}>
                                            Location
                                        </th>
                                        <th style = {{color: '#2E9D00'}}>
                                            Date and time
                                        </th>
                                    </thead>
                                    <tbody>
                                        {
                                            workshop.map(workshop => {
                                                return(
                                                    <tr>
                                                        <td>
                                                            {workshop.name}
                                                        </td>
                                                        <td>
                                                            {workshop.numberoftickets}
                                                        </td>
                                                        <td>
                                                            {workshop.date}, 9:30 AM - 4:00 PM
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        :
                        
                        <div style = {{marginTop: '3rem'}}>
                            <div data-aos = 'fade-up' className = 'container user-details-container' style = {{marginBottom: '1rem'}}>
                                <div className = 'title is-lato is-4' style = {{marginBottom: '2rem'}}>Your Workshops</div>
                                <div className = 'container has-text-centered' style = {{padding: '25px 10px', width: '85%', borderRadius: 20}}>
                                    <div className = 'title is-lato is-4' style = {{color: '#C02400'}}>You have not purchased any workshop tickets.</div>
                                    <div className = 'subtitle is-5 has-text-link is-lato' style = {{cursor: 'pointer'}} onClick = {() => this.props.history.push('/workshops')}>
                                        Click here to view all workshops
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default withRouter(Profile)
