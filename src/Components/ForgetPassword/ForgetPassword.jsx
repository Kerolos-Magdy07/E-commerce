import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ForgettenEmailContext } from "../../Context/ForgettenMailContext";

export default function Login() {
  let navigate = useNavigate();
  let { forgettnEmail, setForgettnEmail } = useContext(ForgettenEmailContext);
  const [ApiError, setApiError] = useState("");
  const [ApiSuccess, setApiSuccess] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  function setErrorNull() {
    setApiError("");
  }

  async function submitData(ForgetObj) {
    setIsLoading(true);
    await axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
        ForgetObj,
      )
      .then((res) => {
        setIsLoading(false);
        if (res.data.statusMsg) {
          setErrorNull();
          setApiSuccess(res.data.message);
          setForgettnEmail(formik.values.email);
          setTimeout(() => {
            navigate("/verifycode");
          }, 3000);
        }
      })
      .catch((err) => {
        setApiError(err.response.data.message);
        setIsLoading(false);
      });
  }

  let validationSchema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("Email is required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: submitData,
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto mt-12 max-w-2xl px-8 py-2"
      >
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="email"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-emerald-600 focus:ring-0 focus:outline-none"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-emerald-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
          >
            Enter Your Email
          </label>
          {formik.errors.email && formik.touched.email ? (
            <div className="rounded-lg p-2 text-sm text-red-800" role="alert">
              <span className="font-medium">Danger alert!</span>{" "}
              {formik.errors.email}
            </div>
          ) : (
            ApiSuccess && (
              <>
                <div className="text-md mx-auto mt-2 p-2 text-center font-semibold text-emerald-600">
                  {ApiSuccess}
                </div>
                <p className="text-center font-[500]">
                  You will be automatically transferred after 3 seconds
                </p>
              </>
            )
          )}
        </div>

        {ApiError && (
          <div className="text-md mx-auto mt-2 w-3/4 rounded-md border-2 border-red-600 p-2 text-center font-semibold text-black">
            {ApiError}
          </div>
        )}

        <button
          type="submit"
          className="m-auto mx-auto my-10 block w-full rounded-lg  bg-emerald-500 px-5 py-2.5 text-center tracking-wide font-black  text-xl text-white hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-300 focus:outline-none sm:w-sm"
        >
          {IsLoading ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            "Send verify code"
          )}
        </button>

        <div className="mx-auto">
          <h6 className="text-center">
            {" "}
            <Link to={"/login"}>
              {" "}
              <span className="text-blue-800  text-lg font-semibold"><i className="fa-solid fa-arrow-right-to-bracket"></i> Login Now</span>
            </Link>
          </h6>
        </div>
      </form>
    </>
  );
}
