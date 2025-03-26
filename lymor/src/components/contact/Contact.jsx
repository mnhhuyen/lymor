import React from "react";

function Contact() {
    return (
        <div className="flex justify-between">
            <div className="ml-36">
                <h1 className="text-xl font-semibold mb-3">Contact Us</h1> {/* Reduced font size */}
                <div className="flex items-center mb-3">
                    <i className="fas fa-phone-alt text-lg mr-3"></i> {/* Smaller icon */}
                    <span className="text-sm">Call 800 843 3269 <i className="fas fa-chevron-right"></i></span>
                </div>
                <div className="flex items-center mb-3">
                    <i className="fas fa-gem text-lg mr-3"></i>
                    <span className="text-sm">Book an Appointment <i className="fas fa-chevron-right"></i></span>
                </div>
                <div className="flex items-center mb-3">
                    <i className="fas fa-calendar-alt text-lg mr-3"></i>
                    <span className="text-sm">Request a Callback to Book an Appointment <i className="fas fa-chevron-right"></i></span>
                </div>
                <div className="flex items-center mb-3">
                    <i className="fas fa-map-marker-alt text-lg mr-3"></i>
                    <span className="text-sm">Track Your Order <i className="fas fa-chevron-right"></i></span>
                </div>
            </div>
            <div className="mr-36">
                <h1 className="text-xl font-semibold mb-3">Client Care Hours of Operations (EDT):</h1>
                <p className="text-sm">Monday–Friday: 8:00AM–10:00PM EDT</p>
                <p className="text-sm">Saturday: 9:00AM-9:00PM EDT</p>
                <p className="text-sm">Sunday: 10:00AM-9:00PM EDT</p>
            </div>
        </div>
    );
}

export default Contact;
