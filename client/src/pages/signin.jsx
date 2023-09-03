import { Link } from "react-router-dom";

// css files
import "./assets/css/siginup"

// picture files
import bd from "./assets/images/bd.png";

const signup = () => {

    return (  
        <div>

            <div className="main-container">
                <section className="login-left">
                    <div className="lft_text">
                        <Link to={'/'}><p>ShowOff</p></Link>
                        <h2>Showcase And Display Your Arts, Design And Skill On The Worlds Biggest Stage</h2>
                    </div>
                    <img src={bd} alt="" />
                </section>

                <section className="login-right">
                    <form>
                        <h1>Sign in to ShowOff</h1>

                        <div className="btns">
                            <button className="g"><i className="uil uil-google"></i></button>
                            <button className="t"><i className="uil uil-twitter"></i></button>
                            <button className="f"><i className="uil uil-facebook-f"></i></button>
                        </div>

                        <label for="">Username or Email Address</label>
                        <input type="text" placeholder="Enter Username or Email" />
                        <label for="">Password</label>
                        <input type="password" placeholder="Enter Password" />

                        <p>Not a member? <Link to={'/signup'} >Sign up now</Link></p>
                        <button>Sign In</button>
                    </form>
                </section>
            </div>

        </div>
    );
}
 
export default signup;