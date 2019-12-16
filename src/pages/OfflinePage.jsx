import React, { Component } from 'react'
import OfflineImage from '../assets/Offline-1.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default class OfflinePage extends Component {
    render() {
        return (
            <React.Fragment>
                <section className = 'section' style = {{minHeight: '100vh', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div className = 'container has-text-centered offline-image-container'>
                        <LazyLoadImage className = 'offline-image' src = {OfflineImage} effect = 'blur' />
                        <div className = 'subtitle is-lato is-4 offline-text' style = {{color: 'white'}}>You are offline<span role = 'img' aria-label = 'Frown emoji'>☹️</span>. Connect to internet to resume.</div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
