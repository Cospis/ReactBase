// import node module libraries
import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

import {
  Nav,
  Navbar,
  InputGroup,
  Dropdown,
  Form,
  ListGroup,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Image,
} from "react-bootstrap";

// import simple bar scrolling used for notification item scrolling

// import custom components

// import media files

// import data files

import { useSelector } from "react-redux";
import { CustomText } from "../components/CustomText";

const HeaderDefault = (props) => {
  const { user, token, isAuthenticated, role, adminStatus } = useSelector(
    (state) => state.userAuth
  );

  const history = useHistory();

  console.log("user", user, isAuthenticated);
  console.log("adminStatus", adminStatus);
  return (
    <Fragment>
      <Navbar expanded="lg" className="navbar-default">
        <Col className="d-flex justify-content-between w-100">
          <Col lg={1} md={1} sm={1} onClick={() => history.push("/")}>
            <div className="d-flex align-items-center">
              <img src={""} alt="logo" style={{ width: "55px" }} />
            </div>
          </Col>
          <Col lg={1} md={1} sm={1} onClick={() => history.push("/")}>
            <CustomText
              fontFamily={"Inter"}
              fontSize={40}
              text={"QMS"}
              textClassName="text-white text-center"
              fontWeight={700}
            />
          </Col>
          <Col lg={10} md={10} sm={10} className="d-flex justify-content-end">
            <Nav className="navbar-nav navbar-right-wrap ms-auto d-flex align-items-center nav-top-wrap">
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  as={Nav.Link}
                  bsPrefix="dt"
                  className="rounded-circle border-bottom-0"
                  id="dropdownUser"
                >
                  <div className="avatar avatar-md avatar-indicators avatar-online">
                    {/* <ProfileSvg /> */}
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="dashboard-dropdown dropdown-menu-end mt-4 py-0"
                  aria-labelledby="dropdownUser"
                  align="end"
                >
                  <Dropdown.Item
                    className="m-3"
                    onClick={() => history.push("/profile")}
                  >
                    <div className="d-flex">
                      <div className="avatar avatar-md avatar-indicators avatar-online">
                        {/* <ProfileSvg /> */}
                      </div>
                      <div className="ms-3 lh-1">
                        <h5 className="mb-1">{`${user.firstName} ${user.lastName}`}</h5>
                        <p className="mb-0 text-muted">{user.email}</p>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  {user.adminStatus && (
                    <Dropdown.Item className="mb-3">
                      <Link to={"/admin"}>Admin Dashboard</Link>
                    </Dropdown.Item>
                  )}
                  <Dropdown.Item className="mb-3">
                    <i className="fe fe-power me-2"></i>{" "}
                    <Link to={"/login"}>Log Out</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Col>
        </Col>
      </Navbar>
    </Fragment>
  );
};

export default HeaderDefault;
