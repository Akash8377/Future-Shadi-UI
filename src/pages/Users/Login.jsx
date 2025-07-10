import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Login = () => {
    return (
        <>
            <Header />
            <section className="login-part">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="login-img">
                                <img src="images/futurelogin.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-box">
                                <div className="login-title">Existing Member? Login</div>
                                <form>
                                    <input
                                        type="text"
                                        placeholder="Enter Mobile No/ E-Mail ID"
                                        required=""
                                    />
                                    <div className="password-box">
                                        <input
                                            type="password"
                                            placeholder="Enter Password"
                                            id="passwordInput"
                                        />
                                        <span className="toggle-eye" onclick="togglePassword()">
                                            👁️
                                        </span>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox" id="keepLoggedIn" defaultChecked="" />
                                        <label htmlFor="keepLoggedIn">Keep me logged in</label>
                                    </div>
                                    <button type="submit">LOGIN</button>
                                    <div className="helper-links">
                                        Trouble logging in?
                                        <br />
                                        <Link to="/sign-up">Sign Up</Link> |{" "}
                                        <Link to="#" className="forget-password">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Login
