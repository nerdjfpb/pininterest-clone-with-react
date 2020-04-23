import React from 'react';
import './registration.css';
import {Link} from 'react-router-dom'

function Registraton(){

    const pstyle = {
        fontSize:'11px'
    };

    const prstyle = {
       lineHeight:'1px',
       letterSpacing: '-1.2px',
       fontWeight:600
    };

    const barstyle = {
        background: '#efefef',
        padding: '20px',
        bottom: '0px',
        border: '0',
        borderRadius: '5px',
        width: '100%',
        position: 'absolute',
        fontWeight: '900'



     };

     const btnclr={
        background: 'rgb(230, 0, 35)',
     };
    return(
        <div className="main">
        <br/><br/><br/>
                <div className="fix-box">
                <img width="80px" align="center" alr="pintrestlogo" src="https://i.ya-webdesign.com/images/pinterest-icon-png-transparent-background.png" />
                    <h1 style={prstyle}>Welcome to Pinterest</h1>
                    <p style={prstyle}>Find new ideas to try</p>
                    <from>
                        <ul>
                            <li> <input type="text" name="email" placeholder="Email"/></li>
                            <li> <input type="password" name="password" placeholder="Enter Password"/></li>
                            <li> <input type="number" name="age" placeholder="Age"/></li>
                            
                            <li>
                                <button style={btnclr}>Continue</button>
                                <p style={prstyle}><strong>OR</strong></p>
                            </li>
                            <li>
                                <button>Continue with Facebook</button>
                                <button>Continue with Google</button>
                            </li>
                                <li>
                                    <p style={pstyle}>By continuing, you agree to Pinterest's <Link to="#">Terms of Service, Privacy Policy</Link></p>
                                    <p>Already a member? <Link to="/login">Log in</Link></p>
                                </li>
                        </ul>
                    </from>
                    <button style={barstyle}>Create a business Account</button>
                </div>
                <br/><br/><br/>
        </div>        
    );
}

export default Registraton;