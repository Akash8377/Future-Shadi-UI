import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const Register = () => {
    return (
        <>
            <Header />
            <section className="login-part">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="register-form">
                                <h2>Register Here Your Profile</h2>
                                <form>
                                    <div className="form-group">
                                        <label>First Name*</label>
                                        <input type="text" required="" />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name*</label>
                                        <input type="text" required="" />
                                    </div>
                                    <div className="form-group">
                                        <label>I am looking for</label>
                                        <div className="radio-group">
                                            <label>
                                                <input type="radio" name="lookingFor" defaultValue="Bride" />{" "}
                                                Bride
                                            </label>
                                            <label>
                                                <input type="radio" name="lookingFor" defaultValue="Groom" />{" "}
                                                Groom
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Date of Birth*</label>
                                        <div style={{ display: "flex", gap: 10 }}>
                                            <select required="">
                                                <option>Month</option>
                                                {/* Add months */}
                                            </select>
                                            <select required="">
                                                <option>Day</option>
                                                {/* Add days */}
                                            </select>
                                            <select required="">
                                                <option>Year</option>
                                                {/* Add years */}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Religion*</label>
                                        <select required="">
                                            <option>Please select..</option>
                                            {/* Add religions */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Education*</label>
                                        <select required="">
                                            <option>Please select..</option>
                                            {/* Add options */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Country*</label>
                                        <select required="">
                                            <option>Please select..</option>
                                            {/* Add countries */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address*</label>
                                        <input type="email" required="" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password*</label>
                                        <input type="password" required="" />
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <input type="checkbox" required="" /> I'm not a robot
                                        </label>
                                    </div>
                                    <button type="submit" className="btn-submit">
                                        SUBMIT
                                    </button>
                                    <div className="footer-note">
                                        By providing my contact details, I agree to receive
                                        communications. I understand I can unsubscribe at any time.
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="Register-box" id="loginBox">
                                <span className="close-btn" onclick="closeLoginBox()">
                                    ×
                                </span>
                                <h4>Hello Members,</h4>
                                <p>
                                    You are here because you want to find a good match for yourself or
                                    someone in your family. Here are a few tips:
                                </p>
                                <ol>
                                    <li>Enter all the required details on the registration form.</li>
                                    <li>Upload a recent favorite photo of yourself.</li>
                                    <li>
                                        Don't wait for others to contact you. If someone interests you,
                                        let them know.
                                    </li>
                                    <li>Have patience; don’t expect results immediately.</li>
                                    <li>
                                        Have realistic expectations while searching for a life partner.
                                    </li>
                                </ol>
                                <p>
                                    Write something interesting in your profile instead of just saying
                                    “Contact me”. This helps attract the right matches.
                                </p>
                                <p>
                                    <strong>Good Luck!</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Register
