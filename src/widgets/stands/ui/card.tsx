import styles from "./card.module.css";
import { Card, ListGroup } from "react-bootstrap";
import type { Stand } from "../api/types";
import { Switch } from "./switch";

interface Props {
  stand: Stand;
  onChange: () => void;
}

export const StandCard = ({ stand, onChange }: Props) => {
  const isFree = stand.status === "free";
  const cardBgProp = isFree ? "dark" : "primary";

  return (
    <Card bg={cardBgProp}>
      <Card.Header>
        <span className={styles.header}>
          {stand.name}
          <Switch checked={isFree} onChange={onChange} />
        </span>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          backend: <i className="text-muted">(в разработке)</i>
        </ListGroup.Item>
        <ListGroup.Item>
          frontend: <i className="text-muted">(в разработке)</i>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className={styles.chips}>
            {isFree ? (
              <span className={styles.chipFree}>свободен</span>
            ) : (
              <>
                <span className={styles.chipBusy}>занят</span>
                {/* <span className={styles.chip}>16 июня</span> */}
                <span className={styles.chip}>{stand.user}</span>
              </>
            )}
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};
