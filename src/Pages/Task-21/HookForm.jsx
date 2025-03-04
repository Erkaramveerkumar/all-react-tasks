import axios from "axios";
import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function HookForm() {
    const [isLoading, setLoading] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const onSubmit = async(e) =>{
        e.countryId = '101';
        e.stateId = '4022';
        e.gender = "Male"
console.log(e);
        try {
            setLoading(true)
            const accessToken = localStorage.getItem('accessToken')
            const response = await axios.put('https://startupify.co.in:5100/api/v1/profile', e, {
                'headers':{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${accessToken}`
                }
            })

            if(response){
                alert('Profile updated successfully !!!')
            }
        } catch (error) {
            alert(error?.response?.data?.message)
        } finally{
            setLoading(false)
        }

    }

    console.log(watch("exampleRequired")); // watch input value by passing the name of it

    return (
        <Container>
            <Card>
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="first name" className="form-control my-4" {...register("firstName", { required: 'First name is required' })} />
                    {errors.firstName && <span className="text-danger">
                        {errors.firstName.message}
                    </span>}
                    <input placeholder="last name" className="form-control my-4" {...register("lastName", { required: 'last name is required' })} />
                    {errors.lastName && <span className="text-danger">
                        {errors.lastName.message}
                    </span>}
                    <input placeholder="company name" className="form-control my-4" {...register("companyName", { required: 'company name is required' })} />
                    {errors.companyName && <span className="text-danger">
                        {errors.companyName.message}
                    </span>}
                    <input placeholder="phone Code" className="form-control my-4" {...register("phoneCode", { required: 'Phone code is required' })} />
                    {errors.phoneCode && <span className="text-danger">
                        {errors.phoneCode.message}
                    </span>}
                    <input placeholder="phone" className="form-control my-4" {...register("phone", { required: 'phone is required' })} />
                    {errors.phone && <span className="text-danger">
                        {errors.phone.message}
                    </span>}
                    <input placeholder="city" className="form-control my-4" {...register("city", { required: 'city is required' })} />
                    {errors.city && <span className="text-danger">
                        {errors.city.message}
                    </span>}
                    <input placeholder="addressLine1" className="form-control my-4" {...register("addressLine1", { required: 'addressLine1 is required' })} />
                    {errors.addressLine1 && <span className="text-danger">
                        {errors.addressLine1.message}
                    </span>}
                    <input placeholder="addressLine2" className="form-control my-4" {...register("addressLine2")} />
                    {/* {errors.city && <span className="text-danger">
                        {errors.city.message}
                    </span>} */}

                    <input placeholder="email" className="form-control  my-4" {...register("email", {
                        required: 'Email is required',
                        validate: {
                            matchPattern: (v) =>
                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email address must be a valid address",
                        }
                    })} />
                    {errors.email && <span className="text-danger">{errors.email.message}</span>}

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </Card>
        </Container>


    );
}