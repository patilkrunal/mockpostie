import React from "react";

import { authentication } from './FirebaseConfig';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useNavigate } from 'react-router-dom';

const Login = ()=>{
    const navigate = useNavigate();
    console.log("in login");
    const signIn = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((re)=>{
            authentication.onAuthStateChanged( async (user) => {
                if (user) {
                    let token = await user.getIdToken();
                    console.log(token);
                }
            })
            console.log(re);
        })
        .catch((err)=>{
          console.log(err)
        })
        navigate("/")
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