"use client";
import { AppAlert } from '@/components';
import { SignUpResponse, SignUpForm } from '@/constants/interfaces';
import { clientSignUpValidationSchema } from '@/validators/client';
import axios from 'axios';
import { useFormik } from 'formik';
import { signIn } from "next-auth/react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Input } from 'react-daisyui';
import { AiOutlineCloseCircle } from 'react-icons/ai';


const SignUp = () => {


    const router = useRouter()

    const [data, setData] = useState<SignUpResponse>()

    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_2: "",
    }
    //handle google auth
    const handleGoogle = () => {
        signIn("google")
    }
    //handle custom sign up
    const handleSignUp = async (values: SignUpForm) => {
        try {
            const response = await axios.post('/api/users/sign-up/', values)

            const responseData: SignUpResponse = response.data

            setData({ ...responseData, status: "success" })

            if (responseData.created === true) {

                //handle the authorization and create a session

                const signInResponse = await signIn("credentials", {
                    email: values.email,
                    password: values.password,
                    redirect: false
                });

                if (signInResponse && !signInResponse.error) {
                    router.push('/dashboard')
                } else {
                    setData({ status: "error", login: false })
                }

            }
        } catch {
            setData({ status: "error" })
        }
    }

    //configure formik forms
    const { handleChange, handleSubmit, isSubmitting, errors: FormikError } = useFormik<SignUpForm>({
        initialValues: initialValues,
        validateOnChange: false,
        onSubmit: handleSignUp,
        validationSchema: clientSignUpValidationSchema
    })



    return (
        <div className="flex w-full justify-center ">
            <div className="md:w-[30%] max-md:w-full md:shadow flex-row px-8 md:mt-8 max-md:mt-12 py-8 rounded-md space-y-3">

                <div className="flex justify-center">
                    <span className="logo-font text-3xl font-semibold ">Gango ReChishona</span>
                </div>

                <div className="flex justify-center">
                    <span>Create Account</span>
                </div>
                <div>
                    <Input
                        type="text"
                        className="input input-bordered input-md form-control text-sm w-full focus:outline-none focus:border-primary  max-md:w-full"
                        onChange={handleChange("first_name")}
                        placeholder="First name"
                    />
                    <span className='text-xs ml-1 text-red-600 flex justify-start space-y-0'>{FormikError.first_name}</span>
                </div>
                <div>
                    <Input
                        type="text"
                        className="input input-bordered input-md form-control text-sm w-full focus:outline-none focus:border-primary  max-md:w-full"
                        onChange={handleChange("last_name")}
                        placeholder="Last name"
                    />
                    <span className='text-xs ml-1 text-red-600 flex justify-start space-y-0'>{FormikError.last_name}</span>
                </div>

                <div>
                    <Input
                        type="email"
                        className="input input-bordered input-md form-control text-sm w-full focus:outline-none focus:border-primary  max-md:w-full"
                        onChange={handleChange("email")}
                        placeholder="Email"
                    />
                    <span className='text-xs ml-1 text-red-600 flex justify-start space-y-0'>{FormikError.email}</span>
                </div>

                <div>
                    <Input
                        type="password"
                        className="input input-bordered input-md form-control text-sm w-full focus:outline-none focus:border-primary  max-md:w-full"
                        onChange={handleChange("password")}
                        placeholder="Password"
                    />
                    <span className='text-xs ml-1 text-red-600 flex justify-start space-y-0'>{FormikError.password}</span>
                </div>

                <div>
                    <Input
                        type="password"
                        className="input input-bordered input-md form-control text-sm w-full focus:outline-none focus:border-primary  max-md:w-full"
                        onChange={handleChange("password_2")}
                        placeholder="Confirm password"
                    />
                    <span className='text-xs ml-1 text-red-600 flex justify-start space-y-0'>{FormikError.password_2}</span>
                </div>

                <Button
                    type='submit'
                    onClick={() => handleSubmit()}
                    className=' btn-primary text-white rounded-md w-full'
                    loading={isSubmitting}
                >
                    {isSubmitting ? "Creating Account" : "Create Account"}

                </Button>
                {!isSubmitting &&
                    <>
                        {data?.exists === true && <>
                            <AppAlert
                                mode="error"
                                className="bg-error"
                                icon={<AiOutlineCloseCircle className='inline-block mr-2 text-lg' />}
                            >
                                Email is being used by another account
                            </AppAlert>
                        </>}
                        {data?.valid === false && <>
                            <AppAlert
                                mode="error"
                                className="bg-error"
                                icon={<AiOutlineCloseCircle className='inline-block mr-2 text-lg' />}
                            >
                                Please check your details and try again
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

                        {data?.status === "error" && !data?.login && <>
                            <AppAlert
                                mode="error"
                                className="bg-error"
                                icon={<AiOutlineCloseCircle className='inline-block mr-2 text-lg' />}
                            >
                                Authentication failed please try again
                            </AppAlert>
                        </>}

                    </>

                }

                <div className="flex justify-center">
                    <span>OR</span>
                </div>

                <Button
                    onClick={handleGoogle}
                    className='bg-white border-slate-300  hover:border-primary hover:bg-white  rounded-md w-full'

                >
                    <Image
                        src="/googleIcon.png"
                        height={20}
                        width={20}
                        alt='Google Logo'
                    />
                    Continue with  Google

                </Button>

            </div>
        </div>
    )
}

export default SignUp