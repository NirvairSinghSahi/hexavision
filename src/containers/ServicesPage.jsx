// src/containers/ServicesPage.jsx
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Servicesstyles.css";
import LazyImage from "../components/LazyImage";
import emailjs from '@emailjs/browser';

const ServicesPage = () => {
    const [activeForm, setActiveForm] = useState("appointment");

    const openSidebar = () => {
        document.getElementById("sidebar").style.width = "250px";
    };

    const closeSidebar = () => {
        document.getElementById("sidebar").style.width = "0";
    };

    useEffect(() => {
        const appointmentForm = document.getElementById("appointment-form");
        const assistanceForm = document.getElementById("assistance-form");
        const appointmentBtn = document.getElementById("appointment-button");
        const assistanceBtn = document.getElementById("assistance-button");

        if (activeForm === "appointment") {
            appointmentForm?.classList.add("active");
            appointmentForm?.classList.remove("hidden");
            assistanceForm?.classList.add("hidden");
            assistanceForm?.classList.remove("active");

            appointmentBtn?.classList.add("active");
            assistanceBtn?.classList.remove("active");
        } else {
            assistanceForm?.classList.add("active");
            assistanceForm?.classList.remove("hidden");
            appointmentForm?.classList.add("hidden");
            appointmentForm?.classList.remove("active");

            assistanceBtn?.classList.add("active");
            appointmentBtn?.classList.remove("active");
        }
    }, [activeForm]);

    const handleAppointmentSubmit = (e) => {
        e.preventDefault();
      
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?\d{7,15}$/;
      
        if (!firstName || !lastName || !email || !phone) {
          alert("Please fill out all required fields.");
          return;
        }
      
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }
      
        if (!phoneRegex.test(phone)) {
          alert("Please enter a valid phone number (7-15 digits).");
          return;
        }
      
        emailjs
          .sendForm(
            "service_ml9fho8",
            "template_irls43h",
            e.target,
            "TCeiZADLiObiz9wzv"
          )
          .then(() => {
            alert("Appointment form submitted successfully!");
            e.target.reset();
          })
          .catch((error) => {
            console.error("Email sending error:", error);
            alert("Failed to send appointment. Please try again later.");
          });
      };

      const handleAssistanceSubmit = (e) => {
        e.preventDefault();
      
        const firstName = document
          .getElementById("first-name-assistance")
          .value.trim();
        const lastName = document.getElementById("last-name-assistance").value.trim();
        const email = document.getElementById("email-assistance").value.trim();
        const details = document.getElementById("details").value.trim();
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        if (!firstName || !lastName || !email || !details) {
          alert("Please fill out all required fields.");
          return;
        }
      
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }
      
        emailjs
          .sendForm(
            "service_ml9fho8",
            "template_orz523c",
            e.target,
            "TCeiZADLiObiz9wzv"
          )
          .then(() => {
            alert("Assistance request submitted successfully!");
            e.target.reset();
          })
          .catch((error) => {
            console.error("Email sending error:", error);
            alert("Failed to send your request. Please try again later.");
          });
      };
    return (
        <>
            <Header />
            <Navbar />

            {/* Mobile Header */}
            <header className="mobile-header">
                <h1>HEXA VISION</h1>
                <span
                    className="mobile-menu-icon"
                    onClick={() => openSidebar()}
                >
                    &#9776;
                </span>
            </header>

            {/* Sidebar */}
            <div id="sidebar" className="sidebar">
                <span className="close-btn" onClick={() => closeSidebar()}>
                    &times;
                </span>
                <a href="/">THE HOUSE</a>
                <a href="/collections">HIGH JEWELRY</a>
                <a href="/engagement">ENGAGEMENT & BRIDAL</a>
                <a href="/watches">WATCHES</a>
                <a href="/services">SERVICES</a>
            </div>

            {/* Client Services Section */}
            <section className="client-services-section">
                <div className="image-container">
                    <LazyImage
                        src="/Services/img1.jpg"
                        alt="Client Services"
                        className="responsive-image"
                    />
                </div>
                <div className="content-container">
                    <h1>Client Services</h1>
                    <p>
                        A dedicated Hexa Vision Client Services expert looks
                        forward to providing you with the ultimate personalized
                        experience.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <div className="container">
                <div className="form-nav-buttons">
                    <button
                        id="appointment-button"
                        className="nav-button"
                        onClick={() => setActiveForm("appointment")}
                    >
                        Schedule an Appointment
                    </button>
                    <button
                        id="assistance-button"
                        className="nav-button"
                        onClick={() => setActiveForm("assistance")}
                    >
                        Request Assistance
                    </button>
                </div>

                {/* Appointment Form */}
                <form
                    id="appointment-form"
                    className="form active"
                    onSubmit={handleAppointmentSubmit}
                >
                    <fieldset>
                        <legend>Salon Detail</legend>
                        <div className="form-group">
                            <label htmlFor="country">
                                Salon Country/Region
                            </label>
                            <select id="country" name="country">
                                <option value="">Canada</option>
                                <option value="">China</option>
                                <option value="">France</option>
                                <option value="">Japan</option>
                                <option value="">USA</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="salon">Select a Salon</label>
                            <select id="salon" name="salon">
                                <option value="">Select</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" name="date" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="time">Time</label>
                            <select id="time" name="time">
                                <option value="">Select</option>
                            </select>
                        </div>
                        <p className="note">
                            If you're unable to select certain dates, kindly
                            contact the Hexa Vision Salon directly by phone.{" "}
                            <a href="#">Find a Salon.</a>
                        </p>
                    </fieldset>

                    <fieldset>
                        <legend>Personal Information</legend>
                        <div className="form-group-inline">
                            <label>
                                <input type="radio" name="title" value="mr" />{" "}
                                Mr.
                            </label>
                            <label>
                                <input type="radio" name="title" value="mrs" />{" "}
                                Mrs.
                            </label>
                            <label>
                                <input type="radio" name="title" value="ms" />{" "}
                                Ms.
                            </label>
                            <label>
                                <input type="radio" name="title" value="mx" />{" "}
                                Mx.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="title"
                                    value="prefer-not-to-say"
                                />{" "}
                                Prefer not to say
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input
                                type="text"
                                id="first-name"
                                name="first-name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input
                                type="text"
                                id="last-name"
                                name="last-name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" />
                        </div>
                        <div className="form-group-inline">
                            <label>
                                <input type="checkbox" name="contact-email" />{" "}
                                Email
                            </label>
                            <label>
                                <input type="checkbox" name="contact-phone" />{" "}
                                Phone
                            </label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Your Preferences</legend>
                        <div className="form-group">
                            <label htmlFor="interest">Your Interest</label>
                            <select id="interest" name="interest">
                                <option value="">Select</option>
                            </select>
                        </div>
                        <div className="form-group-inline">
                            <label>
                                <input type="checkbox" name="newsletter" /> I
                                would like to receive the newsletter (optional)
                            </label>
                        </div>
                        <div className="form-group-inline">
                            <label>
                                <input
                                    type="checkbox"
                                    name="privacy"
                                    required
                                />{" "}
                                I have read and accept the{" "}
                                <a href="#" className="privacy-link">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>
                    </fieldset>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>

                {/* Assistance Form */}
                <form
                    id="assistance-form"
                    className="form hidden"
                    onSubmit={handleAssistanceSubmit}
                >
                    <fieldset>
                        <legend>Inquiry</legend>
                        <div className="form-group">
                            <label htmlFor="reason">Reason for Inquiry</label>
                            <select id="reason" name="reason">
                                <option value="">Select</option>
                                <option value="general">General Inquiry</option>
                                <option value="technical">
                                    Technical Support
                                </option>
                                <option value="sales">Sales Support</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">
                                Please provide more details (2000 characters
                                max)
                            </label>
                            <textarea
                                id="details"
                                name="details"
                                rows="4"
                                maxLength="2000"
                            ></textarea>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Personal Information</legend>
                        <div className="form-group">
                            <label htmlFor="first-name-assistance">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="first-name-assistance"
                                name="first-name-assistance"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name-assistance">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="last-name-assistance"
                                name="last-name-assistance"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email-assistance">Email</label>
                            <input
                                type="email"
                                id="email-assistance"
                                name="email-assistance"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone-assistance">
                                Phone Number (Optional)
                            </label>
                            <input
                                type="tel"
                                id="phone-assistance"
                                name="phone-assistance"
                            />
                        </div>
                        <div className="form-group-inline">
                            <label>
                                <input
                                    type="checkbox"
                                    name="contact-email-assistance"
                                />{" "}
                                Email
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="contact-phone-assistance"
                                />{" "}
                                Phone
                            </label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Your Preferences</legend>
                        <div className="form-group">
                            <label htmlFor="country-assistance">
                                Salon Country/Region
                            </label>
                            <select
                                id="country-assistance"
                                name="country-assistance"
                            >
                                <option value="">Select</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="salon-assistance">
                                Preferred Salon
                            </label>
                            <select
                                id="salon-assistance"
                                name="salon-assistance"
                            >
                                <option value="">Select</option>
                            </select>
                        </div>
                        <div className="form-group-inline">
                            <label>
                                <input
                                    type="checkbox"
                                    name="newsletter-assistance"
                                />{" "}
                                I would like to receive the newsletter
                                (optional)
                            </label>
                        </div>
                        <div className="form-group-inline">
                            <label>
                                <input
                                    type="checkbox"
                                    name="privacy-assistance"
                                    required
                                />{" "}
                                I have read and accept the{" "}
                                <a href="#" className="privacy-link">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>
                    </fieldset>
                    <button type="submit" className="submit-button">
                        Submit Request
                    </button>
                </form>
            </div>

            {/* Decorative Line */}
            <div className="savoir-bottom-line">
                <span className="golden-line"></span>
                <LazyImage
                    src="/Services/icon-rosette copy.svg"
                    alt="Rosette Icon"
                    className="rosette-icon"
                />
                <span className="golden-line"></span>
            </div>

            {/* Contact Section */}
            <section className="contact-container">
                <h2>Contact Us</h2>
                <p>
                    Hexa Vision Client Services are available at
                    <a href="tel:14321234567">1 432-123-4567</a> and
                    <a href="mailto:clientcare@hexavision.com">
                        clientcare@hexavision.com
                    </a>
                    .
                </p>
                <p>For additional assistance, contact the Salon directly.</p>
            </section>

            {/* Unique Hexa Section */}
            <section className="unique-hexa-vision">
                <div className="container-unique">
                    <div className="background-unique"></div>
                    <div className="content-unique">
                        <h1 className="unique-title">
                            Find Nearest Hexa Vision
                        </h1>
                        <p className="unique-description">
                            We look forward to welcoming you to the
                            extraordinary world of Hexa Vision.
                        </p>
                        <button className="unique-button">FIND A SALON</button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ServicesPage;
