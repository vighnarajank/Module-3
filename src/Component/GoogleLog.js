import React, {useState} from 'react'
import { GoogleLogin } from 'react-google-login';

export default function Login() {
    
    const [name, setName] = useState("");
    
    const [email, setEmail] = useState("");
    
    const [imageUrl, setUrl] = useState("");
    
    const responseGoogle = (response) => {
            setName(response.profileObj.name);
            setEmail(response.profileObj.email);
            setUrl(response.profileObj.imageUrl);
        };
    
    return (
        <div>
            <h1>Google Login Page</h1>
            <h2>Welcome : {name}</h2>
            <h2>Email : {email}</h2>
            <img src={imageUrl} alt={name}></img><br/>
            <GoogleLogin
                clientId="655256088984-re412l8tu5m401jogo62svsvqdo8ctrv.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

