const patterns = {
  email: /^(\s*[\w.-]+)@([a-zA-Z\d]{3,})\.([a-z]{3,8}\s*)$/,
};

export const validate = (field, Regex) => {
  if (patterns[Regex].test(field)) return true;
  return false;
};

export const validateInput = (event) =>
  validate(event.target.value, event.target.attributes.name.value);
export const validateAll = (email, job, setError, e) => {
  if (!email && job === "Select Your Dream Job") {
    setError({
      email: "This field is required",
      select: "This field is required",
    });
    return false;
  }
  if (!email) {
    setError({
      email: "This field is required",
    });
    return false;
  }
  if (job === "Select Your Dream Job") {
    setError({
      select: "This field is required",
    });
    return false;
  }
  if (e.email) {
    setError((prevState) => ({ ...prevState, email: "Invalid email input" }));
    return false;
  }
  return true;
};
