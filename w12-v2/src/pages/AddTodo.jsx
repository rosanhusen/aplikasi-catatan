import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../utils/local";
import "../App.css";

function AddTodo(props) {
  const navigate = useNavigate();

  const [todo, setTodo] = useState({
    title: "",
    createdAt: "",
    description: "",
  });

  function onSubmitHandler(event) {
    event.preventDefault();
    addTodo(todo);
    navigate("/");
  }

  return (
    <div className="p-2 filter">
      <strong className="fs-1 text-center text-light">Tambah catatan</strong>
      <Form
        className="row g-3 m-5 text-light"
        onSubmit={(event) => {
          onSubmitHandler(event);
        }}
      >
        <Form.Group className="col-md-6 text-start">
          <Form.Label>Judul</Form.Label>
          <Form.Control
            onChange={(event) => {
              const value = event.target.value;
              setTodo({ ...todo, title: value });
            }}
            type="text"
            placeholder="Tambahkan judul"
            required
          />
        </Form.Group>
        <Form.Group className="col-md-6 text-start">
          <Form.Label>CreatedAt</Form.Label>
          <Form.Control
            onChange={(event) => {
              const value = event.target.value;
              setTodo({ ...todo, createdAt: value });
            }}
            type="date"
            required
          />
        </Form.Group>
        <Form.Group className="col-12 text-start">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control
            onChange={(event) => {
              const value = event.target.value;
              setTodo({ ...todo, description: value });
            }}
            type="text"
            placeholder="Tambah deskripsi"
            as="textarea"
            rows={3}
            required
          />
        </Form.Group>
        {todo.title && todo.createdAt && todo.description ? (
          <Button
            className="col-2 btn-outline-primary position-relative start-50 translate-middle-x"
            variant="light"
            type="submit"
          >
            Create
          </Button>
        ) : (
          <Button
            className="col-2 text-success-emphasis position-relative start-50 translate-middle-x"
            variant="light"
            type="submit"
            disabled
          >
            Create
          </Button>
        )}
      </Form>
    </div>
  );
}

export default AddTodo;