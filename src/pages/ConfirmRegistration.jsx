import { useNavigate } from "react-router-dom";

const ConfirmRegistration = () => {
  const navigate = useNavigate();

  return (
    <div className="grid place-content-center w-full h-screen">
      <div className="w-4/6 h-4/6 bg-transparent -mt-52 mx-auto">
        <p className="text-xl font-semibold mb-5 font-mono">
          Congratulations! your account has been been created successfully
        </p>
        <p className="text-lg">A message has been sent to your Email</p>
        <p>Please follow the prompt to activate your account.</p>
        <button
          className="bg-[#f7ca00] p-2 font-semibold w-full rounded-md my-5 transition-all duration-500 hover:opacity-80"
          onClick={() => navigate("/")}
        >
          GO BACK HOME
        </button>
      </div>
    </div>
  );
};

export default ConfirmRegistration;
