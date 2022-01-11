import React from 'react';
import {useState} from 'react';
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';



const Register = () => {
    const [ firstName, setFName ] = useState('');
    // const [ middleName, setMName ] = useState('');
    const [ lastName, setLName ] = useState('');
    // const [ dateOfBirth, setDateOfBirth ] = useState('');
    // const [ licenseNumber, setLicenseNumber ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ mobilePhone, setMobilePhone ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ city, setCity ] = useState('');
    const [ yourState, setYourState ] = useState('');
    const [ zipCode, setZipCode ] = useState('');
    const [ squareFootage, setSquareFootage ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.table({firstName,lastName,mobilePhone,address,city,yourState,zipCode,squareFootage,email,password});
    }
  

    return (
        <>
        <div className="container-fluid bg-secondary h1 p-5 text-center"> 
        <h1>Register</h1>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3"> 
                    <RegisterForm 
                    handleSubmit={handleSubmit}
                    firstName={firstName} 
                    setFName={setFName} 
                    lastName={lastName} 
                    setLName={setLName}
                    email={email} 
                    setEmail={setEmail}
                    mobilePhone={mobilePhone}
                    setMobilePhone={setMobilePhone}
                    address={address}
                    setAddress={setAddress}
                    city={city}
                    setCity={setCity}
                    yourState={yourState}
                    setYourState={setYourState}
                    zipCode={zipCode}
                    setZipCode={setZipCode}
                    squareFootage={squareFootage}
                    setSquareFootage={setSquareFootage}
                    password={password}
                    setPassword={setPassword}
                    />
                 </div>
            </div>
        </div>
        </>
    )
}

export default Register;