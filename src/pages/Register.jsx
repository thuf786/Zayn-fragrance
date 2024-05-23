import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import {  Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

function Register() {
  const [user, setUser] = useState({
    Username: "",Email:"", Password: ""
})
  return (
    
    <div className='row'>
     <div className='col-md-4 m-5 justify-content-center d-flex'>
      <img src="https://png.pngtree.com/png-clipart/20220910/original/pngtree-register-now-label-with-megaphone-transparent-background-vector-illustration-design-png-image_8529214.png" alt="" height={"400px"} width={"400px"}/>
     </div>
     <div className='col-md-4'>
      <h3 className='text-primary m-3 mt-5 text-center' style={{fontStyle:"oblique"}}>Register Form</h3>
      <Form className='border shadow p-5 rounded'>
                            <Form.Group className="mb-3 fw-bold " controlId="formBasicName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" placeholder="username" 
                                    value={user.Username} onChange={(e)=>setUser({...user,Username:e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" 
                                    value={user.Email} onChange={(e)=>setUser({...user,Email:e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 fw-bold " controlId="formBasicPassword" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    value={user.Password} onChange={(e)=>setUser({...user,Password:e.target.value})}
                                />
                            </Form.Group>
                            <Button variant="outline-success" type="submit" >
                                Register
                            </Button>
                            <footer className='p-2 ' style={{ textDecoration: "none" }}>Already a User?<Link to={'/login'}> <span className='text-primary' style={{cursor:"pointer"}}>Login</span> </Link></footer>
                        </Form>
     </div>
     <div className='col-md-4'></div>
    </div>
  )
}

export default Register