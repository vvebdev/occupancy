import styles from "./styles.module.css";
import { Button } from "react-bootstrap";

interface Props {
  onQuit: () => void;
}

export const Header = ({ onQuit }: Props) => {
  const user = localStorage.getItem("user");

  return (
    <header className={styles.header}>
      <h2>Привет, {user}!</h2>
      <Button variant="outline-danger" onClick={onQuit}>
        Выйти
      </Button>
    </header>
  );
};
