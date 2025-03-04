import React from 'react'
import "../../assets/css/style.css"
const FormThree = () => {

    return (
        <div className='bg-color'>
            <div className="container border-0">
                <div className="card bg-white mt-3 m-auto shadow card-width">
                    <div className="card-header bg-color-client">
                        <p className="fs-1 fw-bold text-center text-white mb-0">Client Details</p>
                        <p className="text-white text-center ">
                            Enter the detailes of all incoming client.
                        </p>
                    </div>
                    <div className="card-body px-3">
                        <div className="row py-4">
                            <div className="col-md-4">
                                <label htmlFor="txt_name" className="fs-5 text-secondary fw-bold">
                                    Client Name <sup className="text-danger fw-bold">*</sup>
                                </label>
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    id="txt_name"
                                    defaultValue=""
                                    name="txt_name"
                                    className="border-top-0 border-end-0 border-start-0 w-100"
                                    oninput="handle_txt_name(this.value)"
                                />
                                <span style={{ display: "none", marginTop: 10 }} id="txt_name_err" />
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-md-4">
                                <label htmlFor="txt_company" className="fs-5 text-secondary fw-bold">
                                    Company <sup className="text-danger fw-bold">*</sup>
                                </label>
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    id="txt_company"
                                    defaultValue=""
                                    name="txt_company"
                                    className="border-top-0 border-end-0 border-start-0 w-100"
                                    oninput="handle_txt_company(this.value)"
                                />
                                <span style={{ display: "none" }} id="txt_company_err" />
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-md-4">
                                <label htmlFor="txt_title" className="fs-5 text-secondary fw-bold">
                                    Title
                                </label>
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    id="txt_title"
                                    defaultValue=""
                                    name="txt_title"
                                    className="border-top-0 border-end-0 border-start-0 w-100"
                                    oninput="handle_txt_title(this.value)"
                                />
                                <span style={{ display: "none" }} id="txt_title_err" />
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-md-4">
                                <label
                                    htmlFor="dd_department"
                                    className="fs-5 text-secondary fw-bold"
                                    id="dd_department"
                                >
                                    Department <sup className="text-danger fw-bold">*</sup>
                                </label>
                            </div>
                            <div className="col-md-8">
                                <select
                                    id="dd_department"
                                    name="dd_department"
                                    className="form-select border-top-0 border-end-0 border-start-0 rounded-0 shadow-0 shadow-none border-dark w-100"
                                    oninput="handle_dd_department(this.value)"
                                >
                                    <option className="text-success" value="">
                                        --Select--
                                    </option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                                <span style={{ display: "none" }} id="dd_department_err" />
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-md-4">
                                <label
                                    className="fs-5 text-secondary fw-bold"
                                    htmlFor="rad_email"
                                    id="rad_email"
                                >
                                    Preferred contact method{" "}
                                    <sup className="text-danger fw-bold">*</sup>
                                </label>
                                {/* <span style="display: none;" id="rad_email_err"></span> */}
                            </div>
                            <div className="col-md-8 d-flex gap-4">
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input fs-5"
                                        id="rad_email"
                                        name="optradio"
                                        defaultValue="option1"
                                    />
                                    <label
                                        className="form-check-label fs-5 text-success"
                                        htmlFor="rad_email"
                                    >
                                        Email
                                    </label>
                                    <span style={{ display: "none" }} id="rad_email_err" />
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input fs-5"
                                        id="rad_phone"
                                        name="optradio"
                                        defaultValue="option2"
                                    />
                                    <label
                                        className="form-check-label fs-5 text-success"
                                        htmlFor="rad_phone"
                                    >
                                        Phone
                                    </label>
                                    {/* <span style="display: none;" id="rad_phone_err"></span> */}
                                </div>
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-md-4">
                                <label className="fs-5 text-secondary fw-bold">
                                    Company Address <sup className="text-danger fw-bold">*</sup>
                                </label>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input
                                            type="text"
                                            id="txt_str_address"
                                            name="txt_str_address"
                                            defaultValue=""
                                            className="border-top-0 border-end-0 border-start-0 w-100"
                                            oninput="handle_txt_str_address(this.value)"
                                        />
                                        <label
                                            className="fw-bold text-secondary"
                                            htmlFor="txt_str_address"
                                        >
                                            Street Address
                                        </label>
                                        <span style={{ display: "none" }} id="txt_str_address_err" />
                                    </div>
                                    <div className="col-md-12 py-4">
                                        <input
                                            type="text"
                                            id="txt_address_ln2"
                                            name="txt_address_ln2"
                                            defaultValue=""
                                            className="border-top-0 border-end-0 border-start-0 w-100"
                                            oninput="handle_txt_address_ln2(this.value)"
                                        />
                                        <label
                                            className="fw-bold text-secondary"
                                            htmlFor="txt_address_ln2"
                                        >
                                            Address Line 2
                                        </label>
                                        <span style={{ display: "none" }} id="txt_address_ln2_err" />
                                    </div>
                                    <div className="col-md-6 py-4">
                                        <input
                                            type="text"
                                            id="txt_city"
                                            name="txt_city"
                                            defaultValue=""
                                            className="border-top-0 border-end-0 border-start-0 w-100"
                                            oninput="handle_txt_city(this.value)"
                                        />
                                        <label className="fw-bold text-secondary" htmlFor="txt_city">
                                            City
                                        </label>
                                        <span style={{ display: "none" }} id="txt_city_err" />
                                    </div>
                                    <div className="col-md-6 py-4">
                                        <input
                                            type="text"
                                            id="txt_state"
                                            name="txt_state"
                                            defaultValue=""
                                            className="border-top-0 border-end-0 border-start-0 w-100"
                                            oninput="handle_txt_state(this.value)"
                                        />
                                        <label className="fw-bold text-secondary" htmlFor="txt_state">
                                            State/Region/Province
                                        </label>
                                        <span style={{ display: "none" }} id="txt_state_err" />
                                    </div>
                                    <div className="col-md-6 py-4">
                                        <input
                                            type="text"
                                            id="txt_zip"
                                            name=""
                                            defaultValue=""
                                            className="border-top-0 border-end-0 border-start-0 w-100"
                                            oninput="handle_txt_zip(this.value)"
                                        />
                                        <label className="fw-bold text-secondary" htmlFor="txt_zip">
                                            Postal/Zip Code
                                        </label>
                                        <span style={{ display: "none" }} id="txt_zip_err" />
                                    </div>
                                    <div className="col-md-6 py-3">
                                        <select
                                            className="form-select border-top-0 border-end-0 border-start-0 rounded-0 shadow-0 shadow-none border-dark w-100"
                                            id="txt_country"
                                            oninput="handle_txt_country(this.value)"
                                        >
                                            <option className="selected" value="">
                                                --Select--
                                            </option>
                                            <option>India</option>
                                            <option>USA</option>
                                            <option>Nepal</option>
                                        </select>
                                        <span style={{ display: "none" }} id="txt_country_err" />
                                        <label
                                            className="fw-bold text-secondary"
                                            htmlFor="txt_country"
                                            id="txt_country"
                                        >
                                            State/Region/Province
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-md-4">
                                <label className="fs-5 text-secondary fw-bold" htmlFor="txt_web">
                                    Company Website <sup className="text-danger fw-bold">*</sup>
                                </label>
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    id="txt_web"
                                    name="txt_web"
                                    defaultValue=""
                                    className="border-top-0 border-end-0 border-start-0 w-100"
                                    oninput="handle_txt_web(this.value)"
                                />
                                <span style={{ display: "none" }} id="txt_web_err" />
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-md-4">
                                <label className="fs-5 text-secondary fw-bold" htmlFor="txt_logo">
                                    Company Logo <sup className="text-danger fw-bold">*</sup>
                                </label>
                            </div>
                            <div className="col-md-8">
                                <input
                                    className="form-control form-control-lg py-5 shadow-none border-dashed"
                                    id="txt_logo"
                                    type="file"
                                    oninput="handle_txt_logo(this.value)"
                                />
                                <span style={{ display: "none" }} id="txt_logo_err" />
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-md-4">
                                <label className="fs-5 text-secondary fw-bold" htmlFor="txt_working">
                                    Working Hours <sup className="text-danger fw-bold">*</sup>
                                </label>
                            </div>
                            <div className="col-md-8">
                                <input
                                    id="txt_working"
                                    name="txt_working"
                                    defaultValue=""
                                    type="text"
                                    className="border-top-0 border-end-0 border-start-0 w-100"
                                    oninput="handle_txt_working(this.value)"
                                />
                                <span style={{ display: "none" }} id="txt_working_err" />
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-md-4">
                                <label
                                    className="fs-5 text-secondary fw-bold"
                                    htmlFor="txt_working_days"
                                >
                                    Working Days <sup className="text-danger fw-bold">*</sup>
                                </label>
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    id="txt_working_days"
                                    name="txt_working_days"
                                    defaultValue=""
                                    className="border-top-0 border-end-0 border-start-0 w-100"
                                    oninput="handle_txt_working_days(this.value)"
                                />
                                <span style={{ display: "none" }} id="txt_working_days_err" />
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-md-4">
                                <label className="fs-5 text-secondary fw-bold" htmlFor="txt_billing">
                                    Billing Cycle <sup className="text-danger fw-bold">*</sup>
                                </label>
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    id="txt_billing"
                                    name="txt_billing"
                                    defaultValue=""
                                    className="border-top-0 border-end-0 border-start-0 w-100"
                                    oninput="handle_txt_billing(this.value)"
                                />
                                <label className="fw-bold text-secondary" htmlFor="txt_billing">
                                    DD-MM-YYYY
                                </label>
                                <span style={{ display: "none" }} id="txt_billing_err" />
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-md-4">
                                <label
                                    className="fs-5 text-secondary fw-bold"
                                    htmlFor="txt_area_info"
                                >
                                    Additional Information
                                </label>
                            </div>
                            <div className="col-md-8">
                                <textarea
                                    name="txt_area_info"
                                    id="txt_area_info"
                                    className="border-top-0 border-end-0 border-start-0 w-100"
                                    oninput="handle_txt_area_info(this.value)"
                                    defaultValue={""}
                                />
                                <span style={{ display: "none" }} id="txt_area_info_err" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-center">
                                <button
                                    className="py-2 px-5 border border-3 bg-success text-white rounded-pill"
                                    id="submit"
                                    onclick="saveData(event)"
                                    // onClick={onValidate}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                        {/* {fruit} */}
                        {/* <button onClick={onChangeFruit} className="btn btn-primary">
                            Change Fruit
                        </button> */}
                    </div>
                </div>
            </div>

        </div>    
    );
}
export default FormThree;
