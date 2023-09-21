import { Link } from 'react-router-dom'

import "../components/Register/register.css"
import LoginVideo from '../assets/video/walking_illustration_video_process.mp4'

const StudentForm = () => {

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
                                <label>Name</label>
                                <input type="text" name='name' />
                            </div>
                            <div id='input__field'>
                                <label>Username</label>
                                <input type="text" name='username' />
                            </div>
                            <div id='input__field'>
                                <label>Email</label>
                                <input type="email" name='email' />
                            </div>
                            <div id='input__field'>
                                <label>Password</label>
                                <input type="password" name='password' />
                            </div>
                            <div id='terms'>
                                <input type="checkbox" name="checkbox" />
                                I agree to all Terms, Privacy Policy
                            </div>
                            <button type="submit" id='submit__btn'>Sign Up</button>
                            <p id='redirect'>Already have an account? <Link to="/login">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default StudentForm