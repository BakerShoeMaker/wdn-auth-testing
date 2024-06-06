"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function SignUpNewTeacher() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [schoolZip, setSchoolZip] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let tempErrors = {};
        let formIsValid = true;

        if (!firstName) {
            formIsValid = false;
            tempErrors["firstName"] = "First name cannot be empty";
        }
        if (!lastName) {
            formIsValid = false;
            tempErrors["lastName"] = "Last name cannot be empty";
        }
        if (!schoolName) {
            formIsValid = false;
            tempErrors["schoolName"] = "School name cannot be empty";
        }
        if (!schoolZip) {
            formIsValid = false;
            tempErrors["schoolZip"] = "School zip code cannot be empty";
        }

        setErrors(tempErrors);
        return formIsValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Proceed with form processing here (e.g., send data to an API)
            // For example, redirect to the teacher page
            //window.location.href = "/teacher"; 
            console.log("EVERYTHING IS COOL!");
        }
    }

    const mainStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        height: '100vh',
        margin: '0'
      };

    return(
        <main style={mainStyle}>
            <div className="container">
                <div className="row pt-5 ">
                    <div className='col-4'></div>
                    <div className='col-4'>
                        <div className='row pt-5'>
                            <hr/>
                            <h4 className='pt-3'> Step 2: Continue Signing up</h4>
                        </div>
                        <div className="row justify-content-center pt-4">
                            <form onSubmit={handleSubmit}>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">First name</span>
                                    <input type="text" className="form-control" id="first_name" value={firstName}
                                     onChange={(e) => setFirstName(e.target.value)} aria-describedby="basic-addon1" required/>
                                    {errors.firstName && <div className="alert alert-danger">{errors.firstName}</div>}
                                </div> 
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Last name</span>
                                    <input type="text" className="form-control" id="last_name" value={lastName} 
                                    onChange={(e) => setLastName(e.target.value)} aria-describedby="basic-addon1" required/>
                                    {errors.lastName && <div className="alert alert-danger">{errors.lastName}</div>}
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">School name</span>
                                    <input type="text" className="form-control" id="school_name" value={schoolName}
                                     onChange={(e) => setSchoolName(e.target.value)} aria-describedby="basic-addon1" required/>
                                    {errors.schoolName && <div className="alert alert-danger">{errors.schoolName}</div>}
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">School zip</span>
                                    <input type="text" className="form-control" id="school_zip" value={schoolZip} 
                                    onChange={(e) => setSchoolZip(e.target.value)} aria-describedby="basic-addon1" required/>
                                    {errors.schoolZip && <div className="alert alert-danger">{errors.schoolZip}</div>}
                                </div>
                                <div className="pb-4">
                                    <button type="submit" className="btn btn-success">Finish</button>                                                
                                </div>
                                <hr/>
                            </form>                                    
                        </div>
                    </div>
                    <div className='col-4'></div>                                         
                </div>                               
            </div>     
        </main>
    );
}
