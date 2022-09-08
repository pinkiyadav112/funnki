import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { auth } from "../../firebase";
export default function Signup() {

    const [value, setValue] = React.useState({
        name: "",
        email: "",
        password: ""
    })
    const [Errormsg, setErrormsg] = React.useState('')
    const [submitbuttondisable, setSubmitbuttondisable] = React.useState(false)
    const navigate = useNavigate();
    const hendalSummition = () => {
       
        if (!value.name || !value.email || !value.password) {
            setErrormsg("All fields required ")
        } else setErrormsg('')
        setSubmitbuttondisable(true)
        createUserWithEmailAndPassword(auth, value.email, value.password)
            .then(async (res) => {
                setSubmitbuttondisable(false)
                const user = res.user;
                await updateProfile(user, {
                    displayName: value.name
                })
                navigate("/login")
                console.log(res)

            })
            .catch((err) => {
                console.log(err)
                setErrormsg(err.message)
                setSubmitbuttondisable(false)
            })
    }
    return (
        <>
            <section  >
                <div className="container py-4 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" >
                                <div className="card-body p-5 ">
                                    <h3 className="mb-5">Sign Up</h3>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" >Name</label>
                                        <input type="email" id="typeNameX-2" className="form-control form-control-lg"
                                            onChange={(event) => setValue((prev) => ({ ...prev, name: event.target.value }))} />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" >Email</label>
                                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg"
                                            onChange={(event) => setValue((prev) => ({ ...prev, email: event.target.value }))} />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" >Password</label>
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg"
                                            onChange={(event) => setValue((prev) => ({ ...prev, password: event.target.value }))} />
                                    </div>
                                    <b>{Errormsg}</b>
                                    <br />
                                    <button className="btn btn-primary btn-lg btn-block" disabled={submitbuttondisable} type="submit" onClick={hendalSummition}>Register</button>
                                    <hr className="my-4" />
                                    <Link to='/signup'> <label className="form-check-label" > Login here </label></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}