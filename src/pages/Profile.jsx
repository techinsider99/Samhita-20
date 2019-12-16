import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { Avatar, Spin, Icon, Skeleton } from 'antd'

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
        return (
            <div>
                <Navbar name =  'account' />
                <section className = 'section profile-outer-container'>
                    <div className = 'container profile-main-container'>                  
                        <div className = 'columns'>
                            <div className = 'column'>
                                <div className = 'field'>
                                    <div className = 'control'>
                                        <Avatar size = {145} className = 'is-lato is-uppercase' style = {{color: 'white', backgroundColor: '#FF0A13', fontWeight: 500, fontSize: '16px'}}>
                                        {
                                            isLoading ?

                                            <Spin indicator = {loadingIcon} style = {{color: 'white'}} />

                                            :

                                            <span>Hi {firstName}</span>

                                        }
                                        </Avatar>
                                    </div>
                                    <div className = 'title is-3 is-lato' style = {{margin: '2rem 0px'}}>
                                        Samhita ID: {this.state.userId}
                                    </div>
                                    <div className = 'button is-rounded is-lato has-text-weight-semibold' style ={{border: '1px solid gray'}} onClick = {this.handleLogout}>
                                        Log Out
                                    </div>
                                </div> 
                            </div>
                            <div className = 'column ticket-status-container' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                {
                                    isLoading ? 

                                    <Skeleton paragraph = {{rows: 3}} />

                                    :

                                    user.status === 1 ?

                                    <div>
                                        <div className = 'title is-3 is-lato has-text-centered has-text-success'>
                                            You have bought your Samhita '20 ticket!
                                        </div>
                                        <div className = 'title is-5 is-lato has-text-centered has-text-success'>
                                            (You are now eligible to attend Placement Training workshop by GeeksforGeeks)
                                        </div>
                                    </div>
                                    
                                    :

                                    <div className = 'title is-3 is-danger has-text-left'>
                                        <div className = 'subtitle is-4'>You have not purchased your Samhita '20 ticket yet. Buy now to get access to all technical and non-technical events, and participate in the <strong>Placement Training Workshop</strong> by <strong>GeeksforGeeks</strong>.</div>
                                        <button className = 'button is-medium is-rounded is-danger' onClick = {() => this.props.history.push('/buy-ticket')}>
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
