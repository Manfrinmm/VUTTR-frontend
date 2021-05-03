import Button from "../../Button";
import { Container } from "../styles";
import { Content } from "./styles";

interface RemoveToolProps {
  title: string;

  handleHiddenModal: () => void;
  // handleRemoveTool: (id: number) => void;
  handleRemoveTool: Function;
}

export default function RemoveTool({
  title,
  handleHiddenModal,
  handleRemoveTool,
}: RemoveToolProps) {
  return (
    <Container>
      <Content>
        <header>X Remove tool</header>
        <p>Are you sure you want to remove {title}?</p>
        <div>
          <Button onClick={handleHiddenModal}>Cancel</Button>
          <Button
            onClick={() => {
              handleRemoveTool();
            }}
          >
            Yes, remove
          </Button>
        </div>
      </Content>
    </Container>
  );
}
