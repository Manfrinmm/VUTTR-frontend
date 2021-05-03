import { InputHTMLAttributes, useEffect, useRef } from "react";

import { useField } from "@unform/core";

import { Container, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export default function CheckBox({ label, name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { defaultValue, error, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: HTMLInputElement) => {
        return ref.checked;
      },
    });
  }, [registerField, fieldName]);

  return (
    <Container isErrored={!!error}>
      <input
        id={fieldName}
        name={fieldName}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      <label htmlFor={fieldName}>{label}</label>
      {error && <Error>{error}</Error>}
    </Container>
  );
}
