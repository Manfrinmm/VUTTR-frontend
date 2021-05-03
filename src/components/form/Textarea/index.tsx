import { TextareaHTMLAttributes, useEffect, useRef } from "react";

import { useField } from "@unform/core";

import { Container, Error } from "./styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

export default function Textarea({ label, name, ...rest }: TextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { defaultValue, error, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({ name: fieldName, ref: textareaRef.current, path: "value" });
  }, [registerField, fieldName]);

  return (
    <Container isErrored={!!error}>
      <label htmlFor={fieldName}>
        {label}
        {error && <Error>*</Error>}
      </label>
      <textarea
        id={fieldName}
        name={fieldName}
        defaultValue={defaultValue}
        ref={textareaRef}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}
