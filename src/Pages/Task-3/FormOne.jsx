import React, {useState} from 'react';
import '../../assets/css/style.css'
const FormOne = () => {
    const [txt_fname, set_txt_fname] = useState('');
    const [txt_fname_err, set_txt_fname_err] = useState('');
    const [txt_lname, set_txt_lname] = useState('');
    const [txt_lname_err, set_txt_lname_err] = useState('');
    const [txt_email, set_txt_email] = useState('');
    const [txt_email_err, set_txt_email_err] = useState('');
    const [txt_mob, set_txt_mob] = useState('');
    const [txt_mob_err, set_txt_mob_err] = useState('');
    const [txt_select, set_txt_select] = useState('');
    const [txt_select_err, set_txt_select_err] = useState('');
    const [txt_slot, set_txt_slot] = useState('');
    const [txt_slot_err, set_txt_slot_err] = useState('');

const submitHandle = () => {
    console.log(txt_fname);
    if(!(txt_fname)){
        set_txt_fname_err('Please enter first name');
    }
    else{
        set_txt_fname_err('')
    }
    if(!(txt_lname)){
        set_txt_lname_err('Please enter last name');
    }
    else{
        set_txt_lname_err('')
    }
    if(!(txt_email)){
        set_txt_email_err('Please enter email');
    }
    else{
        set_txt_email_err('')
    }
    if(!(txt_mob)){
        set_txt_mob_err('Please enter mobile number');
    }
    else{
        set_txt_mob_err('')
    }
    if(!(txt_select)){
        set_txt_select_err('Please select topic');
    }
    else{
        set_txt_select_err('')
    }
    if(!(txt_slot)){
        set_txt_slot_err('Please select slot');
    }
    else{
        set_txt_slot_err('')
    }
    
}

    return (
        <div>
            <div className="container mt-2">
                <h2 className='fw-bold text-center text-decoration-underline'>FORM-1</h2>
                <div className="card-width m-auto  p-2 text-dark bg-opacity-10">
                    <div className="shadow-lg py-3 px-5 rounded">
                        <p className="h1 text-center fw-bold mb-0">Event Registration</p>
                        <p className="text-center text-dark">
                            Register with use to get more details.
                        </p>
                        <form action="#" className="mt-md-4 mt-3 ">
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="txt_fname" className="fs-5 mb-2">
                                        Name
                                    </label>
                                </div>
                                <div className="col-lg-6">
                                    <input
                                        type='text'
                                        id='txt_fname'
                                        name='txt_fname'
                                        defaultValue={txt_fname}
                                        onChange={(e) => set_txt_fname(e.target.value)}
                                        className="py-1 rounded input-max-width input-width input-width-1050"
                                        placeholder="Enter first name"
                                    />
                                    <div style={{color: 'red'}}>
                                    {txt_fname_err}
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-3 mt-lg-0">
                                    <input
                                        type="text"
                                        id="txt_lname"
                                        name="txt_lname"
                                        defaultValue={txt_lname}
                                        onChange={(e) => set_txt_lname(e.target.value)}
                                        className="py-1 rounded  input-max-width input-width input-width-1050"
                                        placeholder="Enter last name"
                                    />
                                    <div style={{color: 'red'}}>
                                    {txt_lname_err}
                                    </div>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <label htmlFor="txt_email" className="fs-5 mb-2">
                                        Email
                                    </label>
                                </div>
                                <div className="col-md-12">
                                    <input
                                        type="email"
                                        id="txt_email"
                                        name="txt_email"
                                        defaultValue={txt_email}
                                        onChange={(e) => set_txt_email(e.target.value)}
                                        className="py-1 rounded  input-width input-width-1050 input-max-width"
                                        placeholder="example@gmail.com"
                                    />
                                    <div style={{color: 'red'}}>
                                    {txt_email_err}
                                    </div>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <label htmlFor="txt_mob" className="fs-5 mb-2">
                                        Phone
                                    </label>
                                </div>
                                <div className="col-md-12">
                                    <input
                                        type="text"
                                        id="txt_mob"
                                        name="txt_mob"
                                        defaultValue={txt_mob}
                                        onChange={(e) => set_txt_mob(e.target.value)}
                                        className="py-1 rounded   input-width input-width-1050 input-max-width"
                                        placeholder="+91 0123456789"
                                    />
                                     <div style={{color: 'red'}}>
                                    {txt_mob_err}
                                    </div>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <label htmlFor="txt_select" className="fs-5 mb-2 ">
                                        {" "}
                                        select topic
                                    </label>
                                </div>
                                <div className="col-md-12">
                                    <select
                                        id="txt_select"
                                        className="py-1 rounded  input-width input-width-1050 input-max-width"
                                        name='txt_select'
                                        onChange={(e) => set_txt_select(e.target.value)}
                                        defaultValue={txt_select}
                                    >
                                        <option value="">-Select topic-</option>
                                        <option value="select">CSS</option>
                                        <option value="select">HTML</option>
                                        <option value="select">node</option>
                                        <option value="select">javascript</option>
                                    </select>
                                    <div style={{color: 'red'}}>
                                    {txt_select_err}
                                    </div>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <label htmlFor="txt_slot" className="fs-5 mb-2">
                                        Preferred slot
                                    </label>
                                </div>
                                <div className="col-md-12">
                                    <select
                                        id="txt_slot"
                                        name='txt_slot'
                                        defaultValue={txt_slot}
                                        onChange={(e) => set_txt_slot(e.target.value)}
                                        className="py-1 rounded   input-width input-width-1050 input-max-width"
                                    >
                                        <option value="">-Select Preferred slot-</option>
                                        <option value="Preferred_slot">9:00 AM to 12:00 PM</option>
                                        <option value="Preferred_slot">12:00 PM to 3:00 PM</option>
                                        <option value="Preferred_slot">3:00 PMto 6:00 PM</option>
                                        <option value="Preferred_slot">6:00 PM to 9:00 PM</option>
                                    </select>
                                    <div style={{color: 'red'}}>
                                    {txt_slot_err}
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-12 text-center">
                                        <button
                                            className='py-2 px-5 rounded-pill'
                                            id='submit'
                                            onClick= {(e) => {e.preventDefault(); submitHandle();}}
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default FormOne;