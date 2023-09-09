import React, { useContext } from "react";
import SocialAccount from "../../Components/SocialAccount/SocialAccount";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
    });
    
  };

  return (
    <div>
      <div className="  flex flex-col justify-center items-center h-screen">
        <div className="w-[50%]  flex flex-col  items-center justify-center">
          <h1 className="text-4xl font-semibold">Sign Up</h1>
          <p className="mt-4 text-lg">
            Already a member?
            <Link className="text-[#26A85E] ml-2" to={"/signin"}>
              Login
            </Link>{" "}
          </p>

          <div className=" w-[100%] flex justify-center items-center mt-12 ">
            <form onSubmit={handleSubmit(onSubmit)} className="w-[50%]  ">
              <div class="mb-6">
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="border-b border-black w-full py-2 px-1 focus:border-blue-500 outline-none"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div class="mb-6">
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className="border-b border-black w-full py-2 px-1 focus:border-blue-500 outline-none"
                  placeholder="Password"
                />
                {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div class="mb-6">
                <input
                  type="password"
                  {...register("confirmPass", { required: true })}
                  className="border-b border-black w-full py-2 px-1 focus:border-blue-500 outline-none"
                  placeholder="Confirm Password"
                />
                {errors.confirmPass && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-[#26A85E] text-white py-2 rounded-sm hover:bg-[#1b7b45] focus:outline-none  "
              >
                Sign Up
              </button>
            </form>
          </div>
          <SocialAccount />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
