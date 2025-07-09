export const validatePassword = (password) => {
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(test(password));
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);
  
  return hasLower && hasUpper && hasNumber && hasSpecial;
};