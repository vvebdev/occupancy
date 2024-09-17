import styles from "./card.module.css";
import { Button, Card } from "react-bootstrap";
import type { Stand } from "../api/types";

interface Props {
  stand: Stand;
  onClick: () => void;
}

export const StandCard = ({ stand, onClick }: Props) => {
  return (
    <Card>
      <Card.Body>
        <div className={styles.wrapper}>
          <div>
            <h3 style={{ marginBottom: 0 }}>{stand.name}</h3>
            {stand.status === "free" && (
              <span className={styles.labelFree}>свободно</span>
            )}
            {stand.status === "busy" && (
              <span className={styles.labelBusy}>занял: {stand.user}</span>
            )}
          </div>
          <div className={styles.button}>
            <Button onClick={onClick}>
              {stand.status === "free" ? "Занять" : "Освободить"}
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
