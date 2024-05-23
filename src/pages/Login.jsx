import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState({
        Username: "", Password: ""
    })
const handleLogin=(e)=>{
    e.preventDefault()
    console.log(user);
}

    return (
        <>      
                <div className='col-lg-12 col-md-6 d-flex  justify-content-center align-items-center m-1'>
                <h2 style={{ color: "black" }} className='me-5'>ZAYN <span className='text-warning'>PERFUMES</span></h2>
                    <div className='p-5  rounded w-45 login' >
                    <h3 className=' m-3 fw-bold' style={{textDecoration:"none", background:"transparent" , color:"whitesmoke"}}>Login</h3>
                        <Form className='border shadow p-5 rounded'>
                            <Form.Group className="mb-3 " controlId="formBasicName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" placeholder="username" 
                                    value={user.Username} onChange={(e)=>setUser({...user,Username:e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 " controlId="formBasicPassword" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    value={user.Password} onChange={(e)=>setUser({...user,Password:e.target.value})}
                                />
                            </Form.Group>
                            <Button variant="outline-success" type="submit" onClick={handleLogin}>
                                Submit
                            </Button>
                            <footer className='p-2 ' style={{ textDecoration: "none" }}>Need an account? <Link to={'/register'}> <span className='text-primary' style={{cursor:"pointer"}}>Register</span> </Link></footer>
                        </Form>
                        <Link to={'/'} style={{ textDecoration: "none",color:"ButtonHighlight",background:"transparent"}}>
                        <i class="fa-solid fa-angles-left ms-3 mt-5 me-1"></i>
            Home
          </Link>
                    </div>
                </div>
                
        </>
    )
}

export default Login;