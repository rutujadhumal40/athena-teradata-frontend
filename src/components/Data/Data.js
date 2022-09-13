import react, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/Header";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./header.css";

const Data = (props) => {
  return (
    <>
      <header className="header">List Of Patients</header>

      <div style={{ margin: "30px" }}>
        <Table>
          <thead className="table-active">
            <tr>
              <th>ID</th>
              <th>Suffix</th>
              <th>First Name</th>
              <th>Laast Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {props.data.map((patient, index) => {
              const [suffix, firstName, lastName, status] = patient;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{suffix}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{status}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Data;
