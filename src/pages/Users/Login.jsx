import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/user/userSlice';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { toast } from '../../components/Common/Toast';
import config from '../../config';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${config.baseURL}/api/auth/login`, {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        dispatch(setUser({
          userInfo: response.data.user,
          token: response.data.token,
          rememberMe: formData.rememberMe
        }));

        await swal({
          title: "Success",
          text: "Logged in successfully!",
          icon: "success",
          buttons: false, // This hides all buttons
          timer: 2000,     // Optional: closes alert automatically after 2 seconds
        });

        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);

      if (error.response?.status === 401) {
        await swal({
          title: "Unauthorized",
          text: "Invalid email or password.",
          icon: "error",
          button: "Try Again",
        });
      } else {
        await swal({
          title: "Login Failed",
          text: "Something went wrong. Please try again.",
          icon: "error",
          button: "OK",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Header />
      <section className="login-part">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="login-img">
                <img src="images/futurelogin.png" alt="Login visual" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="login-box">
                <div className="login-title">Existing Member? Login</div>
                {errors.form && (
                  <div className="alert alert-danger" style={{ marginBottom: '15px' }}>
                    {errors.form}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="form-group email-box">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter E-Mail ID"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${errors.email ? 'is-invalid' : ''}`}
                    />
                    {errors.email && (
                      <div className="invalid-feedback" style={{ display: 'block' }}>
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div className="form-group password-box">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Enter Password"
                      value={formData.password}
                      onChange={handleChange}
                      className={errors.password ? 'is-invalid' : ''}
                    />
                    <span
                      className="toggle-eye"
                      onClick={togglePasswordVisibility}
                      style={{ cursor: 'pointer' }}
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </span>
                    {errors.password && (
                      <div className="invalid-feedback" style={{ display: 'block' }}>
                        {errors.password}
                      </div>
                    )}
                  </div>
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      id="keepLoggedIn"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <label htmlFor="keepLoggedIn">Keep me logged in</label>
                  </div>
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'LOGGING IN...' : 'LOGIN'}
                  </button>
                  <div className="helper-links">
                    Trouble logging in?
                    <br />
                    <Link to="/">Sign Up</Link> |{' '}
                    <Link to="/forget-password" className="forget-password">
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
  );
};

export default Login;