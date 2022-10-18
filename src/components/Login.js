import React, { useState } from 'react'
import './Login.css'
import SignUp from './SignUp';

const Login = () => {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className='login'>
            <div className='login-background'>
                <img
                    className='login-logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                    alt='logo'
                />
                <button onClick={() => setSignIn(true)} className='login-btn'>Sign In</button>

                <div className='login-gradient'></div>
            </div>
            <div className='login-body'>
                {signIn ? (
                    <SignUp/>
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='login-input'>
                            <form>
                                <input type="email" placeholder='Email Address' className='signup-formfield' />
                                <button onClick={() => setSignIn(true)} className='signup-btn'>GET STARTTED</button>
                            </form>

                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default Login