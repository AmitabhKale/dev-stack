import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTicket, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const NewTicketScreen = () => {
  // const {user} = useSelector((state) => state.auth)

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      navigate("/tickets");
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, message]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createTicket({title, description}))
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <h2>Create New Ticket</h2>
      <Card style={{ backgroundColor: "light" }}>
        {/* <FormLabel className="text-right position-absolute top-2 end-0">Amit</FormLabel> */}

        <Form className="px-5 m-2" onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
            />
          </Form.Group>

          <Row className="mt-4 mb-4">
            <Col md={3}>
              <p>Choose Ticket Priority</p>
            </Col>
            <Col>
              <Form.Group>
                <Form.Select>
                  <option value="priority">Priority</option>
                  <option value="blocker">Blocker</option>
                  <option value="low">Low Priority</option>
                  <option value="hotfix" className="bg-danger">
                    Hotfix
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-4 mb-4">
            <Col md={3}>
              <p>Assignee</p>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="IT service"
                  disabled
                  readOnly
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="outline-success" type="submit">Create</Button>
        </Form>
      </Card>
    </>
  );
};

export default NewTicketScreen;
