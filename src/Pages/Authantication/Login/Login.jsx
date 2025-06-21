import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import GoogleLogin from "../socialLogin/GoogleLogin";

const Login = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
  return (
    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Welcome Back</h1>
        <p>Login with Quick Rider</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email")}
              className="input"
              placeholder="Email"
            />

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
              <p className="text-red-600">Password is required.</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">
                Password must be 6 character or longer .
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary text-black mt-4">Login</button>
          </fieldset>
          <p>
            <small>
              Don't have any account?
              <Link className="btn btn-link" to="/register">
                Register
              </Link>
            </small>
          </p>
        </form>
        <GoogleLogin></GoogleLogin>
      </div>
    </div>
  );
};

export default Login;
