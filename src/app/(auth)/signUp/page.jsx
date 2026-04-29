"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handelSignUp = async (data) => {
    const { name, email, password, photo } = data;

    const { data:res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });
    console.log(res,error,"from signup pages")
    if(error){
      alert(`please sure that:  ${error.message}`)
    }
  };
  //  console.log(errors,"from erros")
  return (
    <div className="container mx-auto   h-[80vh] flex flex-col justify-center items-center p-4 rounded-xl ">
      <div className="bg-base-200 shadow-xl px-10 py-15">
        <h1 className="text-2xl font-bold mb-5">SighUp Your Account </h1>
        <form onSubmit={handleSubmit(handelSignUp)} className="space-y-5">
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
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input w-full "
              {...register("name", { required: "name field is required" })}
              placeholder="Enter your Name"
            />
            {errors.name && (
              <p className="text-red-500">*{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo</legend>
            <input
              type="text"
              className="input w-full "
              {...register("photo", { required: "photo field is required" })}
              placeholder="Enter your photo url"
            />
            {errors.photo && (
              <p className="text-red-500">*{errors.photo.message}</p>
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
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}
