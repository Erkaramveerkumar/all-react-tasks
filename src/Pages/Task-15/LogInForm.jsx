import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import tickImg from '../../assets/Images/tick-img.png';

function LogInForm() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [pageType, setPageType] = useState('Login')
    const [accessToken, setAccessToken] = useState('');
    // const [refreshToken, setRefreshToken] = useState('');
    const [otp, setOtp] = useState('');
    const [otpErr, setOtpErr] = useState('');
    const onLogin = async (e) => {
        e.preventDefault();
        const body = {
            username,
            password,
            "deviceId": "deviceId"
        }
        try {
            const response = await axios.post('https://startupify.co.in:5100/api/v1/login', body)
            if (response.status === 200) {
                setAccessToken(response.accessToken);
                
                // console.log(response);
            }
            setPageType('otp')
        } catch (error) {
            alert(error?.response?.message || 'Login Failed');
            console.log(error?.response?.message);
        }
    };

    // OTP Verification
    const onOtpSubmit = async (e) => {
        e.preventDefault();
        const otpData = { otp: otp, token: accessToken, "deviceId": "deviceId" };

        try {
            const response = await axios.post('https://startupify.co.in:5100/api/v1/verify-login', otpData);
            if (response.status === 200 || response.status === 201) {
                alert('OTP Verified Successfully!');
                setPageType('success');
                // console.log(response.data);
                // console.log(response);
            }

        } catch (err) {
            setOtpErr('Invalid OTP, please try again.');
            console.error(err);
        }
    };


    return (
        <>
            <div className="container vh-100">
                {pageType === 'Login' && (
                    <div className="card m-auto mt-5" style={{ width: "400px" }}>
                        <div className="card-body">
                            <Form onSubmit={onLogin}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}

                                    />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}

                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
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
        </>
    );
}

export default LogInForm;