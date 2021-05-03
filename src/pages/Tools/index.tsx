import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import AddIcon from "../../assets/add-square.svg";
import CloseIcon from "../../assets/close.svg";
import Button from "../../components/Button";
import CheckBox from "../../components/form/CheckBox";
import Input from "../../components/form/Input";
import AddTool from "../../components/modal/AddTool";
import RemoveTool from "../../components/modal/RemoveTool";
import api from "../../services/api";
import { Container, ToolItem, ToolItemTags, ToolItemTag } from "./styles";

interface ToolData {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface removeToolModalData {
  isOpen: boolean;
  title?: string;
  id?: number;
}
let time: any = null;

export default function Tools() {
  const [tools, setTools] = useState<ToolData[]>([]);
  const [removeToolModal, setRemoveToolModal] = useState<removeToolModalData>({
    isOpen: false,
  });
  const [addToolModalIsOpen, setAddToolModalIsOpen] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const loadTools = useCallback(async (params = {}) => {
    const response = await api.get("/tools", { params });

    setTools(response.data);
  }, []);

  useEffect(() => {
    loadTools();
  }, [loadTools]);

  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  const handleKeyUp = useCallback(
    event => {
      clearTimeout(time);

      time = setTimeout(() => {
        const { value } = event.target;

        if (value) {
          const tags = value.trim().split(" ").join(",");

          const onlyTags = formRef.current?.getFieldValue("check");

          if (onlyTags) {
            loadTools({ tags });
          } else {
            loadTools({ title: value });
          }
        } else {
          loadTools();
        }
      }, 1000);
    },
    [loadTools],
  );

  const handleRemoveTool = useCallback(async () => {
    try {
      await api.delete(`/tools/${removeToolModal.id}`);

      setTools(oldTools =>
        oldTools.filter(tool => tool.id !== removeToolModal.id),
      );

      setRemoveToolModal({
        isOpen: false,
      });
    } catch (error) {
      toast.error("Error on delete tool");
    }
  }, [removeToolModal]);

  const handleHiddenModalRemoveTool = useCallback(() => {
    setRemoveToolModal({
      isOpen: false,
    });
  }, []);

  return (
    <>
      <Container>
        <header>
          <h1>VUTTR</h1>
          <h2>Very Useful Tools to Remember</h2>
        </header>
        <main>
          <section>
            <Form onSubmit={handleSubmit} ref={formRef}>
              <div>
                <Input
                  label=""
                  name="search"
                  type="search"
                  placeholder="search"
                  onKeyUp={handleKeyUp}
                />
                <CheckBox
                  label="search only in tags"
                  name="check"
                  type="checkbox"
                />
              </div>
            </Form>
            <Button
              onClick={() => {
                setAddToolModalIsOpen(true);
              }}
            >
              {/* <img
                src={AddIcon}
                alt="add icon"
                style={{
                  width: "80%",
                  height: "80%",
                }}
              /> */}
              + Add
            </Button>
          </section>
          <ul>
            {tools.map(tool => (
              <ToolItem key={tool.id}>
                <div>
                  <h3>
                    <a href={tool.link} target="__blank">
                      {tool.title}
                    </a>
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setRemoveToolModal({
                        isOpen: true,
                        id: tool.id,
                        title: tool.title,
                      });
                    }}
                  >
                    {/* <img
                      src={CloseIcon}
                      alt="add icon"
                      style={{
                        width: "16px",
                        // height: "80%",
                      }}
                    /> */}
                    X remove
                  </button>
                </div>
                <p>{tool.description}</p>
                <ToolItemTags>
                  {tool.tags.map(tag => (
                    <ToolItemTag
                      key={tag}
                      isHighlight={formRef.current
                        ?.getFieldValue("search")
                        .includes(tag)}
                    >
                      #{tag}
                    </ToolItemTag>
                  ))}
                </ToolItemTags>
              </ToolItem>
            ))}
          </ul>
        </main>
      </Container>
      {addToolModalIsOpen && (
        <AddTool setAddToolModalIsOpen={setAddToolModalIsOpen} />
      )}
      {removeToolModal.isOpen && (
        <RemoveTool
          title={removeToolModal.title || ""}
          handleRemoveTool={handleRemoveTool}
          handleHiddenModal={handleHiddenModalRemoveTool}
        />
      )}
    </>
  );
}
