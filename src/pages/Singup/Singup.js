import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../component/Loading/Loading';
import useToken from '../../hooks/useToken';

const Singup = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, reset, watch, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const location = useLocation()
    // const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(user || googleUser)
    let from = location.state?.from?.pathname || '/'

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        // console.log(data);
    }

    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }

    let errorMessage
    if (error || googleError || updateError) {
        errorMessage = <p className='text-red-500 font-serif'> {error?.message || googleError?.message || updateError.message}</p>
    }

    if (token) {
        console.log(token)
        navigate(from, { replace: true })
    }

    return (
        <div>
            <section className="h-screen mx-10 pt-8">
                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div
                            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt=""
                            />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <div >
                                <div className="flex flex-row items-center justify-center lg:justify-start">
                                    <p className="text-lg mb-0 mr-4">Sing in with</p>
                                    <button
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                    >

                                        <FaFacebookF className='w-4 h-4' />
                                    </button>
                                    {/* google  */}
                                    <button onClick={() => signInWithGoogle()}
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                    >

                                        <AiOutlineGoogle className='w-4 h-4' />
                                    </button>

                                    <button
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                    >
                                        {/* <!-- Twitter --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                                            {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                            <path
                                                fill="currentColor"
                                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                    >
                                        {/* <!-- Linkedin --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
                                            {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                            <path
                                                fill="currentColor"
                                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <div
                                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                                </div>


                                <form onSubmit={handleSubmit(onSubmit)}>

                                    {/* <!-- Name input --> */}
                                    <div className="mb-6">
                                        <input  {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            }
                                        })}
                                            type="text"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                            placeholder="Full Name"
                                        />
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.name.message}</span>}

                                    </div>

                                    {/* <!-- Email input --> */}
                                    <div className="mb-6">
                                        <input {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })}
                                            type="email"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                            placeholder="Email address"
                                        />

                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}


                                    </div>

                                    {/* <!-- Password input --> */}
                                    <div className="mb-6">
                                        <input {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer'
                                            }
                                        })}
                                            type="password"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                            placeholder="Password"
                                        />
                                        {errors.password && <label className="label"> <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>  </label>}
                                    </div>

                                    <div className="mb-6">
                                        <input  {...register("confirmpassword", {
                                            required: "PLease give a confirm password",
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer'
                                            },
                                            validate: (val) => {
                                                if (watch('password') !== val) {
                                                    return "passwords did't match";
                                                }
                                            }
                                        })}
                                            type="password"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                            placeholder="Confirm Password"
                                        />
                                        {errors.confirmpassword && <label className="label"> <span className="label-text-alt text-red-500 font-medium">{errors.confirmpassword.message}</span> </label>}

                                    </div>

                                    {errorMessage}

                                    <div className="text-center lg:text-left">
                                        <button
                                            type="submit"
                                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Singup
                                        </button>



                                        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                            Already have an account?
                                            <Link to="/login"

                                                className="ml-2 text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                            >Login</Link
                                            >
                                        </p>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Singup;