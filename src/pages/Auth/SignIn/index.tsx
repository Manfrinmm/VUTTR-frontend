import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import Button from "../../../components/Button";
import Input from "../../../components/form/Input";
import { useAuth } from "../../../hooks/auth";
import getValidationErrors from "../../../utils/getValidationErrors";
import { Container } from "./styles";

export default function SignIn() {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async data => {
      const schema = Yup.object().shape({
        email: Yup.string().email().required("E-mail required"),
        password: Yup.string().required("Password required"),
      });
      formRef.current?.setErrors({});

      try {
        await schema.validate(data, { abortEarly: false });

        await signIn(data);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn],
  );

  return (
    <Container>
      <section>
        <Form
          onSubmit={handleSubmit}
          ref={formRef}
          initialData={{
            email: "matheus_poow23@hotmail.com",
            password: "123",
          }}
        >
          <Input
            label="E-mail"
            name="email"
            type="email"
            placeholder="Enter with your e-mail"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter with your password"
          />
          <Button type="submit">Enter</Button>
        </Form>

        <footer>
          <p>Not have an account yet?</p>
          <Link to="/sign-up">Create here</Link>
        </footer>
      </section>
    </Container>
  );
}
