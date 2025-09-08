import React from "react";

function AboutAara() {
    return (
        <div className="container my-5">
            <div className="text-center mb-4">
                <img
                    className="navbar-brand fw-bold rounded-circle"
                    src="https://aaradesigner.com/storage/2025/07/aara-designer-studio-main-logo.jpg"
                    height="70"
                    width="70"
                    alt="Logo"
                />
            </div>
            <h1 className="display-4 text-center fw-bold mb-4">
                <span style={{ color: "#761c5a" }}>About Aara-The Designer Studio</span>
            </h1>
            <p className="fs-5 fw-semibold text-muted text-center">
                Welcome to <span style={{ color: "#761c5a" }}>Aara-The Designer Studio</span>,
                a clothing brand born from the vision and passion of{" "}
                <span style={{ color: "#761c5a" }}>SUBHA BASKARAN</span> — a creative
                force driven by a love for style, innovation, and individuality. With
                every design, <span style={{ color: "#761c5a" }}>SUBHA BASKARAN</span>{" "}
                brings a personal touch, blending inspiration from her journey, culture,
                and creativity. <span style={{ color: "#761c5a" }}>Aara-The Designer Studio</span>
                is more than just apparel — its a reflection of bold ideas, timeless
                aesthetics, and a commitment to quality.
            </p>
        </div>
    );
}

export default AboutAara;
