import React, { useCallback, useEffect, useState } from "react";

import { Form } from "@unform/web";

import Button from "../../components/Button";
import Input from "../../components/form/Input";
import Header from "../../components/Header";
import { useAuth } from "../../hooks/auth";
import api from "../../services/api";
import { Container, ToolItem } from "./styles";

interface ToolData {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

const Tools: React.FC = () => {
  const [tools, setTools] = useState<ToolData[]>([]);
  const { signOut } = useAuth();
  const loadTools = useCallback(async () => {
    const response = await api.get("/tools");

    setTools(response.data);
  }, []);

  useEffect(() => {
    loadTools();
  }, [loadTools]);

  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <header>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
      </header>
      <main>
        <section>
          <Form onSubmit={handleSubmit}>
            <div>
              <Input label="" name="tags" type="search" placeholder="search" />
              <Input label="" name="check" type="checkbox" />
            </div>
            <Button>+ Add</Button>
          </Form>
        </section>
        <ul>
          {tools.map(tool => (
            <ToolItem key={tool.id}>
              <div>
                <h3>{tool.title}</h3>
                <button type="button">X remove</button>
              </div>
              <p>{tool.description}</p>
              {tool.tags.map(tag => (
                <strong key={tag}>#{tag} </strong>
              ))}
            </ToolItem>
          ))}
        </ul>
      </main>
    </Container>
  );
};

export default Tools;
