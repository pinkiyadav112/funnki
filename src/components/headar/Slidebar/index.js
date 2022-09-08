import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import style from "./index.module.scss"
export default function Slidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <MenuIcon onClick={handleShow} className={style.manu} />
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Divider />
                <Offcanvas.Body>
                    <h4>jnwdn</h4>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

