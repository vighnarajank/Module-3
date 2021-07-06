import React, { Component } from 'react'
import LinkedIn from 'react-linkedin-login'

export default class LinkedInLogin extends Component {

    render() {
        return (
            <div>
                <LinkedIn
                    clientId='868edf9wyifyjq'
                    callback={this.callbackLinkedIn}
                    text='LinkedIn' 
                />
            </div>
        )
    }
}
