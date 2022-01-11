import React from 'react';
import {useState} from 'react';



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

    const  handleSubmit = (e) =>{
        e.preventDefault()
        console.table({firstName,lastName,mobilePhone,address,city,yourState,zipCode,squareFootage,email,password});
    }
    const registerForm = () =>  (
        <form onSubmit={handleSubmit} className="mt-3">
            <div className="form-group mb-3">
                <label className="form-label">Homeowner Information</label>
                    <input type="text" className="form-control mb-1" placeholder="First name" value={firstName} onChange={ e => setFName(e.target.value)}></input>
                    {/* <input type="text" className="form-control" placeholder="Middle name" value={setMName} onChange={ e => setMName(e.target.value)}></input> */}
                    <input type="text" className="form-control mb-1" placeholder="Last name" value={lastName}  onChange={ e => setLName(e.target.value)}></input>
                    {/* <input type="text" className="form-control" placeholder="License Number" value={setLicenseNumber}  onChange={ e => setLicenseNumber(e.target.value)}></input> */}
                    {/* <input type="text" className="form-control" placeholder="Date of Birth" value={setDateOfBirth} onChange={ e => setDateOfBirth(e.target.value)}></input> */}
                    <input type="text" className="form-control mb-1" placeholder="Mobile phone number" value={mobilePhone} onChange={ e => setMobilePhone(e.target.value)}></input>
                    <input type="email" className="form-control mb-1" placeholder="Email" value={email} onChange={ e => setEmail(e.target.value)}></input>
            </div>
        

            <div className="form-group mb-1">
                <label className="form-label">Property Information</label>
                    <input type="text" className="form-control mb-1 " placeholder="Address" value={address} onChange={e => setAddress(e.target.value)}></input>
                    <input type="text" className="form-control mb-1" placeholder="City" value={city} onChange={e => setCity(e.target.value)}></input>
                    <input type="text" className="form-control mb-1" placeholder="State" value={yourState} onChange={e => setYourState(e.target.value)}></input>
                    <input type="text" className="form-control mb-1" placeholder="zip code" value={zipCode} onChange={e => setZipCode(e.target.value)}></input>
                    <input type="text" className="form-control mb-1" placeholder="House square footage" value={squareFootage} onChange={e => setSquareFootage(e.target.value)}></input>
            </div>

            <div className="form-group mb-1">
                <label className="form-label">Account Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    );

    return (
        <>
        <div className="container-fluid bg-secondary h1 p-5 text-center"> 
        <h1>Register</h1>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3"> {registerForm()} </div>
            </div>
        </div>
        </>
    )
}

export default Register;