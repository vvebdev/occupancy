import styles from "./card.module.css";
import { Card, ListGroup } from "react-bootstrap";
import { Switch } from "./switch";
import type { Stand } from "../api/types";

interface Props {
  stand: Stand;
  onChange: () => void;
  onEdit: (stand: Stand) => void;
}

export const StandCard = ({ stand, onChange, onEdit }: Props) => {
  const isFree = stand.status === "free";
  const cardBgProp = isFree ? "dark" : "primary";

  return (
    <Card bg={cardBgProp}>
      <Card.Header>
        <span className={styles.header}>
          <button className={styles.treeDots} onClick={() => onEdit(stand)}>
            {stand.name}
          </button>
          {/* {stand.name} */}
          <div style={{ marginLeft: "auto" }}></div>
          <Switch checked={isFree} onChange={onChange} />
          {/* <button className={styles.treeDots} onClick={() => onEdit(stand)}>
            &bull;&bull;&bull;
          </button> */}
        </span>
      </Card.Header>
      <ListGroup variant="flush">
        {/* <ListGroup.Item>
          backend: <i className="text-muted">(в разработке)</i>
        </ListGroup.Item>
        <ListGroup.Item>
          frontend: <i className="text-muted">(в разработке)</i>
        </ListGroup.Item> */}
        <ListGroup.Item>
          <div className={styles.chips}>
            {isFree ? (
              <span className={styles.chipFree}>свободен</span>
            ) : (
              <>
                <span className={styles.chipBusy}>занят</span>
                {/* <span className={styles.chip}>1 октября</span> */}
                <span className={styles.chip}>{stand.user}</span>
              </>
            )}
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};
