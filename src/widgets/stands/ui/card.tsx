import styles from "./card.module.css";
import { Card } from "react-bootstrap";
import type { Stand } from "../api/types";
import { Switch } from "./switch";

interface Props {
  stand: Stand;
  onChange: () => void;
}

export const StandCard = ({ stand, onChange }: Props) => {
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
          <div className={styles.controls}>
            <Switch checked={stand.status === "free"} onChange={onChange} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
