import React, { useState } from 'react';

const FormTwo = () => {
    const [txt_fname, set_txt_fname] = useState('');
    const [txt_fname_err, set_txt_fname_err] = useState('');
    const [txt_lname, set_txt_lname] = useState('');
    const [txt_lname_err, set_txt_lname_err] = useState('');
    const [txt_company, set_txt_company] = useState('');
    const [txt_company_err, set_txt_company_err] = useState('');

    const submitHandle = () => {
        if (txt_fname === '') {
            set_txt_fname_err('Please enter first name');
        } else {
            set_txt_fname_err('');
        }
        if (txt_lname === '') {
            set_txt_lname_err('Please enter last name');
        } else {
            set_txt_lname_err('');
        }
        if (txt_company === '') {
            set_txt_company_err('Please enter company name');
        } else {
            set_txt_company_err('');
        }
    }
    return (
        <div>
            <h2 className='fw-bold text-center text-decoration-underline mt-3'>FORM-2</h2>
            <div className="d-flex justify-content-center">
                <div className="bg-opacity-50 bg-dark shadow-lg rounded-3 mt-3">
                    <div className="bg-secondary rounded-top-3">
                        <p className="h4 fw-bold text-white py-3 text-center tex-nowrap">
                            Registration Form
                        </p>
                    </div>
                    <div className="card-body py-2 px-5 ">
                        <form action="#">
                            <div className="row">
                                <div className="col-sm-3">
                                    <label
                                        htmlFor="txt_name"
                                        className="fw-bold text-white h6 tex-nowrap"
                                    >
                                        Full Name
                                    </label>
                                </div>
                                <div className="col-sm-9 d-flex gap-5 px-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control "
                                                id="txt_fname"
                                                defaultValue={txt_fname}
                                                onChange={(e) => set_txt_fname(e.target.value)}
                                                name="txt_fname"
                                                placeholder="Enter first name"
                                            />
                                            <div style={{ color: 'red' }}>
                                                {txt_fname_err}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className=" form-control mt-3 mt-md-0"
                                                id="txt_lname"
                                                name='txt_lname'
                                                defaultValue={txt_lname}
                                                onChange={(e) => set_txt_lname(e.target.value)}
                                                placeholder="Enter last name"
                                            />
                                            <div style={{ color: 'red' }}>
                                                {txt_lname_err}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-md-5 mt-3">
                                <div className="col-sm-3">
                                    <label
                                        htmlFor="txt_company"
                                        className="fw-bold text-white h6 tex-nowrap"
                                    >
                                        Company
                                    </label>
                                </div>
                                <div className="col-sm-9 px-3">
                                    <input
                                        type="text"
                                        id="txt_company"
                                        defaultValue={txt_company}
                                        name="txt_company"
                                        onChange={(e) => set_txt_company(e.target.value)}
                                        className=" form-control"
                                    />
                                    <div style={{ color: 'red' }}>
                                        {txt_company_err}
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-md-5 mt-3">
                                <div className="col-sm-3">
                                    <label
                                        htmlFor="txt_email"
                                        className="fw-bold text-white h6 tex-nowrap"
                                    >
                                        Email
                                    </label>
                                </div>
                                <div className="col-sm-9 px-3">
                                    <input
                                        type="email"
                                        id="txt_email"
                                        defaultValue=""
                                        name="txt_email"
                                        className="form-control"
                                        placeholder="example@gmail.com"
                                    />
                                    <span
                                        style={{ display: "none" }}
                                        id="txt_email_err"
                                        oninput="handleFname()"
                                    />
                                </div>
                            </div>
                            <div className="row mt-md-5 mt-3">
                                <div className="col-sm-3">
                                    <label
                                        htmlFor="txt_dd"
                                        className="fw-bold text-white h6 tex-nowrap"
                                    >
                                        Subject
                                    </label>
                                </div>
                                <div className="col-sm-9 px-3">
                                    <select className="form-select" id="txt_dd">
                                        <option value="">--Choose option--</option>
                                        <option>Computer</option>
                                        <option>Science</option>
                                        <option>Engineering</option>
                                    </select>
                                    <span style={{ display: "block" }} id="txt_dd_err" />
                                </div>
                            </div>
                            <div className="row mt-md-5 mt-3">
                                <div className="col-sm-3">
                                    <label
                                        htmlFor="txt_phone"
                                        className="fw-bold text-white h6 tex-nowrap"
                                    >
                                        Phone
                                    </label>
                                </div>
                                <div className="col-sm-9 d-flex gap-5 px-3">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <input
                                                type="text"
                                                id="txt_phone"
                                                defaultValue=""
                                                name="txt_phone"
                                                className="form-control form-control "
                                                placeholder={+91}
                                            />
                                            <span
                                                style={{ display: "none" }}
                                                id="txt_phone_err"
                                                oninput="handleFname()"
                                            />
                                        </div>
                                        <div className="col-sm-8">
                                            <input
                                                type="text"
                                                id="txt_phone_num"
                                                defaultValue=""
                                                name="txt_phone_num"
                                                className="form-control form-control mt-3 mt-md-0"
                                                placeholder={123456789}
                                            />
                                            <span
                                                style={{ display: "none" }}
                                                id="txt_phone_num_err"
                                                oninput="handleFname()"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="fw-bold text-white h6 mt-4 tex-nowrap">
                                Are you beginner ?
                            </p>
                            <div className="d-flex gap-5 mt-3">
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input text-white"
                                        id="form_chk_rad"
                                        name="form_chk_rad1"
                                        defaultValue=""
                                    />
                                    <span
                                        style={{ display: "none" }}
                                        id="form_chk_rad_err"
                                        oninput="handleFname()"
                                    />
                                    <label
                                        className="form-check-label text-white"
                                        htmlFor="form_chk_rad"
                                    >
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input text-white"
                                        id="form_chk_rad1"
                                        name="form_chk_rad1"
                                        defaultValue=""
                                    />
                                    <label
                                        className="form-check-label text-white"
                                        htmlFor="form_chk_rad1"
                                    >
                                        No
                                    </label>
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="btn btn-info mt-4 px-5 "
                                    id="submit"
                                    onClick={(e) => { e.preventDefault(); submitHandle(); }}
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FormTwo;