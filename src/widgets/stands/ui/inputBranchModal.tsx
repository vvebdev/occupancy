import {
  Modal,
  // Form,
  // FloatingLabel,
  // Button,
  // ButtonGroup,
} from "react-bootstrap";
import type { Stand } from "../api/types";

interface Props {
  value: Stand;
  isShow: boolean;
  onClose: () => void;
}

export const InputBranchModal = ({
  // value,
  isShow,
  onClose,
}: Props) => {
  return (
    <Modal show={isShow} onHide={onClose}>
      <Modal.Header closeButton>
        {/* <Modal.Title>
          <span className="text-muted">стенд</span> {value.name}
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <h1 style={{ textAlign: "center" }}>COMING SOON!</h1>
        {/* {JSON.stringify(value)} */}
        {/* <Form>
          <ButtonGroup className="w-100 mb-3">
            <Button
              variant="outline-primary"
              onClick={() => {}}
              className="w-100"
            >
              Свободен
            </Button>
            <Button variant="primary" onClick={() => {}} className="w-100">
              Занят
            </Button>
          </ButtonGroup>
          <FloatingLabel label="backend branch" className="mb-3">
            <Form.Control placeholder="PVP-9999" value={"PVP-9999"} autoFocus />
          </FloatingLabel>
          <FloatingLabel label="frontend branch" className="mb-4">
            <Form.Control placeholder="PVP-9999" value={"PVP-9999"} />
          </FloatingLabel>
          <Button type="submit" className="w-100">
            Сохранить
          </Button>
        </Form> */}
      </Modal.Body>
    </Modal>
  );
};
