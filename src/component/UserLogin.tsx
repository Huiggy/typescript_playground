import { useContext, useState } from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Context } from "./Context";

function UserLogin() {

    const [user, setUser] = useState("Guest");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <p>Hi {user}!</p>
            <p>Welcome to Access Workspace</p>
            <Button variant="primary" onClick={handleShow}>
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body><p><label><b>Email</b></label></p>
                    <p><input type="text" className="form-control"></input></p>
                    <p><label><b>Password</b></label></p>
                    <p><input type="password" className=" form-control"></input></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Login
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <br />
            <br />
        </>
    );
}

export default UserLogin;