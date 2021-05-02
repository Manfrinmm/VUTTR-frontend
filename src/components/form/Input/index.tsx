import { InputHTMLAttributes, useEffect, useRef } from "react";

import { useField } from "@unform/core";

import { Container, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export default function Input({ label, name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { defaultValue, error, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({ name: fieldName, ref: inputRef.current, path: "value" });
  }, [registerField, fieldName]);

  return (
    <Container isErrored={!!error}>
      <label htmlFor={fieldName}>
        {label}
        {error && <Error>*</Error>}
      </label>
      <input
        id={fieldName}
        name={fieldName}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}
