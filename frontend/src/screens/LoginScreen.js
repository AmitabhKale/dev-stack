import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { toast } from "react-toastify";
import { useSelector,useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {email, password } = formData;

  const dispatch = useDispatch();

  const {user, isLoading, isSuccess, message } = useSelector(state => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!password) {
        toast.error("Enter Password")
    }
    const userData = {
      email,
      password
    }

    dispatch(login(userData))

  };

  return (
    <FormContainer>
      <h2 className="text-secondary">Login</h2>

      <Form onSubmit={submitHandler} className="mb-2">

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="info" type="submit">
          LOG IN
        </Button>
      </Form>

    </FormContainer>
  );
};

export default LoginScreen;
