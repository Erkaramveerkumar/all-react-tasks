import React, { useEffect, useState } from 'react'
import '../../assets/css/style.css'
import OTPInput from 'react-otp-input';
import tickImg from '../../assets/Images/tick-img.png'
import axios from 'axios';

const FormFour = () => {
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [confirmPassErr, setConfirmPassErr] = useState();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [firstName, set_firstName] = useState("");
    const [firstName_err, set_firstName_err] = useState();
    const [lastName, set_lastName] = useState("");
    const [lastName_err, set_lastName_err] = useState();
    const [phone, set_phone] = useState("");
    const [phone_err, set_phone_err] = useState();
    const [otp, setOtp] = useState('');
    const [otpErr, setOtpErr] = useState("")
    const [isErr, setIsErr] = useState(false);
    const [token, setToken] = useState('');
    const [pageType, setPageType] = useState('register');

    function checkEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
    function checkPhoneNumber(phone) {
        const patt = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
        return patt.test(phone);
    }

    function validateName(firstName) {
        const namePattern = /^[a-zA-Z]+([-'\s][a-zA-Z]+)*$/;
        const isValid = namePattern.test(firstName);
        return isValid;
    }
    function validateName(lastName) {
        const namePattern = /^[a-zA-Z]+([-'\s][a-zA-Z]+)*$/;
        const isValid = namePattern.test(lastName);
        return isValid;
    }

    const onSubmit = async (e) => {
        let isErrCheck = false;
        e.preventDefault()
        if (email === '') {
            setEmailError('Email is requred !')
            isErrCheck = true;
        } else if (checkEmail(email) === false) {
            setEmailError('Valid email is requred !')
            isErrCheck = true;
        } else {
            setEmailError(false)
        }
        if (password === '' || confirmPass === '') {
            setConfirmPassErr('Password is required !')
            isErrCheck = true;

        } else if (password !== confirmPass) {
            setConfirmPassErr('Password and Confirm password is not same !')
            isErrCheck = true;
        } else {
            setConfirmPassErr(false)
        }
        if (firstName === '') {
            set_firstName_err('First name is required !')
            isErrCheck = true;
        }
        else if (validateName(firstName) === false) {
            set_firstName_err('please enter valid name !')
            isErrCheck = true;
        }
        else {
            set_firstName_err(false)
        }
        if (lastName === '') {
            set_lastName_err('Last name is required !')
            isErrCheck = true;
        }
        else if (validateName(lastName) === false) {
            set_lastName_err('please enter valid name !')
            isErrCheck = true;
        }
        else {
            set_lastName_err(false)
        }
        if (phone === '') {
            set_phone_err('Phone number is required !')
            isErrCheck = true;
        } else if (checkPhoneNumber(phone) === false) {
            set_phone_err('Please enter valid number !')
            isErrCheck = true;
        }
        else {
            set_phone_err(false)
        }
        // if (!isErrCheck) {
        //     // document.querySelector("div.myForm").style.display = "none";
        //     // document.querySelector("div.hidden").style.display = "block";
        // }
        if (pageType === 'register') {

        }
        setIsErr(false);

        e.preventDefault();
        const body = {
            firstName,
            lastName,
            email,
            // phoneCode,
            phone,
            password,
            "userType": "Partner",
            "companyName": "Appworks Technology",
        }
        try {
            const response = await axios.post('https://startupify.co.in:5100/api/v1/register', body)
            setToken(response.data.token)
            setToken("eyJ1c2VyQ29kZSI6IkNUTjgyOTQ4MTQiLCJlbWFpbCI6ImthcmFtdmVlci5raXNoYW5AZ21haWwuY29tIiwib3RwRXhwaXJ5IjoiMjAyNS0wMS0yOFQxMzozNzozNi4wOTJaIn0=")
            setPageType('otp')

        } catch (error) {
            alert(error?.response?.data?.message)
            console.log(error?.response?.data?.message);
        }

    }
    const onChangePass = () => {
        if (password !== confirmPass) {
            setConfirmPassErr('Password and Confirm password is not same !')
        } else {
            setConfirmPassErr(false);
        }
    }
    useEffect(onChangePass, [confirmPass])


    // const onOtp = {
    //     otp,
    //     token

    // }

    const onVerifyOtp = () => {
        let isOtpErrCheck = false;
        if (otp === '') {
            setOtpErr('Please enter OTP!');
            isOtpErrCheck = true;
        } else if (otp !== '1234') {
            setOtpErr('Wrong OTP. Please enter a valid OTP!');
            isOtpErrCheck = true;
        } else {
            setOtpErr('');
        }
        if (!isOtpErrCheck) {
            // document.querySelector("div.hidden").style.display = "none";
            // document.querySelector("div.registerSuccessfull").style.display = "block";
        }
    };


    return (
        <>
            <div className="container d-flex align-items-center">
                <div className="card w-75 m-auto mt-auto myForm">
                    <div className="card-body">
                        <form className='mt-4 gy-5'>
                            <div className="row">
                                <div className="col-md-2">
                                    <label htmlFor="firstName" className='fw-bold  fs-4'>First Name :</label>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        id='firstName'
                                        value={firstName}
                                        onChange={(e) => { set_firstName(e.target.value); set_firstName_err(false) }}
                                        className="form-control"
                                        placeholder="First name"
                                        aria-label="First name"
                                    />
                                    {firstName_err && <span className='text-danger'>{firstName_err}</span>}
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="lastName" className='fw-bold  fs-4'>Last Name :</label>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => { set_lastName(e.target.value); set_lastName_err(false) }}
                                        id='lastName'
                                        className="form-control"
                                        placeholder="Last name"
                                        aria-label="Last name"
                                    />
                                    {lastName_err && <span className='text-danger'>{lastName_err}</span>}
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-2">
                                    <label htmlFor="phone" className='fw-bold  fs-4'>Phone :</label>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => { set_phone(e.target.value); set_phone_err(false) }}
                                        id='phone'
                                        className="form-control"
                                        placeholder="Enter your number"
                                        aria-label="phone"
                                    />
                                    {phone_err && <span className='text-danger'>{phone_err}</span>}
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="txt_email" className='fw-bold  fs-4'>Email :</label>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value); setEmailError(false) }}
                                        id='txt_email'
                                        className="form-control"
                                        placeholder="example@gmail.com"
                                        aria-label="email"
                                    />
                                    {emailError && <span className='text-danger'>{emailError}</span>}
                                </div>

                            </div>
                            <div className="row mt-5">
                                <div className="col-md-2">
                                    <label htmlFor="txt_password" className='fw-bold  fs-4'>Password :</label>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        id='txt_password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control"
                                        placeholder="password"
                                        aria-label="password"
                                    />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="txt_conf_pass" className='fw-bold  fs-4'>Confirm Pass :</label>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        id='txt_conf_pass'
                                        className="form-control"
                                        value={confirmPass}
                                        onChange={(e) => { setConfirmPass(e.target.value); setConfirmPassErr(false) }}
                                        placeholder="confirm password"
                                        aria-label="confirm password"
                                    />
                                    {confirmPassErr && <span className='text-danger'>{confirmPassErr}</span>}
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-12 text-center">
                                    <button type='submit' onClick={onSubmit} className='px-5 py-2'>Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* OTP Page */}

                <div className="card mt-5 w-50 m-auto hidden " style={{ display: "none" }}>
                    <div className="card-body text-center">
                        <OTPInput
                            value={otp}
                            id={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span></span>}
                            containerStyle='d-flex justify-content-evenly '
                            inputStyle={{ width: '40px', height: '40px' }}
                            renderInput={(props) => <input {...props} />}
                        />
                        <p className='mt-3'>
                            {otpErr && <span style={{ color: "red" }}>{otpErr}</span>}
                        </p>
                        <button className='btn btn-outline-primary px-5 py-2 ' onClick={onVerifyOtp}>Verify</button>
                    </div>
                </div>
                <div className="card mt-5 w-50 m-auto registerSuccessfull" style={{ display: "none" }}>
                    <div className="card-body text-center">
                        <img src={tickImg} alt="tick-img" style={{ width: "150px" }} />
                        <p className='h2 fw-bold'>Thank You !</p>
                        <p className='h2 text-success fw-bold'>Registration Successful</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormFour