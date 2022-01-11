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
    const [ state, State ] = useState('');
    const [ zipCode, setZipCode ] = useState('');
    const [ squareFootage, setSquareFootage ] = useState('');
    const [ password, setPassword ] = useState('');

    const  handleSubmit = () =>{
        alert('send user info to backend')
    }
    const registerForm = () =>  (
        <form onSubmit={handleSubmit} className="mt-3">
            <div className="form-group mb-3">
                <label className="form-label">Homeowner Information</label>
                    <input type="text" className="form-control" placeholder="First name" value={setFName} onChange={ e => setFName(e.target.value)}></input>
                    {/* <input type="text" className="form-control" placeholder="Middle name" value={setMName} onChange={ e => setMName(e.target.value)}></input> */}
                    <input type="text" className="form-control" placeholder="Last name" value={setLName}  onChange={ e => setLName(e.target.value)}></input>
                    {/* <input type="text" className="form-control" placeholder="License Number" value={setLicenseNumber}  onChange={ e => setLicenseNumber(e.target.value)}></input> */}
                    {/* <input type="text" className="form-control" placeholder="Date of Birth" value={setDateOfBirth} onChange={ e => setDateOfBirth(e.target.value)}></input> */}
                    <input type="text" className="form-control" placeholder="Mobile phone number" value={setMobilePhone} onChange={ e => setMobilePhone(e.target.value)}></input>
                    <input type="text" className="form-control" placeholder="Email" value={setEmail} onChange={ e => setEmail(e.target.value)}></input>
            </div>
        

            <div className="form-group mb-1">
                <label className="form-label">Property Information</label>
                    <input type="text" className="form-control" placeholder="Address" value={setAddress} onChange={e => setAddress(e.target.value)}></input>
                    <input type="text" className="form-control" placeholder="City" value={setCity} onChange={e => setCity(e.target.value)}></input>
                    <input type="text" className="form-control" placeholder="zip code" value={setZipCode} onChange={e => setZipCode(e.target.value)}></input>
                    <input type="text" className="form-control" placeholder="House square footage" value={setSquareFootage} onChange={e => setSquareFootage(e.target.value)}></input>
            </div>

            <div className="form-group mb-1">
                <label className="form-label">Account Password</label>
                    <input type="text" className="form-control" placeholder="Address" value={setPassword} onChange={e => setPassword(e.target.value)}></input>
                    <input type="text" className="form-control" placeholder="Address" value={setPassword} onChange={e => setPassword(e.target.value)}></input>  
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