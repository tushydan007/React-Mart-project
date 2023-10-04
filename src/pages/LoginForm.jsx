import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { DevTool } from "@hookform/devtools";
import logo from "../assets/amazon.jpg";

const RegistrationForm = () => {
  const schema = yup.object({
    userName: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div
      className="w-3/6 m-auto shadow-2xl border mt-10 mb-20 p-10 rounded-lg"
      id="register"
    >
      <img src={logo} alt="logo" className="w-40 mx-auto rounded-md mb-4" />
      <h3 className="text-center text-2xl font-bold mb-10">Sign In</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            {...register("userName")}
            autoFocus
          />
          {errors.userName && (
            <p className="text-red-500 text-xs italic">
              {errors.userName.message}
            </p>
          )}
        </div>

        <div className="space">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
        </div>

        <button //github.com/tushydan007/React-Mart-project.git
          className="w-full rounded-lg p-3 font-semibold text-center m-auto bg-[#F7CA00] cursor-pointer mt-10"
          disabled={!isDirty || !isValid || isSubmitting}
        >
          Continue
        </button>
      </form>

      <p className="mt-5">
        New to React Mart?
        <Link to="/login">
          <span className="text-blue-500"> Sign in</span>
        </Link>
      </p>
      <DevTool control={control} />
    </div>
  );
};

export default RegistrationForm;
