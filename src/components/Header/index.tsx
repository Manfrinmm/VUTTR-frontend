import { useAuth } from "../../hooks/auth";
import Button from "../Button";
import { Container } from "./styles";

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <p>Hello, {user.name.split(" ")[0]}</p>

      <Button onClick={signOut} type="button">
        Sign out
      </Button>
    </Container>
  );
}
