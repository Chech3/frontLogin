import { Formik } from "formik";
import InputLabel from "../components/input/InputLabel";
import Button from "../components/button/Button";
import * as Yup from "yup";

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "the name must have a minimum of 3 letters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "the password must have minimun of 5 chars")
      .max(50, "max of 50 chars"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Password confirmation is required"),
  });
  return (
    <section className="bg-gray-800 w-screen h-screen">
      <div className="flex h-screen justify-center items-center">
        <div className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center text-white font-semibold text-xl mb-3">
            Register
          </h2>
          <Formik
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            initialValues={initialValues}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
            }) => (
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
                  label="Name"
                  name="name"
                  id="name"
                  placeholder="Jose"
                  error={errors.name}
                  onChange={handleChange}
                  value={values.name}
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
                <InputLabel
                  label="Confirm Password"
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  placeholder="********"
                  error={errors.password_confirmation}
                  onChange={handleChange}
                  value={values.password_confirmation}
                />

                <div className="flex justify-center items-center">
                  <Button type="submit" value="Register" />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Register;
