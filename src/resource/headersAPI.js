const getToken = () => {
  return localStorage.getItem("accessToken");
};
export const getHeaders = () => {
  return {
    "Content-Type": "application/json",
  };
};

export const getHeadrsWithToken = () => {
  return {
    ...getHeaders(),
    Authorization: "Bearer " + getToken(),
  };
};
