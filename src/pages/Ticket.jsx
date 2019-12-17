import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CryptoJS from 'crypto-js'
import AES from 'crypto-js/aes'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import CheckoutImage from '../assets/Checkout.png'
import axios from 'axios'
import Scroll from 'react-scroll'
import { Spin, Icon } from 'antd'

class Ticket extends Component {

    constructor() {
        super()
        this.state = {
            userId : '',
            isLoading: false,
            data: ''
        }
    }

    componentWillMount() {
        const isLogged = localStorage.getItem('loggedIn')
        if(isLogged === 'true') {
            return
        } else {
            this.props.history.push('/login')
        }
    }

    componentDidMount() {
        const scroll = Scroll.animateScroll
        scroll.scrollToTop({
            duration: 100
        })
        const userId = localStorage.getItem('id')
        this.setState({ isLoading: true, userId: userId }, () => {
            axios.post('https://samhita-backend.herokuapp.com/details', {
                userid: userId
            }).then(res => {
                const isPaid = res.data.status
                if(isPaid === 0) {
                    this.setState({isLoading: false})
                    return
                } else if(isPaid === 1) {
                    this.props.history.replace('/account')
                }
            }).catch(err => {
                this.setState({isLoading: false})
                console.log(err.message)
            })
        })
    }

    handlePurchase = transactionAmount => {
        var transactionAmount = transactionAmount.toString()
        const userID = this.state.userId.toString()
        const appendedString = `${transactionAmount}z${userID}`
        const encryptedString = AES.encrypt(appendedString, 'firebase')
        // const bytes = AES.decrypt(encryptedString.toString(), 'firebase')
        // const decryptedString = bytes.toString(CryptoJS.enc.Utf8)
        window.location.assign(`https://samhita-backend.herokuapp.com/paywithpaytm?redirect=${encryptedString}`)
    }

    render() {
        const { isLoading } = this.state
        const loadingIcon = <Icon type="loading" style={{ fontSize: 45 }} spin />
        return (
            <React.Fragment>
                <section className = 'section' style = {{minHeight: '100vh', backgroundColor: '#FCC156'}}>
                    <div className = 'title is-3 is-lato has-text-centered'>
                        Checkout
                    </div>
                    {
                        isLoading ? 

                        <div className = 'container has-text-centered buy-ticket-container'>
                            <div className = 'checkout-image'>
                                <LazyLoadImage src = {CheckoutImage} effect = 'blur'/>
                            </div>
                            <Spin indicator = {loadingIcon} />
                        </div>
                        

                        :

                        <div className = 'container has-text-centered buy-ticket-container'>
                            <div className = 'checkout-image'>
                                <LazyLoadImage src = {CheckoutImage} effect = 'blur'/>
                            </div>
                            <button className = 'button is-rounded is-lato has-text-weight-medium' style = {{backgroundColor: '#0071BC', border: '1.5px solid #0071BC', color: 'white', marginRight: '10px'}} onClick = {() => {this.handlePurchase(250)}}>
                                Buy ticket
                            </button>
                            <button className = 'button is-rounded is-lato has-text-weight-medium' style = {{backgroundColor: 'white', border: '1.5px solid #0071BC', color: '#0071BC'}} onClick = {() => this.props.history.goBack()}>
                                Go back
                            </button>

                        </div>
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default withRouter(Ticket)
