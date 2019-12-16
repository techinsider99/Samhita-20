import React, { Component } from 'react'
import { Avatar } from 'antd'

class Event extends Component {

    render() {
        return (
            <React.Fragment>
                <div className = 'field is-grouped'>
                    <div className = 'control' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Avatar src = {this.props.avatar} size = {80} />
                    </div>
                    <div className = 'is-hidden-desktop' style = {{marginLeft: '10px'}}>
                        <div className = 'title is-5 is-lato' style = {{marginBottom: '12px'}}>
                            {this.props.title}
                        </div>
                        <div className = 'field is-grouped'>
                            <div className = 'control'>
                                <label className = 'label is-lato'>Team size:</label>
                            </div>
                            <div className = 'control' style = {{marginTop: '2.5px', marginLeft: '-8px'}}>
                                <div className = 'subtitle is-6 is-lato'>{this.props.size}</div>
                            </div>
                        </div>
                        {   
                            this.props.onsite ? 

                            <div className = 'field is-grouped' style = {{marginTop: '-10px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>Site:</label>
                                </div>
                                <div className = 'control' style = {{marginTop: '2px', marginLeft: '-7px'}}>
                                    <div className = 'subtitle is-6 is-lato'>Onsite</div>
                                </div>
                            </div>   

                            :

                            null
                        }
                    </div>
                    <div className = 'control is-hidden-touch' style = {{marginLeft: '10px'}}>
                        <div className = 'title is-4 is-lato' style = {{marginBottom: '12px'}}>
                            {this.props.title}
                        </div>
                        <div className = 'field is-grouped'>
                            <div className = 'control'>
                                <label className = 'label is-lato'>Team size:</label>
                            </div>
                            <div className = 'control' style = {{marginTop: '2.5px', marginLeft: '-8px'}}>
                                <div className = 'subtitle is-6 is-lato'>{this.props.size}</div>
                            </div>
                        </div>
                        {   
                            this.props.onsite ? 

                            <div className = 'field is-grouped' style = {{marginTop: '-10px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>Site:</label>
                                </div>
                                <div className = 'control' style = {{marginTop: '2px', marginLeft: '-7px'}}>
                                    <div className = 'subtitle is-6 is-lato'>Onsite</div>
                                </div>
                            </div>   

                            :

                            null
                        }
                    </div>
                </div>    
                <div className = 'field is-grouped'>
                    <div className = 'control'>
                        <label className = 'label is-lato'>Description:</label>
                    </div>
                    <div style = {{marginTop: '2px'}}>
                        <div className = 'subtitle is-6 is-lato has-text-justified'>
                            {this.props.description}
                        </div>
                    </div>
                </div>
                <div className = 'field' style = {{marginBottom: '3rem'}}>
                    <div className = 'control'>
                        <label className = 'label is-lato'>Rules:</label>
                    </div>
                    <div className = 'is-lato' style = {{marginTop: '2px'}}>
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Event
