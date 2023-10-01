import { Link } from 'react-router-dom'
import "../components/Register/register.css"
import LoginVideo from '../assets/video/walking_illustration_video_process.mp4'
import { useState } from 'react'

const StudentForm = () => {

    // state to store user singUp details 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [userType, setUserType] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault();

        console.log(email, name, password, userType);
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
                                <input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div id='input__field'>
                                <label>SignUp As?</label>
                                <select value={userType} required onChange={(e) => setUserType(e.target.value)}>
                                    <option value="Artist">Artist</option>
                                    <option value="Spectator">Spectator</option>
                                </select>
                            </div>
                            
                            <div id='input__field'>
                                <label>Email:</label>
                                <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            
                            <div id='input__field'>
                                <label>Password:</label>
                                <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div id='terms'>
                                <input type="checkbox" />
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