"use client";
import Image from 'next/image';
import { signIn, useSession, signOut } from "next-auth/react"
import { Button, Input } from 'react-daisyui'

const SignIn = () => {
    const { data, status } = useSession()
    const handleGoogle = () => {
        signIn("google",)
    }
    return (
        <div className="flex w-full justify-center ">
            <div className="w-[30%] shadow flex-row px-8 mt-24 py-8 rounded-md space-y-3">
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
                    // onChange={handleChange("email")}
                    placeholder="Email" />
                <Input
                    type="password"
                    className="input input-bordered input-md form-control text-sm w-full focus:outline-none focus:border-primary  max-md:w-full"
                    // onChange={handleChange("email")}
                    placeholder="Password" />

                <Button
                    type='submit'
                    // onClick={() => handleSubmit()}
                    className=' btn-primary text-white rounded-md w-full'
                // loading={isSubmitting}
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