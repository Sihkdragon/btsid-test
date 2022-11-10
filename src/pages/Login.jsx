import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginService } from "../service/API/auth";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const Navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await LoginService(username, password);

    if (res) {
      Navigate("/", { replace: true });
    } else {
      alert("Email Atau Password Salah");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form
        className="bg-slate-200 w-full max-w-sm h-96 flex flex-col justify-center items-center gap-y-4 rounded px-10"
        onSubmit={onSubmitHandler}
      >
        <h1>LOGIN</h1>
        <input
          type="text"
          placeholder="username"
          className="px-2 py-1  border-b rounded w-full"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          className="px-2 py-1  border-b rounded w-full"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="px-2 py-1  bg-blue-500 rounded w-full">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
