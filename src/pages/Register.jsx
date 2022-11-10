import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterService } from "../service/API/auth";

const Register = () => {
  const [email, setemail] = useState();
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  const Navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await RegisterService(email, username, password);
    if (res) {
      alert("register success");
      Navigate("/login", { replace: true });
    } else {
      alert("Register Failed");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form
        className="bg-slate-200 w-full max-w-sm h-96 flex flex-col justify-center items-center gap-y-4 rounded px-10"
        onSubmit={onSubmitHandler}
      >
        <h1>Register</h1>
        <input
          type="email"
          placeholder="email"
          className="px-2 py-1  border-b rounded w-full"
          required
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="username"
          className="px-2 py-1  border-b rounded w-full"
          required
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          className="px-2 py-1  border-b rounded w-full"
          required
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button type="submit" className="px-2 py-1  bg-blue-500 rounded w-full">
          Daftar
        </button>
      </form>
    </div>
  );
};

export default Register;
