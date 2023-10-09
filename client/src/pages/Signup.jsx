import { Link } from 'react-router-dom'
import "../components/Register/register.css"
import LoginVideo from '../assets/video/walking_illustration_video_process.mp4'
import { useState } from 'react'

const SignupForm = () => {
    return (
        <div className='reg'>
            <div className='form__div'>
                <div className='left'>
                    <div className='left__inner'>
                        <video src={LoginVideo} autoPlay loop muted ></video>
                    </div>
                </div>
                <div className='right'>
                    <video src={LoginVideo} autoPlay loop muted id='media__video'></video>
                    <div className='right__inner'>
                        <div className='right__top'>
                            <h3>Create your account</h3>
                        </div>

                        <form>
                            <div id='input__field'>
                                <label>Name:</label>
                                <input type="text"  autoComplete='on' />
                            </div>

                            <div id='input__field'>
                                <label>SignUp As?</label>
                                <select autoComplete='on' required >
                                    <option value="Artist">Artist</option>
                                    <option value="Spectator">Spectator</option>
                                </select>
                            </div>
                            
                            <div id='input__field'>
                                <label>Email:</label>
                                <input type="email" required autoComplete='on' />
                            </div>
                            
                            <div id='input__field'>
                                <label>Password:</label>
                                <input type="password" required autoComplete='on' />
                            </div>

                            <div id='terms'>
                                <input type="checkbox" />
                                I agree to all Terms, Privacy Policy
                            </div>

                            <button type="submit" id='submit__btn'>Sign Up </button>
                            <p id='redirect'>Already have an account? <Link to="/login">Login</Link></p>

                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default SignupForm