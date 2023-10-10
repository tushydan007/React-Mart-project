import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ConifrmationSuccessful = () => {
  const { uid, token } = useParams();

  const activateUser = async () => {
    await axios.post("http://127.0.0.1:8000/auth/users/activation/", {
      uid,
      token,
    });
  };

  useEffect(() => {
    activateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid, token]);

  return (
    <div className="w-4/6 h-4/6 bg-transparent mt-52 mx-auto">
      <p className="font-mono text-xl font-semibold text-center">
        Your Account has been Activated
      </p>
      <button className="bg-[#f7ca00] p-2 font-semibold w-full rounded-md my-5 transition-all duration-500 hover:opacity-80">
        Proceed to Login
      </button>
    </div>
  );
};

export default ConifrmationSuccessful;
