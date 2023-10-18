import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state



  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      // Simulate a delay of 2 seconds
      // Replace this with your actual API call
      setTimeout(async () => {
        const response = await axios.get("http://localhost:2312/users");
        setUser(response.data);
        setLoading(false); // Set loading to false once data is loaded
      }, 2000);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:2312/user/${id}`);
    loadUsers();
  };

  return (
    <>
      <div className="container">
        <div className="py-4">
          {loading ? (
            <Spinner animation="border bg-success item-center" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <table className="table border shadow">
              <thead>
                <tr>
                  <th>SI</th>
                  <th>FName</th>
                  <th>LName</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>
                        <Link
                          to={`/view/${user.id}`}
                          className="btn btn-success mx-1 pb-1"
                        >
                          View
                        </Link>
                        <Link
                          to={`/edituser/${user.id}`}
                          className="btn btn-outline-primary pb-1 mx-2"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="btn btn-danger mx-2 pb-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
           
            </table>
          )}
        </div>
      </div>
      <div className="py-2">
        <Link className="btn btn-outline-primary" to="/adduser">
          Add User
        </Link>
      </div>
    </>
  );
};

export default Home;
