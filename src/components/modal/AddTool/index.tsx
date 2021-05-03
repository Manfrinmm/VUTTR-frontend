import { useCallback, useRef } from "react";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import api from "../../../services/api";
import getValidationErrors from "../../../utils/getValidationErrors";
import Button from "../../Button";
import Input from "../../form/Input";
import Textarea from "../../form/Textarea";
import { Container } from "../styles";
import { Content } from "./styles";

interface AddToolProps {
  setAddToolModalIsOpen: Function;
}

export default function AddTool({ setAddToolModalIsOpen }: AddToolProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async data => {
      const schema = Yup.object().shape({
        title: Yup.string().required("Title required"),
        link: Yup.string().required("Link required"),
        description: Yup.string().required("Description required"),
        tags: Yup.string().required("Tags required"),
      });
      formRef.current?.setErrors({});

      try {
        await schema.validate(data, { abortEarly: false });

        const dataFormatted = {
          ...data,
          tags: data.tags.split(" "),
        };

        console.log(dataFormatted);

        await api.post("/tools", dataFormatted);

        setAddToolModalIsOpen(false);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [setAddToolModalIsOpen],
  );

  return (
    <Container>
      <Content>
        <h2>+ Add new tool</h2>
        <Form onSubmit={handleSubmit} id="formTool" ref={formRef}>
          <Input label="Tool Name" name="title" />
          <Input label="Tool Link" name="link" />
          <Textarea label="Tool Description" name="description" />
          <Input label="Tags" name="tags" />
        </Form>
        <div>
          <Button
            onClick={() => {
              setAddToolModalIsOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button type="submit" form="formTool">
            Add tool
          </Button>
        </div>
      </Content>
    </Container>
  );
}
