import { Link } from "react-router-dom";
import { useState } from "react";
import Joi from "joi";
import logo from "../assets/amazon.jpg";
import InputField from "./../components/InputField";

const RegistrationForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string()
      .email({ tlds: { allow: ["com", "net"] } })
      .required()
      .label("Email"),
    userName: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });

  const validateAll = () => {
    let localErrors = {};
    const result = schema.validate(data, { abortEarly: false });
    if (!result.error) return null;

    result.error &&
      result.error.details.forEach((error) => {
        localErrors[error.path[0]] = error.message;
      });
    return localErrors;
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsObject = validateAll();
    if (errorsObject) {
      return setErrors(errorsObject);
    }
    console.log(data);
  };

  return (
    <div
      className="w-3/6 m-auto shadow-2xl border mt-10 mb-20 p-10 rounded-lg"
      id="register"
    >
      <img src={logo} alt="logo" className="w-40 mx-auto rounded-md mb-4" />
      <h3 className="text-center text-2xl font-bold mb-10">
        Create an account
      </h3>

      <form onSubmit={handleSubmit}>
        <InputField
          name="firstName"
          label="First Name"
          value={data.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />

        <InputField
          name="lastName"
          label="Last Name"
          value={data.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />

        <InputField
          name="email"
          label="Email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          name="userName"
          label="Username"
          value={data.userName}
          onChange={handleChange}
          error={errors.userName}
        />

        <InputField
          type="password"
          name="password"
          label="Password"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />

        <button //github.com/tushydan007/React-Mart-project.git
          className="w-full rounded-lg p-3 font-semibold text-center m-auto bg-[#F7CA00] cursor-pointer mt-10 hover:opacity-80 transition-all duration-500 disabled:bg-yellow-300 disabled:text-slate-500"
          disabled={validateAll()}
          type="submit"
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
