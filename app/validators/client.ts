import * as Yup from "yup";

const passwordSchema: Yup.StringSchema = Yup.string()
  .required("Enter password")
  .min(8, "Password must be at least 8 characters long")
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]*$/,
    "Password must contain at least one letter and one number"
  )
  .test("not-common-password", "Password is too common", (value) => {
    const commonPasswords = [
      "123456",
      "password",
      "123456789",
      "12345678",
      "12345",
      "1234567",
      "1234567890",
      "1234",
      "password1",
      "password123",
      "123",
    ];
    return !commonPasswords.includes(value);
  });

export const clientSubscribeValidationSchema = Yup.object().shape({
  email: Yup.string().required("Enter email").email().label("Email"),
});

export const clientSignInValidationSchema = Yup.object().shape({
  email: Yup.string().required("Enter email").email().label("Email"),
  password: passwordSchema,
});

export const clientSignUpValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("Enter first name").label("First name"),
  last_name: Yup.string().required("Enter last name").label("Last name"),
  email: Yup.string().required("Enter email").email().label("Email"),
  password: passwordSchema,
  password_2: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords do not match")
    .required("Confirm your password"),
});
