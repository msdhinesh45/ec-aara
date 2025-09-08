import {
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { FaAt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import './Footer.css'

const socialLinks = [
  {
    name: "Instagram",
    link: "/",
    icon: <FaInstagram />,
  },
  {
    name: "Facebook",
    link: "/",
    icon: <FaFacebook />,
  },
  {
    name: "X",
    link: "/",
    icon: <FaXTwitter />,
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/+918072842781",
    icon: <ImWhatsapp />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-light text-dark border-top pt-5">
      <div className="container">
        <div className="row align-items-start">
          {/* LEFT: Logo, Email, Phone, Socials */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://aaradesigner.com/storage/2025/07/aara-designer-studio-main-logo.jpg"
                alt="Logo"
                height="60"
                className="rounded-circle me-2"
              />
              <span
                className="fs-4 fw-semibold"
                style={{ color: "#761c5a" }}
              >
                Aara Designers
              </span>
            </div>
            <span className="mb-1 bg-light text-secondary">
              <FaAt className="me-1"/>
              <strong>aarathedesignerstudio@gmail.com</strong>
            </span> <br/>
            <span className="bg-light text-secondary">
              <IoCall  className="me-1"/>
              <strong>+91 8072842781</strong>
            </span>

            <div className="mt-3">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-dark text-decoration-underline"
              >
                Get direction ↗
              </a>
            </div>

            <ul className="list-unstyled d-flex gap-3 fs-4 mt-3">
              {socialLinks.map(({ name, icon, link }) => (
                <li key={name}>
                  <a
                    href={link}
                    className="text-dark text-decoration-none"
                    title={name}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      transition: "color 0.3s ease",
                    }}
                  >
                    {icon}
                  </a>
                  <span className="visually-hidden">{name} account</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER: Subscribe Form */}
          <div className="col-md-4 mb-4 text-center">
            <h6 className="fw-bold mb-3">Sign Up for Email</h6>
            <span className="p mb-5 pb-5">
              Sign up to get first dibs on new arrivals, sales,
              exclusive content, events and more!
            </span>
           <form className="d-flex justify-content-center flex-wrap">
  <input
    type="email"
    className="form-control me-2 mt-3 py-3"
    placeholder="Your email address"
    required
  />
  <button
    type="submit"
    className="btn rounded-3 mt-3 p-3 w-sm-auto subscirbe-btn"
    style={{ height: "60px",width:"160px", backgroundColor: "#761c5a", color: "white" }}
  >
    Subscribe ↗
  </button>
</form>

          </div>

          {/* RIGHT: Payment methods */}
          <div className="col-md-4 mt-5 pt-5 text-md-end">
            <img
              src="https://aaradesigner.com/storage/2024/07/payments.png"
              alt="Payments"
              width="285"
              height="31"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-light py-3 border-top mt-3">
        <div className="container text-center">
          <span className="text-dark">
            © 2025 Craftygen. All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
