import { Link } from 'react-router-dom'
import "../components/Login/login.css"
import LoginVideo from '../assets/video/walking_illustration_video_process.mp4'
<<<<<<< HEAD
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'


const LoginForm = () => {

    // create states for user inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading } = useLogin();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        await login(email, password);
    } 

=======

const LoginForm = () => {

>>>>>>> client
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
                            <div id='form__right__top__hey'>
                                <h3>Hey, hello 👋</h3>
                                <Link to="/"><i className="uil uil-arrow-left"></i> Back Home</Link>
                            </div>
                            <p>Enter the information you entered  while registering</p>
                        </div>

                        <form >
                            <div id='input__field'>
                                <label>Email</label>
<<<<<<< HEAD
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='on' />
=======
                                <input type="email" required />
>>>>>>> client
                            </div>

                            <div id='input__field'>
                                <label>Password</label>
<<<<<<< HEAD
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='on' />
=======
                                <input type="password" required />
>>>>>>> client
                            </div>
                            
                            <div id='login__terms'>
                                <div>
                                    <input type="checkbox" name="checkbox" autoComplete='on' />
                                    <input type="checkbox" name="checkbox" autoComplete='on' />
                                    Remember me
                                </div>
                                <div>
                                    <Link>Forgot password?</Link>
                                </div>
                            </div>
                            <button disabled={isLoading} id='login__submit__btn'>Login</button>
                            { error && <div className="error">{ error }</div>  }
                            <p id='redirect'>Not registered yet? <Link to="/register">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default LoginForm