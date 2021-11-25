import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import Picture from "../image/logoProduct.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const Links = () => {
  return (
    <Navbar style={{ height: "80px" }} bg="light" className="shadow">
      <Container>
        <Navbar.Brand>
          <img
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "100px",
            }}
            src={Picture}
            alt="logo"
          />

          
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse
          style={{ marginRight: "12px" }}
          className="justify-content-end"
        >
          <Link
            style={{
              marginRight: "2rem",
              textDecoration: "none",
              color: "#576574",
              fontSize: "17px",
            }}
            to="/"
          >
            ໜ້າຫຼັກ
          </Link>
          <Link
            style={{
              marginRight: "2rem",
              textDecoration: "none",
              color: "#576574",
              fontSize: "17px",
            }}
            to="/About"
          >
            ກຽ່ວກັບ
          </Link>
          <Link
            style={{
              marginRight: "2rem",
              textDecoration: "none",
              color: "#576574",
              fontSize: "17px",
            }}
            to="/Contact"
          >
            ຕິດຕໍ່ພວກເຮົາ
          </Link>

          <Link 
            style={{
              marginRight: "2rem",
              textDecoration: "none",
              color: "#576574",
              fontSize: "17px",

            }}
            to="/Cart"
          >
            <FontAwesomeIcon style={{fontSize:'20px',color:'#ee5253'}} icon={faCartPlus}/>  
          </Link>

          <Link
            style={{
              marginRight: "2rem",
              textDecoration: "none",
              color: "#576574",
              fontSize: "17px",
            }}
            to="/Login"
          >
              ເຂົ້າສູ່ລະບົບ
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Links;
