import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            let users = await axios.post(`http://localhost:3000/login?email=${email}&password=${password}`);

            if (users.data.length === 0) {
                console.log("Email and Password not valid");
                return false;

            }
            localStorage.setItem('checkUserLogin', JSON.stringify(users.data[0]));
            setEmail("");
            setPassword("");
            navigate('/');

        } catch (err) {
            console.log(err);
            return false;
        }
    }

    return (
        <div style={{ fontFamily: 'poppins' }} className='login-from'>
            <div className='container pt-5'>
                <div className='row mx-auto card border-0 bg-dark' style={{ border: '1px solid #CBCBCB',width:'40%' }}>
                    <div className='col-lg-12 ps-5 pb-5 pe-5 pt-4'>
                        <h4 className='fw-normal' style={{color:'white'}}>Sign In</h4>
                        <form className='fs-4'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold text-white" style={{ fontSize: '13px' }}>Email address</label><br />
                                <input type="text" name='email' onChange={(e) => setEmail(e.target.value)} value={email} className="w-100" style={{ backgroundColor: '#ffffff', border: '1px solid #1D1C1B' }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold text-white" style={{ fontSize: '13px' }} >Password</label><br />
                                <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} value={password} className="w-100" id="exampleInputPassword1" style={{ backgroundColor: '#F4F4F4', border: '1px solid #1D1C1B' }} />
                            </div>
                            
                            <button type="button" onClick={() => handleSubmit()} className="w-100 border-0 text-uppercase text-light p-2 mt-3" style={{ backgroundColor: '#ff0000', fontSize: '12px' }}>Sign In</button>
                        </form>
                        
                      
                    </div>
                </div>
                <div className='row  mx-auto border-0' style={{ border: '1px solid #CBCBCB',width:'40%' }}>
                    <div className='col-lg-12 text-center pt-5'>
                        
                        <NavLink to={`/register`} className='text-center text-danger ' style={{fontSize:'15px'}}>CREATE AN ACCOUNT</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login