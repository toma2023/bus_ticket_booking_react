import { useForm } from "react-hook-form";

import React, { useContext } from "react";
import SocialAccount from "../../Components/SocialAccount/SocialAccount";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignIn = () => {
    const { signIn } = useContext(AuthContext);
   // const navigate = useNavigate();
    const location = useLoaderData();
   // const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    signIn(data?.email, data?.password)
        .then(result => {
            const user = result?.user;
            console.log(user)
            Swal.fire({
                title: 'User Login Successful',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            // navigate(from, { replace: true });
        })

}


  return (
    <div className="  flex flex-col justify-center items-center h-screen">
      <div className="w-[50%]  flex flex-col  items-center justify-center">
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <p className="mt-4 text-lg">
          Have Any Account?
          <Link className="text-[#26A85E] ml-2" to={"/signup"}>
            Sign Up
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

            <button
              type="submit"
              className="w-full mt-4 bg-[#26A85E] text-white py-2 rounded-sm hover:bg-[#1b7b45] focus:outline-none  "
            >
              Sign In
            </button>
          </form>
        </div>
        <SocialAccount />
      </div>
    </div>
  );
};

export default SignIn;
