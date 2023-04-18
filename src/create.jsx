import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const history = useNavigate();

  const header = { "Access-Control-Allow-origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://6436a5228205915d34f90c10.mockapi.io/crudproject", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        history("/read");
      });
  };

  return (
    <>
      <div
        style={{
          width: "80%",
          border: "2px solid ",
          marginLeft: "100px",
          marginTop: "100px",
          padding: "20px",
        }}
      >
        <div className="d-flex justify-content-between m-2">
          <h2> Create</h2>
          <Link to="/read">
            <button className="btn btn-primary ">Show Data</button>
          </Link>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
            style={{ marginLeft: "500px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;

// App.jsx File
