"use client";
import { AppAlert } from "@/components";
import { Links, Services } from '@/constants';
import { clientSubscribeValidationSchema } from "@/validators/client";
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Footer, Input } from 'react-daisyui';
import { FaChevronRight } from 'react-icons/fa6';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const AppFooter = () => {

    interface Subscribe {
        email: string;
    }
    interface SubscribeResponse {
        exists?: boolean;
        subscribed?: boolean;
        status?: "error" | "success";
    }

    const initialValues: Subscribe = {
        email: ""
    }

    const [data, setData] = useState<SubscribeResponse>()

    const onSubmit = async (values: Subscribe) => {
        try {
            const response = await axios.post('/api/users/subscribe/', values)
            console.log(response)

            setData({ ...response.data, status: "success" })
        } catch {
            setData({ status: "error" })
        }

    }



    const { handleChange, handleSubmit, errors: FormikError, isSubmitting } = useFormik<Subscribe>({
        initialValues,
        onSubmit,
        validationSchema: clientSubscribeValidationSchema,
        validateOnChange: false

    })


    return (

        <Footer className='footer grid grid-flow-row-dense md:px-5 max-md:px-1 w-full py-5  '>

            <div className='grid md:grid-flow-col-dense max-md:grid-flow-row-dense w-full max-md:space-y-3  py-5 px-5'>
                <div className="flex-1 space-y-3">
                    <span className="logo-font text-3xl font-semibold ">Gango ReChishona</span>
                    <div className='cursor-pointer'>
                        <span className='font-semibold'>
                            Location: <span className='font-thin'>832 Sandon, Haydon Park, Harare</span>
                        </span>


                    </div>

                    <div className='cursor-pointer'>
                        <span className='font-semibold'>
                            Call: <span className='font-thin'>+263 71 252 4914</span>
                        </span>


                    </div>
                    <div className='cursor-pointer'>
                        <span className='font-semibold'>
                            Email:       <span className='font-thin'>gangorechishona@gmail.com</span>
                        </span>


                    </div>
                </div>
                <div className="flex-1 space-y-2">
                    <span className="text-base font-semibold">Useful Links</span>
                    <ul className="space-y-3 cursor-pointer grid grid-flow-row-dense">
                        {Links.map((link, index) => (
                            <Link key={index} href={link.href} className="space-x-2 hover:font-semibold" >
                                <FaChevronRight className='inline-block mr-2' />{link.title}
                            </Link>
                        ))}
                        <li className='hover:font-semibold'><FaChevronRight className='inline-block mr-2' />Terms of service</li>
                        <li className='hover:font-semibold'><FaChevronRight className='inline-block mr-2' />Privacy policy</li>
                    </ul>
                </div>
                <div className="flex-1 space-y-2">
                    <span className="text-base font-semibold">Our Services</span>
                    <ul className="space-y-3 cursor-pointer">
                        {Services.map((service, index) => (
                            <li key={index} className="space-x-2 hover:font-semibold" >
                                <FaChevronRight className='inline-block mr-2' />{service}
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="flex-1">
                    <span className="text-base font-semibold">Join Our Newsletter</span>
                    <p className='mt-5'>Receive latest news and updates from our company!!</p>
                    <div className='md:flex max-md:flex-1 md:space-x-2 mt-7 max-md:space-y-3 '>
                        <div className="flex-1 space-y-1">
                            <Input
                                type="email"
                                className="input input-bordered input-md form-control text-sm w-full focus:outline-none focus:border-primary  max-md:w-full"
                                onChange={handleChange("email")}
                                placeholder="Email" />
                            <span className='text-xs ml-1 text-red-600 flex justify-start'>{FormikError.email}</span>
                            <span className='text-xs ml-1 text-red-600 flex justify-start'>

                            </span>
                        </div>

                        <div className="max-md:text-right">
                            <Button
                                type='submit'
                                onClick={() => handleSubmit()}
                                className=' btn-primary text-white rounded-md max-md:right-0 '
                                loading={isSubmitting}
                            >
                                {isSubmitting ? "Subscribing" : "Subscribe"}

                            </Button>
                        </div>


                    </div>
                    <div className="flex mt-2">
                        {!isSubmitting &&
                            <>
                                {data?.exists && <>
                                    <AppAlert
                                        mode="error"
                                        className="bg-error"
                                        icon={<AiOutlineCloseCircle className='inline-block mr-2 text-lg' />}
                                    >
                                        User already subscribed
                                    </AppAlert>
                                </>}
                                {data?.subscribed && <>
                                    <AppAlert
                                        mode="success"
                                        className="bg-success"
                                        icon={<AiOutlineCloseCircle className='inline-block mr-2 text-lg' />}
                                    >
                                        Subscription successful
                                    </AppAlert>
                                </>}
                                {data?.status === "error" && <>
                                    <AppAlert
                                        mode="error"
                                        className="bg-error"
                                        icon={<AiOutlineCloseCircle className='inline-block mr-2 text-lg' />}
                                    >
                                        No internet connection
                                    </AppAlert>
                                </>}
                            </>
                        }

                    </div>
                </div>
            </div>




        </Footer>

    )
}


export default AppFooter