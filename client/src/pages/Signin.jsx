import { Link } from 'react-router-dom'

import "../components/Login/login.css"
import LoginVideo from '../assets/video/walking_illustration_video_process.mp4'
import { useState } from 'react'

const LoginForm = () => {

    // create states for user inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        console.log(email, password);
    } 

    return (
        <div className='login'>
            <div className='Login__form__div'>
                <div className='form__left'>
                    <div className='form__left__inner'>
                        <video src={LoginVideo} autoPlay loop muted ></video>
                    </div>
                </div>
                <div className='form__right'>
                    <video src={LoginVideo} autoPlay loop muted id='media__video'></video>
                    <div className='form__right__inner'>
                        <div className='form__right__top'>
                            <h3>Hey, hello 👋</h3>
                            <p>Enter the information you entered  while registering</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div id='input__field'>
                                <label>Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div id='input__field'>
                                <label>Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            
                            <div id='login__terms'>
                                <div>
                                    <input type="checkbox" name="checkbox" />
                                    Remember me
                                </div>
                                <div>
                                    <Link>Forgot password?</Link>
                                </div>
                            </div>
                            <button type="submit" id='login__submit__btn'>Login</button>
                            <p id='redirect'>Not registered yet? <Link to="/register">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default LoginForm