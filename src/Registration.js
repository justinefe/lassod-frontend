import React, { useState, useRef } from "react";
import Select from "./components/Select/Select";
import { validateAll, validateInput } from "./utilities/helpers";

import "./Registration.css";
const JobArray = [
  {
    value: "Frontend Engineer",
  },
  {
    value: "Backend Engineer",
  },
  {
    value: "DevOps Engineer",
  },
];
const Registration = () => {
  const [email, setEmail] = useState("");
  const [succes, setSucces] = useState(false);
  const [job, setJob] = useState("Select Your Dream Job");
  const [error, setError] = useState({ email: "", select: "" });
  const selectRef = useRef();
  const emailRef = useRef(null);

  const handleChange = (e) => {
    if (!validateInput(e)) {
      emailRef.current.style.border = "1px solid red";
      setError((prevState) => ({ ...prevState, email: "Invalid email input" }));
    } else {
      emailRef.current.style.border = "1px solid #2F80ED";
      setEmail(e.target.value);
      setError((prevState) => ({ ...prevState, email: "" }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll(email, job, setError, error)) {
      return;
    } else {
      setError({
        email: "",
        select: "",
      });
      setSucces(true);
      emailRef.current.style.border = "none";
      selectRef.current.style.border = "none";
    }
  };

  return (
    <div className="registration">
      <div className="registration_top">
        <h1>Register Your Dream Job</h1>
        <span>Kindly provide your email and dream job</span>
        {succes ? (
          <span className="registration_top_succes">
            Dream Job Succesfully Saved
          </span>
        ) : (
          ""
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          ref={emailRef}
          placeholder="Your Email Address"
        />
        <div className="registration_top_form_error">{error.email}</div>
        <label>Dream Job</label>
        <Select
          ref={selectRef}
          arr={JobArray}
          val={job}
          setVal={setJob}
          width="450px"
          setError={setError}
        />
        <div className="registration_top_form_error">{error.select}</div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};
export default Registration;
