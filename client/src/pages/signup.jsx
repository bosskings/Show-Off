import { Link } from "react-router-dom"

// picture files
import cc1 from  "./assets/images/cc 1.png";

// css file
import './assets/css/styles.css';

const Signup = () => {
    return (  
        <div>
            <div className="main-container">
                <section className="signup-left">
                    <div className="sft_text">
                        <Link to={'/'} ><p>ShowOff</p></Link>
                        <h2>Showcase And Display Your Arts, Design And Skill On The Worlds Biggest Stage</h2>
                    </div>
                    <img src={cc1} alt="" />
                </section>

                <section className="signup-right">
                    <form>
                        <h1>Sign Up to ShowOff</h1>

                        <div className="signup-btns">
                            <button className="g"><i className="uil uil-google"></i></button>
                            <button className="t"><i className="uil uil-twitter"></i></button>
                            <button className="f"><i className="uil uil-facebook-f"></i></button>
                        </div>

                        <div className="fn">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="Enter Name" name="name" />
                            </div>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" placeholder="Enter Username" name="username" />
                            </div>
                        </div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter your Email Address" name="email" />
                        <label htmlFor="passwor">Password</label>
                        <input type="password" placeholder="Enter your Password" autoComplete="true" name="password" />

                        <div className="terms">
                            <input type="checkbox" />
                            <p>Creating an account means you’re okay with our <span>Terms of Service, Privacy Policy,</span> and our default <span>Notification Settings</span></p>
                        </div>

                        <p>Already a member? <Link to={"/signin"}>Sign In now</Link></p>
                        <button>Sign Up</button>
                    </form>
                </section>
            </div>
        </div>
    );
}
 
export default Signup;