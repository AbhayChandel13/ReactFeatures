import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUser = () => {
  let navigate = useNavigate();
  const [newdata, setNewdata] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setNewdata({ ...newdata, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { userId, id, title, body } = newdata;

    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, id, title, body }),
    });
    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      toast.error(" Invalid Data", {
        position: "top-center",
      });
      console.log("Invalid  Data");
    } else {
      toast.success("Data Added Successfully!", {
        position: "top-center",
      });
      console.log("Data Added Successful");

      setTimeout(function () {
        navigate("/", { replace: true });
      }, 2000);
    }
  };
  return (
    <div>
      <ToastContainer />
      <form className="user mt-2 mb-3 p-3 d-flex flex-column justify-content-center align-items-center">
        <div className="form-group col-sm-8 mb-3">
          <h1> CREATE : </h1>
          <input
            type="text"
            name="userId"
            className="form-control input-lg  form-control-user "
            id="userid"
            placeholder="Enter UserId"
            value={newdata.userId}
            onChange={handleInputs}
          />
        </div>

        <div className="form-group col-sm-8 mb-3">
          <input
            type="text"
            name="id"
            className="form-control form-control-user"
            id="id"
            placeholder="Enter ID"
            value={newdata.id}
            onChange={handleInputs}
          />
        </div>



        <div className="form-group col-sm-8 mb-3">
          <input
            type="text"
            name="title"
            className="form-control form-control-user"
            id="title"
            placeholder="Enter Title"
            value={newdata.title}
            onChange={handleInputs}
          />
        </div>
        <div className="form-group col-sm-8 mb-3">
          <input
            type="text"
            name="body"
            className="form-control form-control-user"
            id="body"
            placeholder="Enter Body"
            value={newdata.body}
            onChange={handleInputs}
          />
        </div>

        <div className="mt-4 mb-0">
          <div className="d-grid">
            <NavLink
              className="btn btn-primary btn-user btn-block"
              to="/"
              name="signup"
              id="signup"
              value="register"
              onClick={PostData}
            >
              Add Data
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
