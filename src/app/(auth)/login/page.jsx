"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handelSignIn = async (data) => {
    const {email,password}=data
    const { data:res, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res,error,"from  login pages----------")
  };
  //  console.log(errors,"from erros")
  return (
    <div className="container mx-auto   h-[80vh] flex flex-col justify-center items-center p-4 rounded-xl ">
      <div className="bg-base-200 shadow-xl px-10 py-15">
        <h1 className="text-2xl font-bold mb-5">Login Your Account </h1>
        <form onSubmit={handleSubmit(handelSignIn)} className="space-y-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input w-full "
              {...register("email", { required: "Email field is required" })}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500">*{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              {...register("password", {
                required: "password field is required",
              })}
              className="input w-full"
              placeholder="Enter yor password"
            />
            {errors.password && (
              <p className="text-red-500">*{errors.password.message}</p>
            )}
          </fieldset>
          <button type="submit" className="w-full bg-black btn text-white">
            Log in
          </button>
          <p>
            If you don't have account?{" "}
            <Link href={"/signUp"} className="text-red-500 font-semibold">
              go signUp page
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}
