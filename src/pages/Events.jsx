import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import TechnicalImage from '../assets/Tech1.png'
import NonTechnicalImage from '../assets/Nontech.png'

class Events extends Component {
    render() {
        return (
            <div style = {{overflowX: 'hidden'}}>
                <Navbar name = 'event' />
                <section className = 'section' style = {{backgroundColor: 'rgba(199, 44, 65, 0.863)', minHeight: '100vh', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div className = 'container events-outer-container'>
                        <div className = 'columns' style = {{marginBottom: '50px', marginTop: '30px'}}>
                            <div className = 'column has-text-centered' style = {{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                                <div className = 'event-image' onClick = {() => this.props.history.push('/events/technical')} style = {{marginTop: '-10px'}}>
                                    <LazyLoadImage src = {TechnicalImage}  alt = 'Technical events image' effect = 'blur' />
                                </div>
                            </div>
                            <div className = 'column has-text-centered' style = {{display: 'flex', alignItems: 'center', flexDirection: 'column'}} onClick = {() => this.props.history.push('/stay-tuned')}>
                                <div className = 'event-image'>
                                    <LazyLoadImage src = {NonTechnicalImage}  alt = 'Non-technical events image' effect = 'blur' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )  
    }
}

export default withRouter(Events)
