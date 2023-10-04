import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

const RegistrationForm = () => {
  const schema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email().required("Email is required"),
    userName: yup.string().required("User Name is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
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
      className="w-3/6 m-auto shadow-xl border mt-10 mb-20 p-10 rounded-lg"
      id="register"
    >
      <h3 className="text-center text-2xl font-bold mb-10">
        Create an account
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="name" {...register("firstName")} autoFocus />
          {errors.firstName && (
            <p className="text-red-500 text-xs italic">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" {...register("lastName")} />
          {errors.lastName && (
            <p className="text-red-500 text-xs italic">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="userName">Username</label>
          <input type="text" id="userName" {...register("userName")} />
          {errors.userName && (
            <p className="text-red-500 text-xs italic">
              {errors.userName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
        </div>

        <button //github.com/tushydan007/React-Mart-project.git
          className="w-full rounded-lg p-3 font-semibold text-center m-auto bg-[#F7CA00]"
          disabled={!isDirty || !isValid || isSubmitting}
        >
          Register
        </button>
      </form>

      <p className="mt-5">
        Already have an account?
        <Link to="/login">
          <span className="text-blue-500"> Sign in</span>
        </Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
