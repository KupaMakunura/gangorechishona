"use client";
import Image from 'next/image';
import { signIn, useSession, signOut } from "next-auth/react"
import { useFormik } from 'formik';
import { Button, Input } from 'react-daisyui'
import { clientSignInValidationSchema } from '@/validators/client';

const SignIn = () => {
    const { data, status } = useSession()

    const initialValues = {
        email: "",
        password: "",
    }
    const handleGoogle = () => {
        signIn("google",)
    }

    const handleCredentials = async (values: { email: string, password: string }) => {
        const response = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        })

        console.log(response)
    }
    const { handleChange, handleSubmit, isSubmitting, errors: FormikError } = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        onSubmit: handleCredentials,
        validationSchema: clientSignInValidationSchema
    })



    return (
        <div className="flex w-full justify-center ">
            <div className="md:w-[30%] max-md:w-full md:shadow flex-row px-8 md:mt-24 max-md:mt-12 py-8 rounded-md space-y-3">
                <span>{data?.user?.name}</span>
                <div className="flex justify-center">
                    <span className="logo-font text-3xl font-semibold ">Gango ReChishona</span>
                </div>

                <div className="flex justify-center">
                    <span>Sign in to your account</span>
                </div>
                <Input
                    type="email"
                    className="input input-bordered input-md form-control text-sm w-full focus:outline-none focus:border-primary  max-md:w-full"
                    onChange={handleChange("email")}
                    placeholder="Email" />
                <span className='text-xs ml-1 text-red-600 flex justify-start space-y-0'>{FormikError.email}</span>
                <Input
                    type="password"
                    className="input input-bordered input-md form-control text-sm w-full focus:outline-none focus:border-primary  max-md:w-full"
                    onChange={handleChange("password")}
                    placeholder="Password" />
                <span className='text-xs ml-1 text-red-600 flex justify-start space-y-0'>{FormikError.password}</span>

                <Button
                    type='submit'
                    onClick={() => handleSubmit()}
                    className=' btn-primary text-white rounded-md w-full'
                    loading={isSubmitting}
                >
                    Sign in

                </Button>
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