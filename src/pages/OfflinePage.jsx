import React, { Component } from 'react'

export default class OfflinePage extends Component {
    render() {
        return (
            <React.Fragment>
                <section className = 'section' style = {{minHeight: '100vh', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div className = 'container has-text-centered offline-image-container'>
                        <div className = 'subtitle is-lato is-4 offline-text' style = {{color: 'white', margin: '1rem 0rem'}}>You are offline<span role = 'img' aria-label = 'Frown emoji'>☹️</span>. Please check your internet connection and reconnect if possible.</div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
