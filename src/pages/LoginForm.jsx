import { Link } from "react-router-dom";
import logo from "../assets/amazon.jpg";
import Joi from "joi";
import InputField from "../components/InputField";
import { useState } from "react";

const RegistrationForm = () => {
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    userName: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });

  const validate = () => {
    let fieldErrors = {};
    const result = schema.validate(values, { abortEarly: false });
    if (!result.error) return null;

    result.error &&
      result.error.details.forEach((error) => {
        fieldErrors[error.path[0]] = error.message;
      });
    return fieldErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsObject = validate();
    if (errorsObject) {
      return setErrors(errorsObject);
    }
    console.log(values);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="w-3/6 m-auto shadow-2xl border mt-10 mb-20 p-10 rounded-lg"
      id="register"
    >
      <img src={logo} alt="logo" className="w-40 mx-auto rounded-md mb-4" />
      <h3 className="text-center text-2xl font-bold mb-10">Sign In</h3>

      <form onSubmit={handleSubmit}>
        <InputField
          name="userName"
          label="Username"
          value={values.userName}
          onChange={handleChange}
          error={errors.userName}
        />

        <InputField
          type="password"
          name="password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />

        <button //github.com/tushydan007/React-Mart-project.git
          className="w-full rounded-lg p-3 font-semibold text-center m-auto bg-[#F7CA00] cursor-pointer mt-10 hover:opacity-80 transition-all duration-500 disabled:bg-yellow-300 disabled:text-slate-500"
          disabled={validate()}
          type="submit"
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
    </div>
  );
};

export default RegistrationForm;
