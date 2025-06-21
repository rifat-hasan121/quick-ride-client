import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router";
import GoogleLogin from "../socialLogin/GoogleLogin";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser } = useAuth();
    const onSubmit = data => {
        console.log(data)
      createUser(data.email, data.password)
        .then(result => {
        console.log(result)
        })
        .catch(error => {
        console.log(error)
      })
    }
  return (
    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Create an Account</h1>
        <p>Register with Quick Rider</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600"> Email is required</p>
            )}

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600"> Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">
                {" "}
                Password will be 6 character or longer
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary text-black mt-4">
              Register
            </button>
          </fieldset>
          <p>
            <small>
              Already have an Account?{" "}
              <Link className="btn btn-link" to="/login">
                Login
              </Link>
            </small>
          </p>
        </form>
        <GoogleLogin></GoogleLogin>
      </div>
    </div>
  );
};

export default Register;
