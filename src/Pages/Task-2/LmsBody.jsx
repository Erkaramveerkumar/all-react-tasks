import React, { useState } from 'react'
import '../../assets/css/style.css'
import girlImg from '../../assets/Images/img-student.png'
import boyImg from '../../assets/Images/boy_img.png'
import userlogo from '../../assets/Images/profile-user.png'

const LmsBody = (props) => {

    const [heroImg, setheroImg] = useState(girlImg)
    const changeGirlImg = () => {
        setheroImg(girlImg);
    }
    const changeBoyImg = () => {
        setheroImg(boyImg);
    }

    return (
        <div>
            <>
                <section className="py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                <div className="hero-text">
                                    <h5 className="text-primary">{props.data.name_1}</h5>
                                    <h1>
                                        {props.data.name_2} <span className="text-primary">{props.data.name_3}</span> {props.data.name_4}
                                    </h1>
                                    <p className="text-muted">
                                        {props.data.name_5}
                                    </p>
                                    <button className={`btn me-3 ${heroImg == girlImg ? 'btn-primary' :'btn-outline-primary'} `}  onClick={changeGirlImg}>{props.data.name_6}</button>
                                    <button className={`btn me-3 ${heroImg == boyImg ? 'btn-primary' :'btn-outline-primary'} `} onClick={changeBoyImg}>{props.data.name_7}</button>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 text-lg-end text-center ">
                                <img src={heroImg}
                                    alt="Hero Image"
                                    className="img-fluid hero-img-width"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="feature-icon mb-3">
                                            <img src={userlogo} alt="" className='img-fluid' style={{ width: '80px' }} />
                                        </div>
                                        <p>{props.data.title_1}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="feature-icon mb-3">
                                            <img src={userlogo} alt="" className='img-fluid' style={{ width: '80px' }} />
                                        </div>
                                        <p>{props.data.title_2}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="feature-icon mb-3">
                                            <img src={userlogo} alt="" className='img-fluid' style={{ width: '80px' }} />
                                        </div>
                                        <p>{props.data.title_3}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="feature-icon mb-3">
                                            <img src={userlogo} alt="" className='img-fluid' style={{ width: '80px' }} />
                                        </div>
                                        <p>{props.data.title_4}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </div>
    )
}
export default LmsBody;