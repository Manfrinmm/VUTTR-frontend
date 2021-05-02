import { ValidationError } from "yup";

interface IErrors {
  [key: string]: string;
}
export default function getValidationErrors(err: ValidationError): IErrors {
  const validationErrors: IErrors = {};

  err.inner.forEach(error => {
    if (!error.path) {
      throw new Error("Error finding path to field");
    }

    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
