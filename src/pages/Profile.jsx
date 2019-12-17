import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Scroll from 'react-scroll'
import Navbar from '../components/Navbar'
import ProfilePicture from '../assets/Profile.png'
import PaidImage from '../assets/Paid-1.png'
import NotPaidImage from '../assets/NotPaid.png'
import { Avatar, Spin, Icon, Skeleton, Modal } from 'antd'
import { LazyLoadImage } from 'react-lazy-load-image-component'

class Profile extends Component {

    constructor() {
        super()
        this.state = {
            userId: '',
            name: '',
            data: '',
            isLoading: false
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
                    isLoading: false
                })
            }).catch(err => {
                console.log(err.message)
                this.setState({
                    isLoading: false
                })
            })
        })
    }

    handleLogout = () => {
        localStorage.setItem('loggedIn','false')
        localStorage.removeItem('id')
        this.props.history.replace('/login')
    }
    
    render() {
        const loadingIcon = <Icon type="loading" style={{ fontSize: 30 }} spin />
        const { name, isLoading, data: user } = this.state
        let firstName = name.split(' ')
        firstName = firstName[0]
        const logoutModal = () => {
            Modal.confirm({
                centered: true,
                title: 'Do you wish to log out?',
                okText: 'Log Out',
                onOk: () => {this.handleLogout()},
                onCancel(){},
            })
        }
        return (
            <div>
                <Navbar name =  'account' />
                <section className = 'section profile-outer-container'>
                    <div className = 'container profile-main-container'>                  
                        <div className = 'columns'>
                            <div className = 'column'>
                                <div className = 'field'>
                                    <div className = 'control'>
                                        {
                                            isLoading ?

                                            <Avatar size = {145} style = {{backgroundColor: '#FF0A13'}}>
                                                <Spin indicator = {loadingIcon} style = {{color: 'white'}} />
                                            </Avatar>

                                            :

                                            <div className = 'avatar has-text-centered' style = {{display: 'flex', flexDirection: 'column', width: 145, height: 145, borderRadius: '50%', backgroundColor: 'red', alignItems: 'center', wordWrap: 'break-word', padding: '15px'}}>
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

                                    <Skeleton paragraph = {{rows: 8}} />

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
                                        <div className = 'subtitle is-4 is-lato has-text-left '>You have not purchased your Samhita '20 ticket yet. Buy now to get access to all technical and non-technical events, and participate in the <strong>Placement Training Workshop</strong> by <strong>GeeksforGeeks</strong>.</div>
                                        <button className = 'button is-lato has-text-weight-semibold is-medium is-rounded is-danger' onClick = {() => this.props.history.push('/buy-ticket')}>
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

                        <div className = 'container user-details-container' style = {{height: '347px', display: 'flex', flexDirection:'row', alignItems: 'center', justifyItems: 'center'}}>
                            <Skeleton paragraph = {{rows: 5}} />
                        </div>

                        :

                        <div className = 'container user-details-container'>
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
                </section>
            </div>
        )
    }
}

export default withRouter(Profile)
