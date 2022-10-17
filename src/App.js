import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import logot from "./assests/img/logot.png";
import logo from "./assests/img/logo.png";
import lplan from "./assests/img/lplane.png";
import logowater from "./assests/img/logowater.png";

import engineer from "./assests/img/services/engineer.png";
import repaire from "./assests/img/services/repaire.png";
import documentation from "./assests/img/services/documentation.png";
import staffing from "./assests/img/services/staffing.png";
import aero from "./assests/img/industry/aero.png";
import auto from "./assests/img/industry/auto.png";
import defence from "./assests/img/industry/defence.png";
import oil from "./assests/img/industry/oil.png";

import "./app.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Chip, TextField } from "@mui/material";
import { Button, Card, Grid, Avatar } from "@mui/material";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

import { services, industries, training } from "./Content/index";

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: "#252B5D" },
      secondary: { main: "#770C20" },
      info: { main: "#fff" },
    },
  });

  const [contactform, setcontactform] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [disabledcontact, setdisabledcontact] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;

    if (name === "phone" && value?.length > 10) {
      return;
    }

    setcontactform((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitContact = () => {
    setcontactform({});
  };
  useEffect(() => {
    if (!contactform?.firstname) {
      setdisabledcontact(true);
      return;
    }
    if (!contactform?.lastname) {
      setdisabledcontact(true);
      return;
    }

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    if (!contactform?.email || !validateEmail(contactform?.email)) {
      setdisabledcontact(true);
      return;
    }
    if (!contactform?.phone || contactform?.phone?.length < 10) {
      setdisabledcontact(true);
      return;
    }
    setdisabledcontact(false);
  }, [contactform]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "1rem 10rem" }}>
        {/* social */}
        <div
          style={{
            position: "fixed",
            right: 0,
            top: "30%",
            padding: "1rem",
            backgroundColor: "#fff",
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
          }}
          className="socialMenu"
        >
          <a>
            <div
              style={{
                marginBottom: "1rem",
                backgroundColor: "#252B5D",
                padding: "5px",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <FaFacebookF size={20} color="#fff" />
            </div>
          </a>
          <a>
            <div
              style={{
                marginBottom: "1rem",
                backgroundColor: "#252B5D",
                padding: "5px",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <FaInstagram size={20} color="#fff" />
            </div>
          </a>
          <a>
            <div
              style={{
                marginBottom: "1rem",
                backgroundColor: "#252B5D",
                padding: "5px",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <FaLinkedinIn size={20} color="#fff" />
            </div>
          </a>
          <a>
            <div
              style={{
                marginBottom: "1rem",
                backgroundColor: "#252B5D",
                padding: "5px",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <FaTwitter size={20} color="#fff" />
            </div>
          </a>
          <a>
            <div
              style={{
                backgroundColor: "#252B5D",
                padding: "5px",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <IoLogoWhatsapp size={20} color="#fff" />
            </div>
          </a>
        </div>
        {/* menu */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src={logot}
            alt="Takeoff Techno Solutions"
            style={{ width: 200 }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <p
              className="menuHover"
              style={{
                margin: 0,
                color: "#252B5D",
                fontSize: "1.2rem",
                marginRight: "1rem",
                fontWeight: 500,
              }}
            >
              Home
            </p>
            <p
              className="menuHover"
              style={{
                margin: 0,
                color: "#252B5D",
                fontSize: "1.2rem",
                marginRight: "1rem",
                fontWeight: 500,
              }}
            >
              Services
            </p>
            <p
              className="menuHover"
              style={{
                margin: 0,
                color: "#252B5D",
                fontSize: "1.2rem",
                marginRight: "1rem",
                fontWeight: 500,
              }}
            >
              Training
            </p>
            <p
              className="menuHover"
              style={{
                margin: 0,
                color: "#252B5D",
                fontSize: "1.2rem",
                marginRight: "1rem",
                fontWeight: 500,
              }}
            >
              About Us
            </p>
            <p
              className="menuHover"
              style={{
                margin: 0,
                color: "#252B5D",
                fontSize: "1.2rem",
                marginRight: "1rem",
                fontWeight: 500,
              }}
            >
              Contact Us
            </p>
            <Button
              size="large"
              color="secondary"
              variant="contained"
              style={{ borderRadius: "2rem" }}
            >
              Join Us
            </Button>
          </div>
        </div>
        {/* landing page */}
        <div>
          <img src={lplan} alt="" style={{ width: "100%" }} />
        </div>
        {/* industries */}
        <div
          style={{
            marginBottom: "3rem",
            backgroundColor: "#252B5D",
            padding: "3px",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: "1.6rem",
            }}
          >
            We serve you!
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            {industries?.map((item, ii) => (
              <div
                key={ii}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
              >
                <Avatar
                  sx={{ width: 60, height: 60 }}
                  alt={item?.title}
                  src={
                    item?.image === "aero"
                      ? aero
                      : item?.image === "auto"
                      ? auto
                      : item?.image === "defence"
                      ? defence
                      : oil
                  }
                  style={{ marginRight: "10px" }}
                />
                {item?.title}
              </div>
            ))}
          </div>
        </div>
        {/* services */}
        <div
          style={{
            // backgroundColor: "rgba(37,43,93,0.1)",
            padding: "1rem",
            marginBottom: "3rem",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Services
          </p>

          <Grid container spacing={8}>
            {services?.map((item, ii) => (
              <Grid item xs={6} key={ii} spacing={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={
                        item?.image === "staffing"
                          ? staffing
                          : item?.image === "repaire"
                          ? repaire
                          : item?.image === "documentation"
                          ? documentation
                          : engineer
                      }
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item?.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {item?.content}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>

        {/* training */}
        <div
          style={{
            // backgroundColor: "rgba(118,89,255,0.1)",
            padding: "1rem",
            marginBottom: "3rem",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              fontSize: "2rem",
            }}
          >
            Training
          </p>
          <Grid container spacing={4}>
            {training?.map((item, ii) => (
              <Grid item xs={4} key={ii} spacing={4}>
                <Card style={{}}>
                  <CardActionArea>
                    {/* <CardMedia
                      component="img"
                      height="160"
                      image={
                        item?.image === "staffing"
                          ? staffing
                          : item?.image === "repaire"
                          ? repaire
                          : item?.image === "documentation"
                          ? documentation
                          : engineer
                      }
                      alt="green iguana"
                    /> */}
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item?.title}
                      </Typography>
                      {item?.tag?.map((tagi, it) => (
                        <Chip
                          size="small"
                          label={tagi}
                          key={it}
                          variant="outlined"
                          color="secondary"
                          style={{ marginRight: "5px", marginBottom: "5px" }}
                        />
                      ))}
                      <Typography variant="subtitle1" color="text.secondary">
                        {item?.content}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      color="primary"
                      variant="contained"
                      style={{ borderRadius: "2rem" }}
                    >
                      Apply Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        {/* Join community */}
        <div style={{ margin: "1rem", marginBottom: "2rem" }}></div>
        {/* about us */}
        <div style={{ margin: "1rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p
              style={{
                fontSize: "2rem",
                textAlign: "center",
                margin: 0,
                padding: "10px",
                backgroundColor: "#252B5D",
                color: "#fff",
                width: 300,
                borderTopRightRadius: "4rem",
                borderTopLeftRadius: "4rem",
              }}
            >
              Who are we?
            </p>
          </div>
          <div
            style={{
              border: "2px solid #252B5D",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={logo} alt="" />
            </div>
            <p style={{ fontSize: "1.2rem" }}>
              TakeOff Techno Solutions Pvt. Ltd. formerly known as TakeOff
              Aviation provides technical publication and engineering services
              in the field of aerospace, defense, automobile, and oil & gas
              industries.
            </p>
            <p style={{ fontSize: "1.2rem" }}>
              We are engineers, technical authors, illustrators, editors, and
              information architects who have extensive experience in delivering
              projects that are globally spread with varied program guidelines,
              standards, and compliance needs. Our goal is to always lower your
              cost, provide accurate information, help you to increase product
              sales, and raise customer satisfaction. We provide an outsourcing
              service, in which we support our customers in projects and skills,
              both in-house and offshore.
            </p>
          </div>
        </div>
        {/* contact us */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2rem",
            margin: "1rem",
            //  backgroundColor: "#fcfdff",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              maxWidth: 450,
            }}
          >
            <p
              style={{
                color: "#252B5D",
                fontSize: "2rem",
                fontWeight: "500",
                marginBottom: "0",
              }}
            >
              Get in Touch
            </p>
            <p style={{ fontSize: "1rem" }}>
              Contact us today to know how our strategic solutions can help your
              organisation to takeoff…
            </p>
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "500",
                color: "#b8b8b8",
              }}
            >
              Headquarters
            </p>
            <p style={{ fontSize: "1.2rem" }}>
              <span>114, Jakkur,</span>
              <br />
              <span>Bangalore, 560064</span>
            </p>
            <a href="tel:+918088853145" style={{ textDecoration: "none" }}>
              <p
                style={{
                  fontSize: "1.2rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                <FaPhoneAlt
                  style={{ marginRight: "5px" }}
                  size={18}
                  color="#1052ba"
                />
                +91 8088853145
              </p>
            </a>
            <a href="mailto:info@totspl.com" style={{ textDecoration: "none" }}>
              <p
                style={{
                  fontSize: "1.2rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                <IoMdMail style={{ marginRight: "5px" }} color="#1052ba" />
                info@totspl.com
              </p>
            </a>
          </div>
          <div>
            <div>
              <TextField
                required
                size="small"
                style={{ width: "30vw", marginBottom: "1rem" }}
                label="First Name"
                value={contactform?.firstname ? contactform?.firstname : ""}
                name="firstname"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                required
                size="small"
                style={{ width: "30vw", marginBottom: "1rem" }}
                label="Last Name"
                value={contactform?.lastname ? contactform?.lastname : ""}
                name="lastname"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                required
                size="small"
                style={{ width: "30vw", marginBottom: "1rem" }}
                label="Email"
                value={contactform?.email ? contactform?.email : ""}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                type={"number"}
                required
                size="small"
                style={{ width: "30vw", marginBottom: "1rem" }}
                label="Mobile No."
                value={contactform?.phone ? contactform?.phone : ""}
                name="phone"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                size="small"
                style={{ width: "30vw", marginBottom: "1rem" }}
                label="Comment"
                multiline
                rows={3}
                value={contactform?.comment ? contactform?.comment : ""}
                name="comment"
                onChange={handleChange}
              />
            </div>
            <div>
              <Button
                disabled={disabledcontact}
                size="large"
                color="primary"
                variant="contained"
                style={{ width: "30vw" }}
                onClick={handleSubmitContact}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div
        style={{
          backgroundColor: "#252B5D",
          padding: "1rem 10rem",
          paddingBottom: "5rem",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: "1.4rem" }}>TakeOff Techno Solutions</p>
            <p style={{ fontSize: "1rem" }}>
              <span>114, Jakkur,</span>
              <br />
              <span>Bangalore, 560064</span>
            </p>
            <a href="tel:+918088853145" style={{ textDecoration: "none" }}>
              <p
                style={{
                  fontSize: "1rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <FaPhoneAlt
                  style={{ marginRight: "5px" }}
                  size={16}
                  color="#fff"
                />
                +91 8088853145
              </p>
            </a>
            <a href="mailto:info@totspl.com" style={{ textDecoration: "none" }}>
              <p
                style={{
                  fontSize: "1rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <IoMdMail
                  size={16}
                  style={{ marginRight: "5px" }}
                  color="#fff"
                />
                info@totspl.com
              </p>
            </a>
          </div>
          <div>
            <p style={{ fontSize: "1.4rem" }}>Services</p>
            <p style={{ fontSize: "1rem" }}>Aerospace</p>
            <p style={{ fontSize: "1rem" }}>Automotive</p>
            <p style={{ fontSize: "1rem" }}>Defence</p>
            <p style={{ fontSize: "1rem" }}>Oil & Gas</p>
          </div>
          <div>
            <p style={{ fontSize: "1.4rem" }}>Training</p>
            <p style={{ fontSize: "1rem" }}>Documentation</p>
            <p style={{ fontSize: "1rem" }}>Internship</p>
            <p style={{ fontSize: "1rem" }}>Technical Publication</p>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#d9d9d9",
            marginTop: "2rem",
            fontSize: "14px",
          }}
        >
          All rights reserved, TakeOff Techno Solutions @2022.
        </p>
      </div>
      {/* promotion */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          backgroundColor: "#fff",
        }}
        className="promotionShadow"
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(37,43,93)",
            color: "#fff",
            padding: "1rem",
          }}
        >
          <p
            style={{
              textAlign: "center",
              margin: 0,
              paddingRight: "2rem",
              fontSize: "1.4rem",
            }}
          >
            We are runnuing this offer specialy for you!
          </p>
          <Button
            size="large"
            color="info"
            variant="contained"
            style={{ borderRadius: "2rem", backgroundColor: "white" }}
          >
            Call Now
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
