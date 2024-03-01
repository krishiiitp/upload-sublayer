"use client";
import React from "react";
import { FormEvent } from 'react'
import Link from "next/link";
import {useRouter} from "next/navigation";
import axios from "axios";
export default function SignupPage(){
    const router=useRouter();
    const [user,setUser]=React.useState({
        username : "",
        email : "",
        password : ""
    })
    const [buttonDisabled,setButtonDisabled]=React.useState(true);
    React.useEffect(()=>{
        if(user.email.length>0 && user.username.length>0 && user.password.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user])
    const onSignup=async (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(user);
        setUser({...user,username : "",password : "",email : ""});
    }
    return(
        <div className="display-flex flex-col justify-center text-center mt-10">
            <h1 className="text-3xl mb-5">User Signup</h1>
            <div>
            <form onSubmit={onSignup} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={user.username}
                        onChange={(e)=>{
                            setUser({...user,username : e.target.value});
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="username" 
                        required 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={user.email}
                        onChange={(e)=>{
                            setUser({...user,email : e.target.value});
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="name@gmail.com" 
                        required 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={user.password}
                        onChange={(e)=>{
                            setUser({...user,password : e.target.value});
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="password" 
                        required 
                    />
                </div>
                <button type="submit" 
                className={`text-white ${buttonDisabled ? 'bg-stone-400' : 'bg-blue-700 hover:bg-blue-800'} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                disabled={buttonDisabled}
                >Submit</button>
                <p className="mt-5 text-gray-400">Already have an account! <Link className="text-blue-500" href="/login">Login</Link></p>
            </form>
            </div>
        </div>
    )
}