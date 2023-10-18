import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditUser = () => {
    const [user, setUser] = useState({firstName:"",lastName:"",email:""})
   let navigate = useNavigate();

   const {id}=useParams()

    const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
    };
    const {firstName,lastName,email}=user;

    useEffect(()=>{
        loadUser()
    },[]);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:2312/user/${id}`,user);
        navigate("/");
    };
    const  loadUser = async ()=>{
        const result = await axios.get(`http://localhost:2312/user/${id}`)
        setUser(result.data)
    }
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4">Edit User</h2>
                        <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type={"text"} className="form-control" placeholder="Enter Your First name" name="firstName" value={firstName}
                            onChange={(e)=>onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type={"text"} className="form-control" placeholder="Enter Your Last name" name="lastName" value={lastName}
                            onChange={(e)=>onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">E-mail</label>
                            <input type={"text"} className="form-control" placeholder="Enter Your E-mail" name="email" value={email}
                            onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        <div className="text-center">
                        <button type="submit"   className="btn btn-outline-primary">Submit</button>
                        <Link to="/" className="btn btn-outline-danger ms-2">Cancel</Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
export default EditUser;