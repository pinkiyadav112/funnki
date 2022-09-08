import { Link , useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";

export default function Login() {
    const [value, setValue] = React.useState({
        email: "",
        password: ""
    })
    const [Errormsg, setErrormsg] = React.useState('')
    const [submitbuttondisable, setSubmitbuttondisable] = React.useState(false)
    const navigate = useNavigate();
    const hendalSummition = () => {

        if (!value.email || !value.password) {
            setErrormsg("All fields required ")
        } else {
            setErrormsg('')
            setSubmitbuttondisable(true)
            signInWithEmailAndPassword(auth, value.email, value.password)
                .then((res) => {
                    setSubmitbuttondisable(false)
                    console.log(res)
                    navigate("/")
                })

                .catch((err) => {
                    console.log("sacsc",err.message)
                    setErrormsg(err.message)
                    setSubmitbuttondisable(false)
                })
        }
    }
    return (
        <>
            <section  >
                <div className="container py-4 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" >
                                <div className="card-body p-5 ">
                                    <h3 className="mb-5">Sign in</h3>
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
                                    <b>{Errormsg}</b><br />
                                    <button className="btn btn-primary btn-lg btn-block" type="submit" disabled={submitbuttondisable} onClick={hendalSummition}>Login</button>
                                    <hr className="my-4" />
                                    <Link to='/signup'> <label className="form-check-label" > Don't have an account? Register here </label></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}