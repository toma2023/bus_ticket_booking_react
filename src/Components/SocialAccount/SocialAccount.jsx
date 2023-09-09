import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const SocialAccount = () => {
  const { googleSignIn } = useContext(AuthContext);

  const location = useLoaderData();

  const handleGoogleSignIn = () => {
  googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p className="mt-10 text-center ">Or sign in with</p>
      <div class="w-[230px] border-t border-black my-3">
        <div className="flex items-center justify-center mt-4">
          <button onClick={handleGoogleSignIn}>
            <FaGoogle className="text-[#26A85E] w-[30px] h-[30px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialAccount;
