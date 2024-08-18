import { Formik } from "formik";
import InputLabel from "../components/input/InputLabel";
import Button from "../components/button/Button";
import * as Yup from "yup";
import { Api } from "../services/api";
import { Link } from "react-router-dom";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
    Api.post("auth/login", values).then((response) => console.log(response));
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "the password must have minimun of 5 chars")
      .max(50, "max of 50 chars"),
  });
  return (
    <section className="bg-gray-800 w-screen h-screen">
      <div className="flex h-screen justify-center items-center">
        <div className=" bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center text-white font-semibold text-xl mb-3">
            Login
          </h2>
          <Formik
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            initialValues={initialValues}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <InputLabel
                  label="Email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  error={errors.email}
                  onChange={handleChange}
                  value={values.email}
                />

                <InputLabel
                  label="Password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  error={errors.password}
                  onChange={handleChange}
                  value={values.password}
                />

                <div className="flex justify-center items-center">
                  <Button type="submit" value="Login" />
                </div>
              </form>
            )}
          </Formik>
          <small className="text-sm text-gray-500 dark:text-gray-400">
            Don't you have a account?{" "}
            <Link className="font-medium hover:underline dark:text-indigo-500 text-indigo-600" to="/register">
              register
            </Link>
          </small>
        </div>
      </div>
    </section>
  );
};

export default Login;
