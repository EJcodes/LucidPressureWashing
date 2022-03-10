import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate }  from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';
import { toast } from 'react-toastify';
import { register } from '../ actions/auth';
import Login from '../auth/Login';

const Register = () => {
    // const [ middleName, setMName ] = useState('');
    // const [ dateOfBirth, setDateOfBirth ] = useState('');
    // const [ licenseNumber, setLicenseNumber ] = useState('');
    const [ firstName, setFName ] = useState('');
    const [ lastName, setLName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ mobilePhone, setMobilePhone ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ city, setCity ] = useState('');
    const [ yourState, setYourState ] = useState('');
    const [ zipCode, setZipCode ] = useState('');
    const [ squareFootage, setSquareFootage ] = useState('');
    const [ password, setPassword ] = useState('');
    let navigate = useNavigate();
  

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await register({
                    firstName,
                    lastName,
                    email,
                    mobilePhone,
                    address,
                    city,
                    yourState,
                    zipCode,
                    squareFootage,
                    password,
                });
                console.log('REGISTER USER ======> ', res);
                toast.success('Registration was successful. Please login.' );
                //need to make register page redirect to log in page after resitration process is successful   
                navigate('login')
        } catch (err) {
            console.log(err);
            if(err.response.status === 400) toast.error(err.response.data);
        }
    };

    
  

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