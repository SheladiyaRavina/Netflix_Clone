import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confrompassword,setConfrompassword] = useState("");

    const handleSubmit = () => {
        let users = axios.post(`http://localhost:7000/login`, {
            name: name,
            email: email,
            password: password,
            cpasswod:confrompassword
        });

        if (users) {
           if(password == confrompassword){
            alert("User successfully register");
            setName("");
            setEmail("");
            setPassword("");
            setConfrompassword("");
           }else{
            alert("password ans confrom password not match");
           }
        } else {
            console.log("User not Register");
            return false;
        }
    }

    return (
        <div style={{ fontFamily: 'poppins' }} className='login-from'>
            <div className='container'>
                <div className='row mx-auto  card border-0 mt-4 bg-dark' style={{ border: '1px solid #CBCBCB',width:'40%' }}>
                    <div className='col-lg-12 ps-5 pb-5 pe-5 pt-4'>
                        <h4 className='fw-normal' style={{color:'#ffffff'}}>Create An Account
                        </h4>

                        <form className='fs-5'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold text-light" style={{ fontSize: '13px' }}>Name</label><br />
                                <input type="text" name='name' onChange={(e) => setName(e.target.value)} value={name} className="w-100" style={{ backgroundColor: '#F4F4F4', border: '1px solid #1D1C1B' }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold text-light" style={{ fontSize: '13px' }}>Email address</label><br />
                                <input type="text" name='email' onChange={(e) => setEmail(e.target.value)} value={email} className="w-100" style={{ backgroundColor: '#F4F4F4', border: '1px solid #1D1C1B' }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold text-light" style={{ fontSize: '13px' }}>Password</label><br />
                                <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} value={password} className="w-100" id="exampleInputPassword1" style={{ backgroundColor: '#F4F4F4', border: '1px solid #1D1C1B' }} />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label fw-bold text-light" style={{ fontSize: '13px' }}>Confrom Password</label><br />
                            <input type="password" name='cpassword' onChange={(e) => setConfrompassword(e.target.value)} value={confrompassword} className="w-100" id="exampleInputPassword1" style={{ backgroundColor: '#F4F4F4', border: '1px solid #1D1C1B' }} />
                            </div>
                           
                            <button type="button" onClick={() => handleSubmit()} className="w-100 border-0 text-uppercase text-light p-2 mt-3" style={{ backgroundColor: '#ff0000', fontSize: '12px' }}>create account</button>
                        </form>        
                      
                                                            
                    </div>
                </div>
                
                    <div className='col-lg-12 text-center pt-2'>

                        <NavLink to={`/login`} className='text-center fs-6 text-danger' style={{fontSize:'12px'}}>sign in</NavLink>
                    </div>
                
            </div>
        </div>
    )
}

export default Register;