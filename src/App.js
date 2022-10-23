import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import lplan from "./assests/img/lplane.png";
import logowater from "./assests/img/logowater.png";
import aboutimg from "./assests/img/about.png";
import "./app.css";
import { Button, Grid } from "@mui/material";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaFileAlt,
  FaTwitter,
  FaPhoneAlt,
  FaPlaneDeparture,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa";
import { color } from "@mui/system";

const Aircraft = () => {
  return <div></div>;
};
const Internship = () => {
  return (
    <div>
      <p style={{ fontSize: "2rem", color: "#252B5D", fontWeight: "500" }}>
        <FaUserTie style={{ marginRight: 10 }} />
        Internship
      </p>
      <p>
        Takeoff offers a platform to develop ready to deploy skills through our
        outcome driven internship and certification programmes crafted by
        industry experts to build your expertise and make you Industry ready.
        Join our programme to gain real time industry experience, learn from
        experienced mentors and takeoff your career.
      </p>
      <p>
        We are offering internship and certification programmes for Engineering
        graduates and aircraft Maintenance Engineers in technical writing,
        aircraft Maintenance and helicopter maintenance. For more details
        contact us or drop your resume to{" "}
        <a href="#contact">
          <span
            style={{
              textDecoration: "underline",
              color: "#770C20",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            hr@totspl.com
          </span>
        </a>
        .
      </p>
    </div>
  );
};
const Recruit = () => {
  return <div></div>;
};
const TechnicalPub = () => {
  return <div></div>;
};

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: "#252B5D" },
      secondary: { main: "#770C20" },
      info: { main: "#fff" },
    },
  });

  const [page, setpage] = useState(1);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "1rem 10rem" }} className="fullpage">
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
          id="home"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            src={logowater}
            alt="Takeoff Techno Solutions"
            style={{ width: 120 }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <a style={{ textDecoration: "none" }} href="#home">
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
            </a>
            <a style={{ textDecoration: "none" }} href="#service">
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
            </a>
            <a style={{ textDecoration: "none" }} href="#training">
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
                Career
              </p>
            </a>

            <a style={{ textDecoration: "none" }} href="#about">
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
            </a>
            <a style={{ textDecoration: "none" }} href="#contact">
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
            </a>

            {/* <Button
              size="large"
              color="secondary"
              variant="contained"
              style={{ borderRadius: "2rem" }}
            >
              Join Us
            </Button> */}
          </div>
        </div>
        {/* landing page */}
        <div style={{ margin: "10rem" }}>
          <img src={lplan} alt="" style={{ width: "100%" }} />
        </div>

        {/* services */}
        <div
          id="service"
          style={{
            // backgroundColor: "rgba(37,43,93,0.1)",
            padding: "1rem",
            marginBottom: "6rem",
            borderRadius: "8px",
          }}
        >
          <h1
            style={{ color: "#e4e4e4", fontSize: "3rem", textAlign: "center" }}
          >
            Services
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                width: "100%",
                height: "80vh",
              }}
            >
              <div
                style={{
                  borderTopLeftRadius: 50,
                  borderBottom: "1px #d9d9d9 solid",
                  padding: "1rem",
                  boxShadow: "10px 10px 21px 6px rgba(232, 238, 248, 0.75)",
                  cursor: "pointer",
                  backgroundColor: page === 1 ? "#002366" : "#f3f6fc",
                  color: page === 1 ? "#fff" : "#000",
                }}
                onClick={() => setpage(1)}
              >
                <p
                  style={{
                    fontSize: "1.4rem",
                    color: page === 1 ? "#fff" : "#002366",
                    fontWeight: "500",
                  }}
                >
                  <FaPlaneDeparture style={{ marginRight: 10 }} />
                  Aircraft Management & Maintenance
                </p>
                <p style={{ lineHeight: "2rem" }}>
                  Takeoff strives to understand your needs and develop
                  cost-effective outsourcing solutions for managing &
                  maintaining your aircraft
                </p>
                {page === 1 ? null : (
                  <p
                    style={{
                      textAlign: "right",
                      color: "#0F52BA",
                      margin: 0,
                      fontWeight: "500",
                    }}
                  >
                    Read More...
                  </p>
                )}
              </div>
              <div
                onClick={() => setpage(2)}
                style={{
                  borderBottom: "1px #d9d9d9 solid",
                  padding: "1rem",
                  boxShadow: "10px 10px 21px 6px rgba(232, 238, 248, 0.75)",
                  cursor: "pointer",
                  backgroundColor: page === 2 ? "#002366" : "#f3f6fc",
                  color: page === 2 ? "#fff" : "#000",
                }}
              >
                <p
                  style={{
                    fontSize: "1.4rem",
                    color: page === 2 ? "#fff" : "#002366",
                    fontWeight: "500",
                  }}
                >
                  <FaUserTie style={{ marginRight: 10 }} />
                  Internship
                </p>
                <p>Chance to learn from the professional mentors</p>
                {page === 2 ? null : (
                  <p
                    style={{
                      textAlign: "right",
                      color: "#0F52BA",
                      margin: 0,
                      fontWeight: "500",
                    }}
                  >
                    Read More...
                  </p>
                )}
              </div>
              <div
                onClick={() => setpage(3)}
                style={{
                  borderBottom: "1px #d9d9d9 solid",
                  padding: "1rem",
                  boxShadow: "10px 10px 21px 6px rgba(232, 238, 248, 0.75)",
                  cursor: "pointer",
                  backgroundColor: page === 3 ? "#002366" : "#f3f6fc",
                  color: page === 3 ? "#fff" : "#000",
                }}
              >
                <p
                  style={{
                    fontSize: "1.4rem",
                    color: page === 3 ? "#fff" : "#002366",
                    fontWeight: "500",
                  }}
                >
                  <FaBriefcase style={{ marginRight: 10 }} />
                  Recruitment and staffing
                </p>
                <p style={{ lineHeight: "2rem" }}>
                  Takeoff provides flexible, efficient, and cost-effective
                  workforce solutions to meet client's workforce requirements
                </p>
                {page === 3 ? null : (
                  <p
                    style={{
                      textAlign: "right",
                      color: "#0F52BA",
                      margin: 0,
                      fontWeight: "500",
                    }}
                  >
                    Read More...
                  </p>
                )}
              </div>
              <div
                onClick={() => setpage(4)}
                style={{
                  borderBottomLeftRadius: 50,
                  padding: "1rem",
                  boxShadow: "10px 10px 21px 6px rgba(232, 238, 248, 0.75)",
                  cursor: "pointer",
                  backgroundColor: page === 4 ? "#002366" : "#f3f6fc",
                  color: page === 4 ? "#fff" : "#000",
                }}
              >
                <p
                  style={{
                    fontSize: "1.4rem",
                    color: page === 4 ? "#fff" : "#002366",
                    fontWeight: "500",
                  }}
                >
                  <FaFileAlt style={{ marginRight: 6 }} /> Technical Publication
                </p>
                <p>We design, develop and document your product</p>
                {page === 4 ? null : (
                  <p
                    style={{
                      textAlign: "right",
                      color: "#0F52BA",
                      margin: 0,
                      fontWeight: "500",
                    }}
                  >
                    Read More...
                  </p>
                )}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "80vh",
                padding: "2rem",
                overflowY: "auto",
                boxShadow: "10px 10px 21px 6px rgba(232, 238, 248, 0.75)",
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                lineHeight: "2rem",
              }}
            >
              {page === 1 ? (
                <Aircraft />
              ) : page === 2 ? (
                <Internship />
              ) : page === 3 ? (
                <Recruit />
              ) : (
                <TechnicalPub />
              )}
            </div>
          </div>
        </div>

        {/* Career */}
        <div
          id="about"
          style={{
            marginBottom: "6rem",
            margin: "1rem",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h1 style={{ color: "#e4e4e4", fontSize: "3rem" }}>Career</h1>

          <p style={{ fontSize: "2rem", color: "#252B5D", fontWeight: "500" }}>
            TAKEOFF YOUR CAREER WITH US!
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "2rem" }}>
            Join us in one of our full time roles and see how you can takeoff
            your career to new heights. Stay connected to us about the current
            opportunities in technical writing and aircraft maintenance so that
            we can reach out to you.
          </p>
          <a href="#contact">
            <Button
              variant="contained"
              size="large"
              style={{ borderRadius: 20 }}
            >
              Drop Us Email
            </Button>
          </a>
        </div>
        {/* about us */}
        <div
          id="about"
          style={{
            marginBottom: "5rem",
            margin: "1rem",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h1
            style={{ color: "#e4e4e4", fontSize: "3rem", textAlign: "center" }}
          >
            ABOUT US
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img src={aboutimg} alt="" width={400} />
            <div style={{ fontSize: "1.1rem", lineHeight: "2rem" }}>
              <p>
                TakeOff Techno Solutions Pvt. Ltd (TOTSPL) is an aviation
                Services Company founded in 2017 by a team of experienced
                aviation specialists, providing a wide range of solutions
                ranging from technical documentation, Aircraft Maintenance and
                repair, Aircraft Management, Training solutions for airlines and
                AME Training Schools.
              </p>
              <p>
                Our talent pool includes technical authors, illustrators,
                Information Architects and Aircraft Maintenance Engineers have
                extensive experience in delivering projects and products that
                are globally spread with varied programme guidelines, standards
                and compliance needs. Our goal is to provide the innovative,
                flexible and cost effective solutions to meet our client's
                requirements.
              </p>
              <p>
                We provide consulting and outsourcing services, in which we
                support our customers in projects, skills and manpower, both
                in-house and offshore.
              </p>
            </div>
          </div>
        </div>
        {/* contact us */}
        <div
          id="contact"
          style={{
            marginBottom: "6rem",
            margin: "1rem",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h1
            style={{ color: "#e4e4e4", fontSize: "3rem", textAlign: "right" }}
          >
            CONTACT US
          </h1>
          <p
            style={{
              marginBottom: "5rem",
              textAlign: "right",
              fontSize: "1.1rem",
              lineHeight: "2rem",
            }}
          >
            Contact us today to know how takeoff stragetic solutions can help
            your business needs
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <div
                  style={{
                    //boxShadow: "-10px 10px 21px -6px rgba(0,0,0,0.75)",
                    padding: "1rem",
                    borderRadius: 8,
                    // backgroundColor: "#f3f6fc",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        marginRight: 10,
                        backgroundColor: "#e8eef8",
                        color: "#002366",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 30,
                        width: 30,
                        borderRadius: 30,
                        boxShadow: "-5px 5px 10px -6px rgba(0,0,0,0.75)",
                      }}
                    >
                      <MdLocationOn size={20} />
                    </div>
                    <div style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                      Address
                    </div>
                  </div>

                  <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>
                    <div style={{ marginBottom: "10px" }}>
                      Takeoff Techno Solutions Private Limited
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      #25/25,Jakkur Plantation,Yashodha Nagar
                    </div>
                    <div style={{}}>Bengaluru - 560064</div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  style={{
                    //boxShadow: "-10px 10px 21px -6px rgba(0,0,0,0.75)",
                    padding: "1rem",
                    borderRadius: 8,
                    // backgroundColor: "#f3f6fc",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        marginRight: 10,
                        backgroundColor: "#e8eef8",
                        color: "#002366",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 30,
                        width: 30,
                        borderRadius: 30,
                        boxShadow: "-5px 5px 10px -6px rgba(0,0,0,0.75)",
                      }}
                    >
                      <IoMdMail size={16} />
                    </div>
                    <div style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                      E-mail
                    </div>
                  </div>

                  <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>
                    info@totspl.com
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  style={{
                    // boxShadow: "-10px 10px 21px -6px rgba(0,0,0,0.75)",
                    padding: "1rem",
                    borderRadius: 8,
                    // backgroundColor: "#f3f6fc",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        marginRight: 10,
                        backgroundColor: "#e8eef8",
                        color: "#002366",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 30,
                        width: 30,
                        borderRadius: 30,
                        boxShadow: "-5px 5px 10px -6px rgba(0,0,0,0.75)",
                      }}
                    >
                      <FaPhoneAlt size={16} />
                    </div>
                    <div style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                      Contact No.
                    </div>
                  </div>

                  <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>
                    +91 8088853145
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      {/* footer */}
      <div
        style={{
          backgroundColor: "#252B5D",
          padding: "1rem 2rem",
          paddingBottom: "2rem",
          color: "#fff",
          paddingLeft: "5rem",
          paddingRight: "5rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: "1.4rem" }}>TakeOff Techno Solutions</p>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "1rem",
              }}
            >
              <div style={{ color: "white" }}>
                <MdLocationOn
                  style={{ marginRight: "5px" }}
                  size={20}
                  color="#e4e4e4"
                />
              </div>
              <div>
                <div style={{ marginBottom: "5px" }}>
                  Takeoff Techno Solutions Private Limited
                </div>
                <div style={{ marginBottom: "5px" }}>
                  #25/25,Jakkur Plantation,Yashodha Nagar
                </div>
                <div style={{ marginBottom: "5px" }}>Bengaluru - 560064</div>
              </div>
            </div>
            <a href="mailto:info@totspl.com" style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <IoMdMail
                  style={{ marginRight: "5px" }}
                  size={18}
                  color="#e4e4e4"
                />
                <div style={{ textDecoration: "none", color: "white" }}>
                  info@totspl.com
                </div>
              </div>
            </a>
            <a href="tel:+918088853145" style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginBottom: "1rem",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "white" }}>
                  <FaPhoneAlt
                    style={{ marginRight: "5px" }}
                    size={16}
                    color="#e4e4e4"
                  />
                </div>
                <div style={{ textDecoration: "none", color: "white" }}>
                  +91 8088853145
                </div>
              </div>
            </a>
          </div>
          <div>
            <p style={{ fontSize: "1.2rem" }}>Industries We Server</p>
            <p style={{ fontSize: "1rem" }}>Aerospace</p>
            <p style={{ fontSize: "1rem" }}>Automotive</p>
            <p style={{ fontSize: "1rem" }}>Healthcare</p>
            <p style={{ fontSize: "1rem" }}>Software</p>
          </div>
          <div>
            <p style={{ fontSize: "1.2rem" }}>Services We Offer</p>
            <p style={{ fontSize: "1rem" }}>
              Aircraft Management &amp; Maintenance
            </p>
            <p style={{ fontSize: "1rem" }}>Internship</p>
            <p style={{ fontSize: "1rem" }}>Recruitment and staffing</p>
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
    </ThemeProvider>
  );
}

export default App;
