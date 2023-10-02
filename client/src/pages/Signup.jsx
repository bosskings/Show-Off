import { Link } from 'react-router-dom'
import "../components/Register/register.css"
import LoginVideo from '../assets/video/walking_illustration_video_process.mp4'
import { useState } from 'react'
import {useSignup} from '../hooks/useSignup'

const SignupForm = () => {

    // state to store user singUp details 
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('')
    const [name, setName] = useState('')
    const [userType, setUserType] = useState('Artist')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) =>{
        e.preventDefault();

        console.log(name, userType) ;
        await signup(name, userType, userEmail, userPassword)
    }


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

                        <form onSubmit={handleSubmit}>
                            <div id='input__field'>
                                <label>Name:</label>
                                <input type="text" value={name} required onChange={(e) => setName(e.target.value)} autoComplete='on' />
                            </div>

                            <div id='input__field'>
                                <label>SignUp As?</label>
                                <select onChange={(e) => setUserType(e.target.value)} autoComplete='on' required >
                                    <option value="Artist">Artist</option>
                                    <option value="Spectator">Spectator</option>
                                </select>
                            </div>
                            
                            <div id='input__field'>
                                <label>Email:</label>
                                <input type="email" value={userEmail} required onChange={(e) => setUserEmail(e.target.value)} autoComplete='on' />
                            </div>
                            
                            <div id='input__field'>
                                <label>Password:</label>
                                <input type="password" value={userPassword} required onChange={(e) => setUserPassword(e.target.value)} autoComplete='on' />
                            </div>

                            <div id='terms'>
                                <input type="checkbox" />
                                I agree to all Terms, Privacy Policy
                            </div>

                            <button onClick={handleSubmit} type="submit" id='submit__btn' disabled={isLoading}>Sign Up </button>
                            <p id='redirect'>Already have an account? <Link to="/login">Login</Link></p>

                            {error && <div className="error">{error}</div> }

                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default SignupForm