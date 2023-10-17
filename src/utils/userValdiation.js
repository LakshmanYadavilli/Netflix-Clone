export const userValdiation = (email, password) => {
  console.log({ email, password });
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  console.log({ isEmailValid, isPasswordValid });
  if (!isEmailValid) return "Email Incorrect";
  if (!isPasswordValid) return "Password Incorrect";
  return null;
};
