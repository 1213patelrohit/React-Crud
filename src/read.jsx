import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Read = () => {
  const [data, setdata] = useState([]);

  const [tabledark, settabledark] = useState("");

  function getdata() {
    axios
      .get("https://6436a5228205915d34f90c10.mockapi.io/crudproject")
      .then((res) => {
        setdata(res.data);
      });
  }

  const settolocalstorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  useEffect(() => {
    getdata();
  }, []);
  // const history=useNavigate()

  function handleDelete(id) {
    axios
      .delete(`https://6436a5228205915d34f90c10.mockapi.io/crudproject/${id}`)
      .then(() => {
        getdata();
      });
  }
  return (
    <>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={() => {
            if (tabledark === "table-dark") settabledark("");
            else settabledark("table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Read opration</h2>

        <Link to="/">
          {" "}
          <button className="btn btn-primary">create</button>
        </Link>
      </div>
      <table
        className={`table ${tabledark}`}
        style={{
          width: "80%",
          border: "2px solid ",
          marginLeft: "100px",
          marginTop: "100px",
          padding: "20px",
        }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachdata) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachdata.id}</th>
                  <td>{eachdata.name}</td>
                  <td>{eachdata.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          settolocalstorage(
                            eachdata.id,
                            eachdata.name,
                            eachdata.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(eachdata.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
