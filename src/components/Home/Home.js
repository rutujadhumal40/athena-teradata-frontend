import react from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleOnClick = async () => {
    navigate('/getData');
  };
  return (
    <>
      <Header />
      <Button onClick={() => handleOnClick()}> Get Data</Button>
    </>
  );
};

export default Home;
