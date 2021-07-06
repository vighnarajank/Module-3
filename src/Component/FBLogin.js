import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';


export default class FBLogin extends Component {
    
    state = {
        isLoggedIn:false,
        userID:'',
        name: '',
        email:'',
        picture:''
    };
    
    responseFacebook = (response) => {
        
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    };
    componentClicked = () => {
        console.log("CLicked")
    };
    
    render() {
        let fbContent;
        
        if(this.state.isLoggedIn){
            fbContent=(
                <>
                <h1>Facebook Login Page</h1>
                <h2>Welcome {this.state.name}</h2>
                <h2>Email : {this.state.email}</h2>
                <img src={this.state.picture} alt={this.state.name}></img>
                </>
            );
        } else {
            fbContent = (
                <FacebookLogin
                    appId="339059331046010"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} 
                />
            );
        }
        
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
