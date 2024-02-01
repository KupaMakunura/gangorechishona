"use client";
import { AppAlert } from '@/components';
import { SignInForm, SignInResponse } from '@/constants/interfaces';
import { clientSignInValidationSchema } from '@/validators/client';
import axios from 'axios';
import { useFormik } from 'formik';
import { signIn } from "next-auth/react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Input } from 'react-daisyui';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const SignIn = () => {

    const router = useRouter()


    const [data, setData] = useState<SignInResponse>()

    const initialValues = {
        email: "",
        password: "",
    }
    //handle google 0auth
    const handleGoogle = () => {
        signIn("google")
    }
    //handle custom sign In
    const handleSignIn = async (values: SignInForm) => {
        try {
            const response = await axios.post('/api/users/sign-in/', values)

            const responseData: SignInResponse = response.data

            setData({ ...response.data, status: "success" })

            if (responseData.login === true) {

                await signIn("credentials", {
                    ...responseData.user, redirect: false,
                })
                router.push("/dashboard")
            }
        } catch {
            setData({ status: "error" })
        }


    }
    const { handleChange, handleSubmit, isSubmitting, errors: FormikError } = useFormik<SignInForm>({
        initialValues: initialValues,
        validateOnChange: false,
        onSubmit: handleSignIn,
        validationSchema: clientSignInValidationSchema
    })



    return (
        <div className="flex w-full justify-center ">
            <div className="md:w-[30%] max-md:w-full md:shadow flex-row px-8 md:mt-24 max-md:mt-12 py-8 rounded-md space-y-3">

                <div className="flex justify-center">
                    <span className="logo-font text-3xl font-semibold ">Gango ReChishona</span>
                </div>

                <div className="flex justify-center">
                    <span>Sign in to your account</span>
                </div>
                <div className="mt-5">
                    <Input
                        type="email"
                        className="input input-bordered input-md form-control text-sm w-full focus:outline-none focus:border-primary  max-md:w-full"
                        onChange={handleChange("email")}
                        placeholder="Email" />
                    <span className='text-xs ml-1 text-red-600 flex justify-start space-y-0'>{FormikError.email}</span>
                </div>

                <div>
                    <Input
                        type="password"
                        className="input input-bordered input-md form-control text-sm w-full focus:outline-none focus:border-primary  max-md:w-full"
                        onChange={handleChange("password")}
                        placeholder="Password" />
                    <span className='text-xs ml-1 text-red-600 flex justify-start space-y-0'>{FormikError.password}</span>
                </div>



                <Button
                    type='submit'
                    onClick={() => handleSubmit()}
                    className=' btn-primary text-white rounded-md w-full'
                    loading={isSubmitting}
                >
                    Sign in

                </Button>
                {!isSubmitting &&
                    <>
                        {data?.email === false && <>
                            <AppAlert
                                mode="error"
                                className="bg-error"
                                icon={<AiOutlineCloseCircle className='inline-block mr-2 text-lg' />}
                            >
                                Wrong email
                            </AppAlert>
                        </>}
                        {data?.password === false && <>
                            <AppAlert
                                mode="error"
                                className="bg-error"
                                icon={<AiOutlineCloseCircle className='inline-block mr-2 text-lg' />}
                            >
                                Wrong password
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

export default SignIn