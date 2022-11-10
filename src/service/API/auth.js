import { getHeaders } from "../../resource/headersAPI";
import { LOGIN_URL, REGISTER_URL } from "../../resource/urls";

export const LoginService = async (username, password) => {
  const response = await fetch(LOGIN_URL, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ password, username }),
  });

  const result = await response.json();

  console.log(result);
  if (result.statusCode === 2110) {
    alert("Login Success");
    localStorage.setItem("accessToken", result.data.token);
    return true;
  } else {
    return false;
  }
};

export const RegisterService = async (email, username, password) => {
  const PreparedBody = {
    email,
    username,
    password,
  };

  const response = await fetch(REGISTER_URL, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(PreparedBody),
  });

  const result = await response.json();
  if (result.statusCode === 2000) {
    return true;
  } else {
    return false;
  }
};
