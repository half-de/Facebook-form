import { useState } from "react";

const Footer = () => {
    const [firstname, setFirstname] = useState("");
    const [firstnamemsg, setFirstnamemsg] = useState("Enter your first name");
    const [ShowfirstnameError, setFirstnameError] = useState(false);


    const [surename, setSurename] = useState("");
    const [surenamemsg, setSurenamemsg] = useState("Enter your sure name");
    const [ShowsurenameError, setsurenameError] = useState(false);

    const [email, setemail] = useState("");
    const [emailmsg, setemailmsg] = useState("Enter your email");
    const [ShowemailError, setemailError] = useState(false);

    const [password, setpassword] = useState("");
    const [passwordmsg, setpasswordmsg] = useState("Enter your password");
    const [ShowpasswordError, setpasswordError] = useState(false);



    const userFirstnameHandler = (e) => {
        setFirstname(e.target.value);
        if (firstname !== "") {
            // setFirstnameError(false)
            setFirstnamemsg("Look's Good")
        }

    }

    const userSurenameHandler = (e) => {
        setSurename(e.target.value);
        if (surename !== "") {
            // setsurenameError(false)
            setSurenamemsg("Look's Good")
        }
    }

    const useremailHandler = (e) => {
        setemail(e.target.value);
        if (email !== "") {
            // setemailError(false)
            setemailmsg("Look's Good")
        }
    }

    const userpasswordHandler = (e) => {
        setpassword(e.target.value);
        if (password !== "") {
            // setpasswordError(false)
            setpasswordmsg("Look's Good")
        }

    }

    const SubmitHandler = (e) => {
        e.preventDefault()
        if (firstname === "") {
            setFirstnameError(true)
        }

        if (surename === "") {
            setsurenameError(true)
        }

        if (email === "") {
            setemailError(true)
        }

        if (password === "") {
            setpasswordError(true)
        }


    }

    return (
        <div className="body">
            <h1 className="fb">facebook</h1>
            <div className="main">
                <h3>Create a new Account</h3>
                <h5>its quick and easy</h5>
                <hr />
                <form onSubmit={SubmitHandler}>

                    <input value={firstname} onChange={userFirstnameHandler} type="text" placeholder="First Name" className="firstname" />
                    {ShowfirstnameError && <p className={`${firstnamemsg === "Look's Good" ? "text-success": "text-danger"} fw-bold`}>{firstnamemsg}</p>}

                    <input value={surename} onChange={userSurenameHandler} type="text" placeholder="Sure Name" className="surename" />
                    {ShowsurenameError && <p className={`${surenamemsg === "Look's Good" ? "text-success": "text-danger"} fw-bold`}>{surenamemsg}</p>}

                    <input value={email} onChange={useremailHandler} type="email" placeholder="Email" className="email" />
                    {ShowemailError && <p className={`${emailmsg === "Look's Good" ? "text-success": "text-danger"} fw-bold`}>{emailmsg}</p>}

                    <br />
                    <input value={password} onChange={userpasswordHandler} type="password" placeholder="Password" className="password" />
                    {ShowpasswordError && <p className={`${passwordmsg === "Look's Good" ? "text-success": "text-danger"} fw-bold`}>{passwordmsg}</p>
                    }
                    <br />
                    <button className="btn btn-success">Sign Up</button>
                
                </form>
            </div>
        </div>
    );
}

export default Footer;
