"use client";
import styles from "./styles.module.css";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import { useState } from "react";

interface AuthProps {
  onChange: (user: string) => void;
}

export const Auth = ({ onChange }: AuthProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleConfirm = () => {
    onChange(inputValue);
  };

  return (
    <div className={styles.auth}>
      <h1>Привет! Для работы в системе введите свое имя</h1>
      <Form onSubmit={handleConfirm}>
        <FloatingLabel
          controlId="floatingInput"
          label="Введите ваше имя"
          className="mb-3"
        >
          <Form.Control
            type="name"
            placeholder="Иванов Иван"
            onInput={(e) => setInputValue((e.target as HTMLInputElement).value)}
          />
        </FloatingLabel>
        <Button type="submit" disabled={!inputValue} size="lg">
          Подтвердить
        </Button>
      </Form>
    </div>
  );
};
