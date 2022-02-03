import React from "react";
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { authentication } from "./FirebaseConfig";

import { useNavigate } from 'react-router-dom';

const Login = ()=>{
    const navigate = useNavigate();
    console.log("in login");
    const signIn = ()=>{
        console.log('InSign');
        const provider = new GoogleAuthProvider();
        signInWithRedirect(authentication, provider);
        getRedirectResult(authentication)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log('result',result);
            console.log('user', user);
        }).catch((error) => {
            // Handle Errors here.
            console.log('error', error);
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
        // navigate("/")
    };

    return(
        <div style={ContainerStyle}>
            <button style={ButtonStyle} onClick={signIn}>
                Sign in
            </button>
        </div>
    ) 
}

const ContainerStyle={
    width:'100%',
    height:'100%',
    position:'absolute',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#282A36'
}

const ButtonStyle ={
    width:200,
    height:40,
    cursor:'pointer',
    border:0,
    borderRadius:10,

}

export default Login