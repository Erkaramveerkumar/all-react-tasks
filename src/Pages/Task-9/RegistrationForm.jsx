import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import tickImg from '../../assets/Images/tick-img.png';

function RegistrationForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneCode, setPhoneCode] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [otp, setOtp] = useState('');
    const [otpErr, setOtpErr] = useState('');
    const [pageType, setPageType] = useState('register');
    const [isLoading, setLoading] = useState(false);
    console.log(isLoading)
    // Registration Submission
    const onRegister = async (e) => {
        e.preventDefault();
        const body = {
            firstName,
            lastName,
            email,
            phoneCode,
            phone,
            password,
            userType: 'Partner',
            companyName: 'Appworks Technology',
        };

        try {
            setLoading(true);
            const response = await axios.post('https://startupify.co.in:5100/api/v1/register', body);
            if (response.status === 200) {
                console.log(response.data.data.token)
                setToken(response.data.data.token);
            }
            setPageType('otp');
        } catch (error) {
            alert(error?.response?.data?.message || 'Registration failed');
            console.error(error?.response?.data?.message);
        } finally {
            setLoading(false)
        }
    };

    // OTP Verification
    const onOtpSubmit = async (e) => {
        e.preventDefault();
        const otpData = { otp: otp, token: token, "deviceId": "deviceId" };

        try {
            const response = await axios.post('https://startupify.co.in:5100/api/v1/verify-register', otpData);
            if (response.status === 200 || response.status === 201) {
                alert('OTP Verified Successfully!');
                setPageType('success');
                console.log(response.data);
            }

        } catch (err) {
            setOtpErr('Invalid OTP, please try again.');
            console.error(err);
        }
    };

    return (
        <div style={{height : "600px"}}>
            {/* Registration Page */}
            {pageType === 'register' && (
                <div className="card mt-2 m-auto mt-5" style={{ maxWidth: '600px' }}>
                    <div className="card-body">
                        <h3 className="mb-4 text-center">Registration</h3>
                        <Form onSubmit={onRegister}>
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="mb-3">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </Form.Group>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Phone Code</Form.Label>
                                        <Form.Control
                                            value={phoneCode}
                                            onChange={(e) => setPhoneCode(e.target.value)}
                                            type="text"
                                            placeholder="Phone Code"
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            type="text"
                                            placeholder="Phone Number"
                                        />
                                    </Form.Group>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            placeholder="Enter email"
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </Form.Group>
                                </div>
                            </div>

                            <div className='text-center'>
                            {
                                isLoading ?
                                    <Button variant="primary" disabled={isLoading} type="submit">
                                        Registering...
                                    </Button> :
                                    <Button variant="primary" type="submit" >
                                        Register
                                    </Button>
                            }
                            </div>

                        </Form>
                    </div>
                </div>
            )}

            {/* OTP Verification Page */}

            {pageType === 'otp' && (
                <div className="card mt-2 m-auto" style={{ maxWidth: '400px' }}>
                    <div className="card-body text-center">
                        <h3 className="mb-4">Verify OTP</h3>
                        <Form onSubmit={onOtpSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter OTP</Form.Label>
                                <Form.Control
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    type="text"
                                    maxLength={6}
                                    placeholder="Enter 6-digit OTP"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Verify OTP
                            </Button>
                        </Form>
                    </div>
                </div>
            )}

            {/* Success Page */}
            {pageType === 'success' && (
                <div className="card mt-5 w-50 m-auto registerSuccessfull">
                    <div className="card-body text-center">
                        <img src={tickImg} alt="tick-img" style={{ width: '150px' }} />
                        <p className="h2 fw-bold">Thank You!</p>
                        <p className="h2 text-success fw-bold">Registration Successful</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RegistrationForm;
