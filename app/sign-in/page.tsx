"use client";
import { AppAlert } from '@/components';
import { SignInForm, SignInResponse } from '@/constants/interfaces';
import { clientSignInValidationSchema } from '@/validators/client';
import { useFormik } from 'formik'
import { signIn ,useSession} from "next-auth/react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Input } from 'react-daisyui';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const SignIn = () => {

    const router = useRouter()


    const [data, setData] = useState<SignInResponse>()
    const {update} = useSession()

    const initialValues = {
        email: "",
        password: "",
    }


    //handle Google Auth
    const handleGoogle = () => {
        signIn("google")
    }
    //handle custom sign In
    const handleCredentials = async (values: SignInForm) => {
        try {

            const signInResponse = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false
            });

            if (signInResponse && !signInResponse.error) {
                setData({ status: "success", login: true })
                
              
                router.push('/dashboard')
            } else {
                setData({ status: "error", login: false})
            }


        } catch (error) {

            setData({ status: "error" })
        }


    }
    const { handleChange, handleSubmit, isSubmitting, errors: FormikError } = useFormik<SignInForm>({
        initialValues: initialValues,
        validateOnChange: false,
        onSubmit: handleCredentials,
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
                        {data?.login === false && <>
                            <AppAlert
                                mode="error"
                                className="bg-error"
                                icon={<AiOutlineCloseCircle className='inline-block mr-2 text-lg' />}
                            >
                                Wrong email or password
                            </AppAlert>
                        </>}
                        {data?.status === "error" && data?.network && <>
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