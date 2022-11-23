import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        className="mx-3"
        variant="success"
        onClick={() => {
          navigate("/customer/register");
        }}
      >
        {" "}
        Customer Register
      </Button>
      <Button
        variant="success"
        onClick={() => {
          navigate("/admin/register");
        }}
      >
        {" "}
        Admin Register
      </Button>
    </>
  );
};

export default Home;
