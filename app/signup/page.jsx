"use client";
//import { signIn } from 'next-auth/client';
//import { signIn } from 'next-auth/react';
import React from 'react';
//import {generateRandomString} from '../utils/class-code-generator';



export default function SignUp()
{
  const mainStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100vh',
    margin: '0'
  };
  return (
    <main style={mainStyle} >
        <div className="container">
              <div className="row pt-5 ">
                    <div className='col-4'></div>
                      <div className='col-4'>
                          <div className='row pt-5'>
                          <hr/>
                          <h4 className = "pt-4">------Student with a class code?------</h4>
                                <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"> Enter class code</span>
                                        <input type="class_code" className="form-control" id="email"  aria-label="email" aria-describedby="basic-addon1" required/>
                                  </div>
                              <div className="pb-4 pt-4">
                                  <a href="/auth/sign_up_with_classcode">
                                        <button type="button" className="btn btn-primary btn-lg btn-block ">Submit class code</button>                                                
                                  </a>                                            
                              </div>                             
                            <hr/>
                            <h4 className='pt-3'>------Teacher: Sign up with Email------</h4>
                                </div>
                                  <div className="row justify-content-center pt-4">
                                      <form>                               
                                          <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"> email</span>
                                            <input type="email" className="form-control" id="email"  aria-label="email" aria-describedby="basic-addon1" required/>
                                          </div>
                                          <div className="pb-4">
                                            <a href="/auth/sign-up-with-email">
                                                  <button type="button" className="btn btn-primary btn-lg btn-block ">Sign Up with Email</button>                                                
                                            </a>                                            
                                          </div>
                                          <hr/>

                                          <h4 className = "pt-4">------Teacher: Sign Up with Google-----</h4>
                                        <div className="pb-4 pt-4">
                                          <button 
                                              type="button" 
                                              className="btn btn-primary btn-lg btn-block " 
                                              onClick={() => signIn('google')}>Sign up with Google
                                          </button>
                                        </div> 
                                        <hr/>
                                      <div className="mt-4">
                                              <p>Already have an account? <a href="/login">Login here</a>.</p>
                                              <small > By signing in you agree to our Terms of Service and privacy policy.</small> 
                                          </div>
                                      </form> 
                                                                         
                                </div>
                          </div>
                      </div>
                      <div className='col-4'></div>                                         
             </div>                               
    </main>     
  )
}